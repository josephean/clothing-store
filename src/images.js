import TShirtImage from './banners/women-looking-at-each-other-4557879.jpg';
import TankImage from './banners/woman-in-gray-tank-top-lying-on-bed.jpg';
import BlouseImage from './banners/woman-in-white-dress-shirt-wearing-black-fedora-hat.jpg';
import JeansImage from './banners/women-holding-hands-jeans.jpg';
import PantsImage from './banners/woman-in-yellow-jacket-and-black-pants-sitting-on-the-floor.jpg';
import ShortsImage from './banners/woman-wearing-pink-printed-crew-neck-t-shirt-and-blue-faded.jpg';
import SkirtImage from './banners/woman-wearing-black-cardigan-gray-skirt.jpg';
import PajamasImage from './banners/young-woman-bonding-with-partner-in-bed.jpg'
import ActivewearImage from './banners/photo-of-woman-doing-yoga.jpg';

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


const images = { 
  banners: [ 
     { type: 't-shirts', src: TShirtImage }, 
     { type: 'blouses', src: BlouseImage}, 
     { type: 'tank-tops', src: TankImage},
     { type: 'jeans', src: JeansImage },
     { type: 'pants', src: PantsImage },
     { type: 'shorts', src: ShortsImage },
     { type: 'skirts', src: SkirtImage },
     { type: 'pajamas', src: PajamasImage },
     { type: 'activewear', src: ActivewearImage },
  ],

  products: [
    { 
      id: 1,
      options: [
        { 
          color: 'BLACK', 
          src: polkaDotDress, 
          defaultImage: true, 
        }
      ]
    },
    { 
      id: 2,
      options: [
        { 
          color: 'NAVY', 
          src: floralRomper, 
          defaultImage: true, 
        }
      ]
    },
    { 
      id: 3,
      options: [
        { 
          color: 'BLACK', 
          src: chiffonRomper, 
          defaultImage: true, 
        }
      ]
    },
    { 
      id: 4,
      options: [
        { 
          color: 'CREAM', 
          src: creamCropTop, 
          defaultImage: true, 
        },
        { 
          color: 'OLIVE', 
          src: creamCropTop, 
        },
      ]
    },
  
    
  ]
}


export default images;