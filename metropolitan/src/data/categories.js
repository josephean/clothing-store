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
    group: 'tops',
    getBanner: () =>  mapBanners('t-shirts').src,
    getItems: () => mapItems('t-shirts'),
    url: '/tops/t-shirts',
  },
  { 
    name: 'blouses',
    title: 'Blouses',
    group: 'tops',
    getBanner: () =>  mapBanners('blouses').src,
    getItems: () => mapItems('blouses'),
    url: '/tops/blouses',
  },
  { 
    name: 'tank-tops',
    title: 'Tank Tops',
    group: 'tops',
    getBanner: () =>  mapBanners('tank-tops').src,
    getItems: () => mapItems('tank-tops'),
    url: '/tops/tank-tops',
  },
  { 
    name: 'jeans',
    title: 'Jeans',
    group: 'bottoms',
    getBanner: () =>  mapBanners('jeans').src,
    getItems: () => mapItems('jeans'),
    url: '/bottoms/jeans',
  },
  { 
    name: 'pants',
    title: 'Pants',
    group: 'bottoms',
    getBanner: () =>  mapBanners('pants').src,
    getItems: () => mapItems('pants'),
    url: '/bottoms/pants',
  },
  { 
    name: 'shorts',
    title: 'Shorts',
    group: 'bottoms',
    getBanner: () =>  mapBanners('shorts').src,
    getItems: () => mapItems('shorts'),
    url: '/bottoms/shorts',
  },
  { 
    name: 'skirts',
    title: 'Skirts',
    group: 'bottoms',
    getBanner: () =>  mapBanners('skirts').src,
    getItems: () => mapItems('skirts'),
    url: '/bottoms/skirts',
  },
  { 
    name: 'pajamas',
    title: 'Pajamas',
    group: 'loungewear',
    getBanner: () =>  mapBanners('pajamas').src,
    getItems: () => mapItems('pajamas'),
    url: '/loungewear/pajamas',
  },
  { 
    name: 'activewear',
    title: 'Activewear',
    group: 'loungewear',
    getBanner: () =>  mapBanners('activewear').src,
    getItems: () => mapItems('activewear'),
    url: '/loungewear/activewear',
  },
];

export default categories;