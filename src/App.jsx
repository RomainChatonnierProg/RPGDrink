import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo_rpgdrink.webp';
import beerMap from './assets/beer_with_map.png';
import { products } from './details.jsx';
import MysterePage from './mystere.jsx';
import ContactPage from './contact.jsx';
import PayementPage from './payement.jsx';
import './App.css';

// --- Animated Background ---
function AnimatedBackground({ onCampfireClick }) {
  // Génère des étoiles scintillantes
  const stars = Array.from({ length: 40 });

  // Feu de camp en bas à droite
  function Campfire() {
    return (
      <div className="absolute bottom-6 right-8 z-20 flex flex-col items-center pointer-events-auto select-none cursor-pointer" onClick={onCampfireClick} title="Entrer dans l'antre des mystères">
        {/* Flammes du feu de camp */}
        <div className="relative flex flex-col items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={
                `absolute bottom-0 left-1/2 -translate-x-1/2 ` +
                (i === 0 ? 'w-8 h-16' : i === 1 ? 'w-6 h-12' : 'w-4 h-8')
              }
              style={{ zIndex: 2 - i }}
              initial={{ scaleY: 1, opacity: 0.7 }}
              animate={{
                scaleY: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
                y: [0, -10 - i * 4, 0],
              }}
              transition={{
                duration: 1.8 + i * 0.5,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              <div className={
                `w-full h-full rounded-full ` +
                (i === 0
                  ? 'bg-gradient-to-t from-orange-700 via-yellow-400 to-transparent opacity-80'
                  : i === 1
                  ? 'bg-gradient-to-t from-orange-500 via-yellow-300 to-transparent opacity-70'
                  : 'bg-gradient-to-t from-yellow-300 via-yellow-100 to-transparent opacity-60')
              } />
            </motion.div>
          ))}
          {/* Bûches */}
          <div className="relative z-10 flex gap-1 mt-8">
            <div className="w-6 h-2 rounded-full bg-yellow-900 rotate-12" />
            <div className="w-6 h-2 rounded-full bg-yellow-800 -rotate-12 -ml-2" />
            <div className="w-5 h-2 rounded-full bg-yellow-900 rotate-3 -ml-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Fond dégradé nuit étoilée */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1023] via-[#181c2b] to-[#23243a] opacity-100" />
      {/* Étoiles */}
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 80;
        const size = 1.5 + Math.random() * 2.5;
        const color = Math.random() > 0.7 ? '#b3cfff' : '#fff';
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: color,
              zIndex: 2,
              filter: 'blur(0.5px)',
              opacity: 0.85,
            }}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        );
      })}
      {/* Feu de camp animé cliquable */}
      <Campfire />
    </div>
  );
}

