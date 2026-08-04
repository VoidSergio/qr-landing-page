import blogg1 from '../assets/Prodotti/Blogg 1.png'
import blogg2 from '../assets/Prodotti/Blogg 2.png'
import blogg3 from '../assets/Prodotti/Blogg 3.png'
import blogg4 from '../assets/Prodotti/Blogg 4.png'

import khal1 from '../assets/Prodotti/Scultura Khal.jpg'
import khal2 from '../assets/Prodotti/Scultura Khal 2.jpg'
import khal3 from '../assets/Prodotti/Scultura Khal 3.jpg'
import khal4 from '../assets/Prodotti/Scultura Khal 4.jpg'

import eivis1 from '../assets/Prodotti/Elvis 1.png'

import carbon1 from '../assets/Prodotti/Coffee table Carbon1.jpeg'
import carbon2 from '../assets/Prodotti/Coffee table Carbon2.png'
import carbon3 from '../assets/Prodotti/Coffee table Carbon3.png'

import dream1 from '../assets/Prodotti/Dream divano 1.jpeg'
import dream2 from '../assets/Prodotti/Divano Dream 2.jpg'

import telfs1 from '../assets/Prodotti/Tavolino Telfs.jpg'
import telfs2 from '../assets/Prodotti/Tavolino Telfs 2.jpg'

import oliveBig from '../assets/Prodotti/Vaso Olive big.jpg'
import oliveSmall from '../assets/Prodotti/Vaso Olive small.jpg'

import yat30_1 from '../assets/Prodotti/Vaso YAT  cream Ø30x52 cm.jpg'
import yat30_2 from '../assets/Prodotti/Vaso YAT 2  cream Ø30x52 cm.jpg'

import yat52_1 from '../assets/Prodotti/Vaso YAT cream Ø52x81 cm.jpg'
import yat52_2 from '../assets/Prodotti/Vaso YAT 2 cream Ø52x81 cm.jpg'
import yat52_3 from '../assets/Prodotti/Vaso YAT 3 cream Ø52x81 cm.jpg'

import julia1 from '../assets/Prodotti/Seduta da esterno Julia.avif'
import julia2 from '../assets/Prodotti/Seduta da esterno Julia 2.avif'

import perla1 from '../assets/Prodotti/Coffe table Perla.jpeg'

import cassel1 from '../assets/Prodotti/Lampada CASSEL.jpeg'
import cassel2 from '../assets/Prodotti/Lampada CASSEL 2.jpg'

import poltroncinaDream1 from '../assets/Prodotti/Poltroncina Dream.jpg'
import poltroncinaDream2 from '../assets/Prodotti/Poltroncina Dream 2.jpg'
import poltroncinaDream3 from '../assets/Prodotti/Poltroncina Dream 3.jpg'

import buffetRetro1 from '../assets/Prodotti/Buffet retro.jpeg'

export const products = [
  {
    id: 1,
    category: 'Divano',
    name: 'Divano Blogg',
    description:
      'Divano 3 posti in tessuto Marshmallow, seduta trapuntata, struttura in abete massiccio, piedini in faggio tinti nero.',
    price: 4650,
    priceNote: '+ consegna e montaggio',
    images: [blogg1, blogg2, blogg3, blogg4],
  },
  {
    id: 2,
    category: 'Decorazione',
    name: 'Scultura Khal',
    description: 'Figura decorativa in finitura cemento nero, design scultoreo.',
    price: 662,
    priceNote: '+ consegna e montaggio',
    images: [khal1, khal2, khal3, khal4],
  },
  {
    id: 3,
    category: 'Illuminazione',
    name: 'Lampada Eivis',
    description:
      'Lampada da terra in cartapesta lavorata a mano, ispirazione mediterranea, finitura beige/terracotta/nero.',
    price: 707,
    priceNote: '+ consegna e montaggio',
    images: [eivis1],
  },
  {
    id: 4,
    category: 'Tavolino',
    name: 'Tavolino Carbon',
    description:
      'Base scultorea ispirata a forme organiche, piano dal design fluido.',
    price: 1280,
    priceNote: 'la coppia + consegna e montaggio',
    images: [carbon1, carbon2, carbon3],
  },
  {
    id: 5,
    category: 'Divano',
    name: 'Divano Dream',
    description: 'Divano componibile, linee morbide e avvolgenti.',
    price: 3470,
    priceNote: '+ consegna e montaggio',
    images: [dream1, dream2],
  },
  {
    id: 6,
    category: 'Tavolino',
    name: 'Tavolino Telfs',
    description: 'Tavolino basso, forma compatta.',
    price: 405,
    priceNote: '+ consegna e montaggio',
    images: [telfs1, telfs2],
  },
  {
    id: 7,
    category: 'Decorazione',
    name: 'Vaso Olive Big',
    description: 'Vaso decorativo, formato grande.',
    price: 807,
    priceNote: '+ consegna e montaggio',
    images: [oliveBig],
  },
  {
    id: 8,
    category: 'Decorazione',
    name: 'Vaso Olive Small',
    description: 'Vaso decorativo, formato piccolo.',
    price: 630,
    priceNote: '+ consegna e montaggio',
    images: [oliveSmall],
  },
  {
    id: 9,
    category: 'Decorazione',
    name: 'Vaso YAT Cream Ø30x52',
    description: 'Vaso in tonalità beige, ideale per fiori o rami artificiali.',
    price: 224,
    priceNote: '+ consegna',
    images: [yat30_1, yat30_2],
  },
  {
    id: 10,
    category: 'Decorazione',
    name: 'Vaso YAT Cream Ø52x81',
    description:
      'Vaso in tonalità beige, formato grande, ideale per fiori o rami artificiali.',
    price: 638,
    priceNote: '+ consegna',
    images: [yat52_1, yat52_2, yat52_3],
  },
  {
    id: 11,
    category: 'Poltroncina',
    name: 'Poltroncina Julia',
    description: 'Poltroncina da esterno in corda e acciaio galvanizzato verde.',
    price: 764,
    priceNote: '+ consegna',
    images: [julia1, julia2],
  },
  {
    id: 12,
    category: 'Tavolino',
    name: 'Tavolino Perla',
    description: 'Tavolino in metallo e marmo.',
    price: 1052,
    priceNote: '+ consegna',
    images: [perla1],
  },
  {
    id: 13,
    category: 'Illuminazione',
    name: 'Lampada Cassel',
    description: 'Lampada da tavolo in bronzo anticato, base in metallo.',
    price: 224,
    priceNote: '+ consegna',
    images: [cassel1, cassel2],
  },
  {
    id: 14,
    category: 'Poltroncina',
    name: 'Poltroncina Dream',
    description: 'Poltroncina dal design morbido e accogliente.',
    price: 312,
    priceNote: '+ consegna',
    images: [poltroncinaDream1, poltroncinaDream2, poltroncinaDream3],
  },
  {
    id: 15,
    category: 'Buffet',
    name: 'Buffet Retrò',
    description:
      'Buffet Retrò in legno laccato nero e piano in legno massello. Dimensioni 160 x 48 x 88 cm.',
    price: 3690,
    priceNote: '+ consegna e montaggio',
    images: [buffetRetro1],
  },
]
