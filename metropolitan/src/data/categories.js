import images from '../images';

const mapBanners = name => { 
  return images.banners.find(img => img.type === name);
}

const mapItems = (type, data) => {
  return data.filter(item => item.subcategory === type);
}
const categories = [
  { 
    name: 't-shirts',
    title: 'T-Shirts',
    group: 'tops',
    getBanner: () =>  mapBanners('t-shirts').src,
    getItems: data => mapItems('t-shirts', data),
    url: '/tops/t-shirts',
  },
  { 
    name: 'blouses',
    title: 'Blouses',
    group: 'tops',
    getBanner: () =>  mapBanners('blouses').src,
    getItems: data => mapItems('blouses', data),
    url: '/tops/blouses',
  },
  { 
    name: 'tank-tops',
    title: 'Tank Tops',
    group: 'tops',
    getBanner: () =>  mapBanners('tank-tops').src,
    getItems: data => mapItems('tank-tops', data),
    url: '/tops/tank-tops',
  },
  { 
    name: 'jeans',
    title: 'Jeans',
    group: 'bottoms',
    getBanner: () =>  mapBanners('jeans').src,
    getItems: data => mapItems('jeans', data),
    url: '/bottoms/jeans',
  },
  { 
    name: 'pants',
    title: 'Pants',
    group: 'bottoms',
    getBanner: () =>  mapBanners('pants').src,
    getItems: data => mapItems('pants', data),
    url: '/bottoms/pants',
  },
  { 
    name: 'shorts',
    title: 'Shorts',
    group: 'bottoms',
    getBanner: () =>  mapBanners('shorts').src,
    getItems: data => mapItems('shorts', data),
    url: '/bottoms/shorts',
  },
  { 
    name: 'skirts',
    title: 'Skirts',
    group: 'bottoms',
    getBanner: () =>  mapBanners('skirts').src,
    getItems: data => mapItems('skirts', data),
    url: '/bottoms/skirts',
  },
  { 
    name: 'pajamas',
    title: 'Pajamas',
    group: 'loungewear',
    getBanner: () =>  mapBanners('pajamas').src,
    getItems: data => mapItems('pajamas', data),
    url: '/loungewear/pajamas',
  },
  { 
    name: 'activewear',
    title: 'Activewear',
    group: 'loungewear',
    getBanner: () =>  mapBanners('activewear').src,
    getItems: data => mapItems('activewear', data),
    url: '/loungewear/activewear',
  },
];

export default categories;