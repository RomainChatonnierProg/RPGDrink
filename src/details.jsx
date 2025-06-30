import rpgBeer from './assets/RPG_Beer.png';
import dragonWhiskey from './assets/dragon_whiskey.png';
import spaceBeer from './assets/space_beer.png';
import knightOfBeer from './assets/knight_of_beer.png';

export const products = [
  {
    name: 'RPG Beer',
    img: rpgBeer,
    desc: 'Une bière blonde artisanale pour les aventuriers.',
    price: '4,90€',
    origin: 'Brassée dans les caves ancestrales de la Forêt de Brocéliande, cette bière blonde tire son caractère unique des eaux cristallines des sources sacrées et du houblon sauvage récolté à la pleine lune.',
    fabrication: 'Notre maître brasseur, Gardien des Traditions depuis 7 générations, utilise une méthode ancestrale transmise oralement. La fermentation se fait dans des fûts de chêne centenaires, et l\'affinage dure 3 semaines dans les caves humides creusées dans la roche.',
    ingredients: 'Eau de source sacrée, malt d\'orge bio, houblon sauvage de Brocéliande, levure ancestrale, herbes aromatiques locales.',
    alcool: '5.2%',
    volume: '33cl'
  },
  {
    name: 'Dragon Whiskey',
    img: dragonWhiskey,
    desc: 'Whiskey épicé, réservé aux vrais héros.',
    price: '29,90€',
    origin: 'Distillé dans les montagnes embrumées du Pays de Galles, ce whiskey unique est vieilli dans des fûts qui ont contenu du sherry espagnol et des épices orientales. La légende raconte que les dragons dormants réchauffent naturellement les caves de vieillissement.',
    fabrication: 'Le processus de distillation utilise des alambics en cuivre forgés par des artisans locaux. Le vieillissement de 12 ans se fait dans des fûts de chêne espagnol, enrichis d\'épices rares : cannelle de Ceylan, clous de girofle de Zanzibar, et vanille de Madagascar.',
    ingredients: 'Orge maltée galloise, eau de source des montagnes, levure de distillerie ancestrale, épices orientales sélectionnées, fûts de chêne espagnol.',
    alcool: '43%',
    volume: '70cl'
  },
  {
    name: 'Space Beer',
    img: spaceBeer,
    desc: 'Bière galactique, brassée dans les étoiles.',
    price: '5,90€',
    origin: 'Inspirée des voyages interstellaires, cette bière est brassée avec des ingrédients cultivés en microgravité. Les céréales sont exposées aux radiations cosmiques pour développer des saveurs uniques, et l\'eau provient de comètes glacées.',
    fabrication: 'Le brassage se fait dans des cuves pressurisées qui simulent les conditions spatiales. La fermentation utilise une levure génétiquement modifiée pour résister aux conditions extrêmes. L\'affinage se fait en orbite basse pendant 6 mois.',
    ingredients: 'Eau de comète purifiée, malt d\'orge spatial, houblon cultivé en microgravité, levure cosmique, minéraux d\'astéroïdes.',
    alcool: '6.8%',
    volume: '50cl'
  },
  {
    name: 'Knight of Beer',
    img: knightOfBeer,
    desc: 'Bière brune, force et honneur dans chaque gorgée.',
    price: '6,90€',
    origin: 'Brassée dans les caves médiévales du Château de Camelot, cette bière brune honore les traditions chevaleresques. Les céréales sont cultivées dans les terres fertiles entourant le château, et l\'eau provient du puits sacré des chevaliers.',
    fabrication: 'La méthode de brassage remonte aux temps des chevaliers de la Table Ronde. Le malt est torréfié dans des fours en pierre, et la fermentation se fait dans des tonneaux de chêne centenaires. L\'affinage dure 4 semaines dans les caves humides du château.',
    ingredients: 'Eau du puits sacré de Camelot, malt d\'orge torréfié, houblon noble, levure de tradition médiévale, caramel naturel.',
    alcool: '6.5%',
    volume: '33cl'
  },
]; 