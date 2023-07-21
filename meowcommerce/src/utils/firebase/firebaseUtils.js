import { initializeApp } from "firebase/app";
import {getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import{getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOQTt-AvSyJcLzdMbawyyWkbQTyBmwqk4",
  authDomain: "meowcommerce-ba810.firebaseapp.com",
  projectId: "meowcommerce-ba810",
  storageBucket: "meowcommerce-ba810.appspot.com",
  messagingSenderId: "883282329243",
  appId: "1:883282329243:web:ce331ae48064e124e0903e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


// Initiate provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) =>{
        const docRef = doc(collectionRef, object.title);
        batch.set(docRef, object);

    });

    await batch.commit();
    console.log('transaction completed!');

};

export const getCategoriesAndDocuments = async()=>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
        const {title, items} = docSnapShot.data();
        acc[title.toLowerCase()] = items;
        return acc
    }, {});
    return categoryMap;
}



export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={})=>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userDocRef);

    if (!userSnapshot.exists()){
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        }catch(err){console.log('error creating user', err.message)}
    }

    return userDocRef
};

export const createAuthUserWithEmailPassword = async(email, password)=>{
    if(!email || ! password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async(email, password)=>{
    if(!email || ! password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async ()=>{
    signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>{
    onAuthStateChanged(auth,callback);
};