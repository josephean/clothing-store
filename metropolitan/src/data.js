import polkaDotDress from './products/Summer-Chiffon-Dress-Polka-Dot.png';
import floralRomper from './products/Floral-Romper.png';
import chiffonRomper from './products/black-chiffon-romper.png';
import creamCropTop from './products/cream-crop-top.png';
import oliveCropTop from './products/olive-crop-top.png';

import whiteCrewNeck from './products/white-crewneck.png'
import blackCrewNeck from './products/black-crewneck.png'

import whiteButtonUp from './products/white-button-up-shirt.png';
import whiteChiffonCasualBlouse from 
  './products/white-chiffon-casual-blouse.jpg';
import blackChiffonCasualBlouse from 
  './products/black-chiffon-casual-blouse.png';

import whiteChiffonTank from './products/white-chiffon-tank.png';
import blackChiffonTank from './products/black-chiffon-tank.png';
import coffeeChiffonTank from './products/coffee-chiffon-tank.png';
import armyGreenChiffonTank from './products/army-green-chiffon-tank.jpg';



const data = {
  allItems: [
    { 
      id: 1,
      image: polkaDotDress,
      category: `ONE-PIECE`,
      name: 'Polka Dot Chiffon Dress',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK' }
      ]
     },
    { 
      id: 2,
      image: floralRomper,
      category: `ONE-PIECE`,
      name: 'Floral Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'NAVY' }
      ]
    },
    { 
      id: 3,
      image: chiffonRomper,
      category: `ONE-PIECE`,
      name: 'Chiffon Ruffled Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK' }
      ]
    },
    { 
      id: 4,
      image: creamCropTop,
      category: 'TOP',
      subcategory: 'tank-tops',
      name: 'Ribbed Tank Top',
      price: 15,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'CREAM' }, 
        { color: 'OLIVE' }
      ],
    },
    {
      id: 5,
      image: whiteCrewNeck,
      category: `TOP`,
      subcategory: 't-shirts',
      name: 'Crewneck Tee',
      price: 10,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'WHITE' }, 
        { color: 'BLACK', }
      ],
   }, 
   {
     id: 6,
     image: whiteButtonUp,
     category: `TOP`,
     subcategory: 'blouses',
     name: 'Button Up - White',
     price: 30,
     sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
     options: [
       { color: 'WHITE' },
     ]
   },
   {
     id: 7,
     image: whiteChiffonCasualBlouse,
     category: `TOP`,
     subcategory: 'blouses',
     name: 'Chiffon Sleeveless',
     price: 25,
     sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
     options: [
      { color: 'WHITE' }, 
      { color: 'BLACK' }
    ],
   },

   {
     id: 8,
     image: whiteChiffonTank,
     category: 'TOP',
     subcategory: 'tank-tops',
     name: 'Chiffon Tank',
     price: 15,
     sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
     options: [
      { color: 'WHITE' }, 
      { color: 'BLACK' }
    ],
   },
   
  ],
  bestSellers: [
    { 
      id: 1,
      image: polkaDotDress,
      category: `ONE-PIECE`,
      name: 'Polka Dot Chiffon Dress',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK' }
      ]
   },
   { 
      id: 2,
      image: floralRomper,
      category: `ONE-PIECE`,
      name: 'Floral Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'NAVY' }
      ]
    },
    { 
      id: 3,
      image: chiffonRomper,
      category: `ONE-PIECE`,
      name: 'Chiffon Ruffled Romper',
      price: 20,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'BLACK' }
      ]
    },
    { 
      id: 4,
      image: creamCropTop,
      category: `TOP`,
      name: 'Ribbed Tank Top',
      price: 15,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      options: [
        { color: 'CREAM' },
        { color: 'OLIVE' },
      ],
    },
  ],
};
export default data;