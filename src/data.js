// import polkaDotDress from '../products/Summer-Chiffon-Dress-Polka-Dot.png';
// import floralRomper from '../public/products/Floral-Romper.png';
// import chiffonRomper from '../public/products/black-chiffon-romper.png';
// import creamCropTop from '../public/products/cream-crop-top.png';
// import oliveCropTop from '../public/products/olive-crop-top.png';

// import whiteCrewNeck from '../public/products/white-crewneck.png'
// import blackCrewNeck from '../public/products/black-crewneck.png'

// import whiteButtonUp from '../public/products/white-button-up-shirt.png';
// import whiteChiffonCasualBlouse from 
//   '../public/products/white-chiffon-casual-blouse.jpg';
// import blackChiffonCasualBlouse from 
//   '../public/products/black-chiffon-casual-blouse.png';

// import whiteChiffonTank from '../public/products/white-chiffon-tank.png';
// import blackChiffonTank from '../public/products/black-chiffon-tank.png';
// import coffeeChiffonTank from '../public/products/coffee-chiffon-tank.png';
// import armyGreenChiffonTank from '../public/products/army-green-chiffon-tank.jpg';



const data = {
  allItems: [
    { 
      id: 1,
      image: '/products/Summer-Chiffon-Dress-Polka-Dot.png',
      category: `ONE-PIECE`,
      name: 'Polka Dot Chiffon Dress',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK', image: '/products/Summer-Chiffon-Dress-Polka-Dot.png' }
      ]
     },
    { 
      id: 2,
      image: '/products/Floral-Romper.png',
      category: `ONE-PIECE`,
      name: 'Floral Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'NAVY', image: '/products/Floral-Romper.png' }
      ]
    },
    { 
      id: 3,
      image: '/products/black-chiffon-romper.png',
      category: `ONE-PIECE`,
      name: 'Chiffon Ruffled Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK', image: '/products/black-chiffon-romper.png' }
      ]
    },
    { 
      id: 4,
      image: '/products/cream-crop-top.png',
      category: 'TOP',
      subcategory: 'tank-tops',
      name: 'Ribbed Tank Top',
      price: 15,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'CREAM', image: '/products/cream-crop-top.png' }, 
        { color: 'OLIVE', image: '/products/olive-crop-top.png' }
      ],
    },
    {
      id: 5,
      image: '/products/white-crewneck.png',
      category: `TOP`,
      subcategory: 't-shirts',
      name: 'Crewneck Tee',
      price: 10,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'WHITE', image: '/products/white-crewneck.png' }, 
        { color: 'BLACK', image: '/products/black-crewneck.png' }
      ],
   }, 
  //   {
  //     id: 6,
  //     image: blackCrewNeck,
  //     category: `TOP`,
  //     subcategory: 't-shirts',
  //     name: 'Crewneck Tee - Black',
  //     price: 10,
  //  }, 
  //  {
  //    id: 7,
  //    image: oliveCropTop,
  //    category: `TOP`,
  //    subcategory: 'tank-tops',
  //    name: 'Ribbed Tank Top - Olive',
  //    price: 15,
  //  },
  //  {
  //    id: 8,
  //    image: whiteButtonUp,
  //    category: `TOP`,
  //    subcategory: 'blouses',
  //    name: 'Button Up - White',
  //    price: 30,
  //  },
   {
     id: 9,
     image: '/products/white-chiffon-casual-blouse.jpg',
     category: `TOP`,
     subcategory: 'blouses',
     name: 'Chiffon Sleeveless',
     price: 25,
     sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
     options: [
      { color: 'WHITE', image: '/products/white-chiffon-casual-blouse.jpg' }, 
      { color: 'BLACK', image: '/products/black-chiffon-casual-blouse.jpg' }
    ],
   },

   {
     id: 11,
     image: '/products/white-chiffon-tank.png',
     category: 'TOP',
     subcategory: 'tank-tops',
     name: 'Chiffon Tank',
     price: 15,
     sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
     options: [
      { color: 'WHITE', image: '/products/white-chiffon-tank.png' }, 
      { color: 'BLACK', image: '/products/black-chiffon-tank.png' }
    ],
   },

  //  {
  //    id: 12,
  //    image: blackChiffonTank,
  //    category: 'TOP',
  //    subcategory: 'tank-tops',
  //    name: 'Chiffon Tank - Black',
  //    price: 15,
  //  },
   
  ],
  bestSellers: [
    { 
      id: 1,
      image: '/products/Summer-Chiffon-Dress-Polka-Dot.png',
      category: `ONE-PIECE`,
      name: 'Polka Dot Chiffon Dress',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK', image: '/products/Summer-Chiffon-Dress-Polka-Dot.png' }
      ]
     },
    { 
      id: 2,
      image: '/products/Floral-Romper.png',
      category: `ONE-PIECE`,
      name: 'Floral Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'NAVY', image: '/products/Floral-Romper.png' }
      ]
    },
    { 
      id: 3,
      image: '/products/black-chiffon-romper.png',
      category: `ONE-PIECE`,
      name: 'Chiffon Ruffled Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK', image: '/products/black-chiffon-romper.png' }
      ]
    },
    { 
      id: 4,
      image: '/products/cream-crop-top.png',
      category: 'TOP',
      subcategory: 'tank-tops',
      name: 'Ribbed Tank Top',
      price: 15,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'CREAM', image: '/products/cream-crop-top.png' }, 
        { color: 'OLIVE', image: '/products/olive-crop-top.png' }
      ],

    },
  ],
};
export default data;