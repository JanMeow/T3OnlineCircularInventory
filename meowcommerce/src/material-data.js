

const windowInfo = require('./data/MetaInfo_windows.json');
const facadeElementInfo = require('./data/MetaInfo_facadeElement.json');
const brickInfo = require('./data/MetaInfo_bricks.json');
const doorInfo = require('./data/MetaInfo_doors.json');


const MaterialData = 
[
  {
    title: 'facade_element',
    items: facadeElementInfo
  },
  {
    title: 'brick',
    items: brickInfo
  },
  {
    title: 'door',
    items: doorInfo
  },
  {
    title: 'window',
    items: windowInfo
  }
]
export default MaterialData;
