import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from './details.jsx';

function getRandomDrink(result) {
  if (result === 20) return products[0]; // RPG Beer
  if (result >= 16) return products[1]; // Dragon Whiskey
  if (result >= 10) return products[2]; // Space Beer
  return products[3]; // Knight of Beer
}

export default function MysterePage({ onNavigateToHome }) {
  const [dice, setDice] = useState(null);
  const [drink, setDrink] = useState(null);
  const [rolling, setRolling] = useState(false);

  const handleRoll = () => {
    setRolling(true);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 20) + 1;
      setDice(result);
      setDrink(getRandomDrink(result));
      setRolling(false);
    }, 1200);
  };

  return (
    <div className="py-8 md:py-16 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToHome}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition mb-8"
        >
          ← Retour à l'accueil
        </motion.button>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          L'antre des mystères
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow mb-6">
          Bienvenue, aventurier ! Tente ta chance au <span className="text-indigo-300 font-bold">Drink & Roll</span> :
          lance le dé mystique et découvre quelle boisson t'est destinée ce soir...
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRoll}
          disabled={rolling}
          className="bg-gradient-to-r from-indigo-700 to-indigo-400 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-lg border-4 border-indigo-300 hover:from-indigo-800 hover:to-indigo-500 transition disabled:opacity-60"
        >
          {rolling ? 'Lancement...' : 'Lancer le dé 20 !'}
        </motion.button>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: dice ? 1 : 0.8, opacity: dice ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {dice && (
            <>
              <motion.div
                key={dice}
                initial={{ scale: 0.5, rotate: 0 }}
                animate={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="text-6xl font-extrabold text-indigo-300 drop-shadow mb-2"
              >
                {dice}
              </motion.div>
              <span className="text-white text-lg mb-4">Résultat du dé mystique</span>
            </>
          )}
        </motion.div>

        {drink && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm flex flex-col items-center max-w-md"
          >
            <div className="w-32 h-32 bg-white/20 rounded-2xl overflow-hidden border border-gray-200 shadow-lg mb-4">
              <img src={drink.img} alt={drink.name} className="object-contain w-full h-full" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{drink.name}</h2>
            <p className="text-indigo-200 mb-2">{drink.desc}</p>
            <span className="text-indigo-300 font-bold text-lg">{drink.price}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
} 