// --- Page d'accueil ---
function HomePage({ onNavigateToProducts, onPayement }) {
  return (
    <>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8 md:py-16 gap-8"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            L'alcool <span className="text-indigo-400">des aventuriers</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-xl mx-auto md:mx-0 drop-shadow">
            Explorez notre sélection unique de boissons inspirées des univers fantastiques et RPG. Goûtez l'aventure !
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNavigateToProducts}
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Découvrir
          </motion.button>
        </div>
        <motion.img
          src={beerMap}
          alt="Bière RPG avec carte"
          className="w-full max-w-xs md:max-w-md rounded-3xl shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.section>

      {/* Produits */}
      <section id="produits" className="py-10 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow">Nos alcools phares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
          {products.map((prod, idx) => (
            <motion.div
              key={prod.name}
              className="bg-white/10 rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition border border-white/10 backdrop-blur-sm"
              whileHover={{ y: -8, scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-center w-40 h-40 mb-4 bg-white/20 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <img src={prod.img} alt={prod.name} className="object-contain w-full h-full" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-center text-white drop-shadow">{prod.name}</h3>
              <p className="text-gray-200 text-center mb-4 drop-shadow">{prod.desc}</p>
              <span className="font-bold text-indigo-300 text-lg mb-2 drop-shadow">{prod.price}</span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onPayement}
                className="mt-auto bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Ajouter au panier
              </motion.button>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToProducts}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Voir plus de détails
          </motion.button>
        </div>
      </section>

      {/* À propos */}
      <motion.section
        id="about"
        className="py-12 md:py-20 px-4 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow">À propos de RPGDRINK</h2>
        <p className="max-w-2xl mx-auto text-gray-200 text-lg drop-shadow">
          RPGDRINK, c'est la passion des univers fantastiques et du goût authentique. Nos boissons sont conçues pour les explorateurs, les rêveurs et tous ceux qui veulent vivre une aventure à chaque gorgée. Santé, héros !
        </p>
      </motion.section>
    </>
  );
}

// --- Page des alcools détaillée ---
function ProductsPage({ onNavigateToHome, onPayement }) {
  return (
    <div className="py-8 md:py-16">
      <div className="text-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNavigateToHome}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition mb-8"
        >
          ← Retour à l'accueil
        </motion.button>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Nos Alcools Phares
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
          Découvrez l'histoire, l'origine et les secrets de fabrication de nos boissons légendaires
        </p>
      </div>

      <div className="space-y-16 px-4 md:px-12">
        {products.map((prod, idx) => (
          <motion.div
            key={prod.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/10 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-white/20 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <img src={prod.img} alt={prod.name} className="object-contain w-full h-full" />
                </div>
              </div>

              {/* Détails */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-2">{prod.name}</h2>
                  <p className="text-xl text-gray-200 drop-shadow">{prod.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="font-semibold text-indigo-300 mb-2">Alcool</h3>
                    <p className="text-white">{prod.alcool}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="font-semibold text-indigo-300 mb-2">Volume</h3>
                    <p className="text-white">{prod.volume}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-indigo-300 mb-2">Origine</h3>
                    <p className="text-gray-200 leading-relaxed">{prod.origin}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-300 mb-2">Fabrication</h3>
                    <p className="text-gray-200 leading-relaxed">{prod.fabrication}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-300 mb-2">Ingrédients</h3>
                    <p className="text-gray-200 leading-relaxed">{prod.ingredients}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-indigo-300">{prod.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onPayement}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
                  >
                    Ajouter au panier
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Ajout de la navigation vers la page mystère et paiement
  if (currentPage === 'mystere') {
    return (
      <>
        <AnimatedBackground onCampfireClick={() => {}} />
        <div className="relative z-10">
          <MysterePage onNavigateToHome={() => setCurrentPage('home')} />
        </div>
      </>
    );
  }
  if (currentPage === 'payement') {
    return (
      <>
        <AnimatedBackground onCampfireClick={() => {}} />
        <div className="relative z-10">
          <PayementPage onNavigateToHome={() => setCurrentPage('home')} />
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <AnimatedBackground onCampfireClick={() => setCurrentPage('mystere')} />
      <div className="relative z-10">
        {/* Header sticky amélioré */}
        <header className="sticky top-0 z-30 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-sm flex items-center justify-between px-4 py-2 md:px-12 md:py-3 transition-all">
          <div className="flex items-center gap-3 bg-black/70 rounded-full px-3 py-1">
            <img src={logo} alt="Logo RPGDRINK" className="h-12 w-12 rounded-full shadow-md object-cover bg-black/80 p-1" />
          </div>
          <nav className="flex gap-6 md:gap-10 text-base md:text-lg font-medium bg-black/60 rounded-full px-4 py-1">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-indigo-400 transition-colors ${currentPage === 'home' ? 'text-indigo-400' : 'text-white'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setCurrentPage('products')}
              className={`hover:text-indigo-400 transition-colors ${currentPage === 'products' ? 'text-indigo-400' : 'text-white'}`}
            >
              Nos alcools
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-indigo-400 transition-colors ${currentPage === 'contact' ? 'text-indigo-400' : 'text-white'}`}
            >
              Contact
            </button>
          </nav>
        </header>

        {/* Contenu principal */}
        {currentPage === 'home' ? (
          <HomePage 
            onNavigateToProducts={() => setCurrentPage('products')} 
            onPayement={() => setCurrentPage('payement')}
          />
        ) : currentPage === 'products' ? (
          <ProductsPage 
            onNavigateToHome={() => setCurrentPage('home')} 
            onPayement={() => setCurrentPage('payement')}
          />
        ) : (
          <ContactPage onNavigateToHome={() => setCurrentPage('home')} />
        )}

        {/* Footer */}
        <footer className="mt-auto py-6 text-center text-gray-400 text-sm bg-transparent border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span>&copy; {new Date().getFullYear()} RPGDRINK. Tous droits réservés.</span>
            <span className="hidden md:inline">|</span>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:text-indigo-400 transition"
            >
              Contact
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
