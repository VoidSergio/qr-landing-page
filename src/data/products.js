import sedia from '../assets/oggetto-01-sedia.jpg'
import poltrona from '../assets/oggetto-02-poltrona.jpg'
import sospensione from '../assets/oggetto-03-sospensione.jpg'
import libreria from '../assets/oggetto-04-libreria.jpg'

export const products = [
  {
    id: 1,
    category: 'Seduta',
    name: 'Sedia',
    description: 'Struttura in legno massello, scocca imbottita.',
    price: 320,
    image: sedia,
  },
  {
    id: 2,
    category: 'Seduta',
    name: 'Poltrona',
    description: 'Imbottitura in schiuma differenziata, rivestimento sfoderabile.',
    price: 890,
    image: poltrona,
  },
  {
    id: 3,
    category: 'Illuminazione',
    name: 'Sospensione',
    description: 'Diffusore in vetro soffiato, cavo regolabile.',
    price: 415,
    image: sospensione,
  },
  {
    id: 4,
    category: 'Contenitore',
    name: 'Libreria',
    description: 'Moduli componibili in rovere, montaggio a parete.',
    price: 1240,
    image: libreria,
  },
]
