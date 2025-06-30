import { motion } from 'framer-motion';

export default function PayementPage({ onNavigateToHome }) {
  return (
    <div className="py-16 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 rounded-3xl p-10 border border-white/10 backdrop-blur-sm flex flex-col items-center max-w-lg shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 text-center">
          Paiement Fantastique
        </h1>
        <p className="text-xl text-indigo-200 mb-8 text-center">
          Merci, aventurier !<br/>
          Ta commande va être préparée par nos alchimistes et livrée par pigeon magique ou téléportation intergalactique.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToHome}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Retour à l'accueil
        </motion.button>
      </motion.div>
    </div>
  );
} 