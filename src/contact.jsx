import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage({ onNavigateToHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    quest: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    alert('Votre message a été envoyé aux Gardiens de RPGDRINK ! 🧙‍♂️');
  };

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
          Contactez les Gardiens
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
          Envoyez votre message aux maîtres brasseurs et découvrez nos lieux mystiques
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-12">
        {/* Informations de contact fantastiques */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white drop-shadow mb-6">Nos Sanctuaires</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-300 mb-1">Château Principal</h3>
                  <p className="text-gray-200 text-sm">Forêt de Brocéliande, Bretagne</p>
                  <p className="text-gray-300 text-xs">Accessible par portail magique uniquement</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🌌</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-300 mb-1">Station Spatiale</h3>
                  <p className="text-gray-200 text-sm">Orbite terrestre basse</p>
                  <p className="text-gray-300 text-xs">Téléportation intergalactique disponible</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🐉</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-300 mb-1">Distillerie Dragon</h3>
                  <p className="text-gray-200 text-sm">Montagnes du Pays de Galles</p>
                  <p className="text-gray-300 text-xs">Protégée par des dragons amicaux</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white drop-shadow mb-6">Méthodes de Contact</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-white font-medium">Courrier Mystique</p>
                  <p className="text-gray-300 text-sm">contact@rpgdrink.magique</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <div>
                  <p className="text-white font-medium">Boule de Cristal</p>
                  <p className="text-gray-300 text-sm">+33 1 42 96 42 42</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🕊️</span>
                <div>
                  <p className="text-white font-medium">Messager Pigeon</p>
                  <p className="text-gray-300 text-sm">Livraison en 2-3 jours ouvrables</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white drop-shadow mb-6">Envoyez votre Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-indigo-300 font-medium mb-2">Nom du Héros</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-indigo-400 transition"
                placeholder="Votre nom d'aventurier"
                required
              />
            </div>

            <div>
              <label className="block text-indigo-300 font-medium mb-2">Courrier Électronique</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-indigo-400 transition"
                placeholder="votre@email.magique"
                required
              />
            </div>

            <div>
              <label className="block text-indigo-300 font-medium mb-2">Votre Quête</label>
              <select
                value={formData.quest}
                onChange={(e) => setFormData({...formData, quest: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-400 transition"
                required
              >
                <option value="">Choisissez votre quête</option>
                <option value="commande">Commande spéciale</option>
                <option value="partnership">Partenariat commercial</option>
                <option value="feedback">Retour d'expérience</option>
                <option value="other">Autre aventure</option>
              </select>
            </div>

            <div>
              <label className="block text-indigo-300 font-medium mb-2">Message Mystique</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-indigo-400 transition resize-none"
                placeholder="Racontez-nous votre aventure..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Envoyer le Message 🧙‍♂️
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 