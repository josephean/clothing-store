import images from '../images';
import data from '../data';

const mapBanners = (name) => { 
  return images.banners.find(img => img.type === name);
}

const mapItems = (type) => {
  return data.allItems.filter(item => item.subcategory === type);
}
const categories = [
  { 
    name: 't-shirts',
    title: 'T-Shirts',
    getBanner: () =>  mapBanners('t-shirts').src,
    getItems: () => mapItems('t-shirts'),
  },
  { 
    name: 'blouses',
    title: 'Blouses',
    getBanner: () =>  mapBanners('blouses').src,
    getItems: () => mapItems('blouses'),
  },
  { 
    name: 'tank-tops',
    title: 'Tank Tops',
    getBanner: () =>  mapBanners('tank-tops').src,
    getItems: () => mapItems('tank-tops'),
  },
  { 
    name: 'jeans',
    title: 'Jeans',
    getBanner: () =>  mapBanners('jeans').src,
    getItems: () => mapItems('jeans'),
  },
  { 
    name: 'pants',
    title: 'Pants',
    getBanner: () =>  mapBanners('pants').src,
    getItems: () => mapItems('pants'),
  },
  { 
    name: 'shorts',
    title: 'Shorts',
    getBanner: () =>  mapBanners('shorts').src,
    getItems: () => mapItems('shorts'),
  },
  { 
    name: 'skirts',
    title: 'Skirts',
    getBanner: () =>  mapBanners('skirts').src,
    getItems: () => mapItems('skirts'),
  },
  { 
    name: 'pajamas',
    title: 'Pajamas',
    getBanner: () =>  mapBanners('pajamas').src,
    getItems: () => mapItems('pajamas'),
  },
  { 
    name: 'activewear',
    title: 'Activewear',
    getBanner: () =>  mapBanners('activewear').src,
    getItems: () => mapItems('activewear'),
  },
];

export default categories;