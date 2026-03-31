import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">Nous Trouver</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">Contact & Accès</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Pour toute question, demande de privatisation ou simplement pour nous dire bonjour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-serif uppercase tracking-wider">Coordonnées</h3>
                <ul className="space-y-4 text-foreground/80 font-light">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-primary shrink-0 mt-1" size={18} />
                    <span>12 Rue de la Gastronomie<br/>75011 Paris, France</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="text-primary shrink-0" size={18} />
                    <a href="tel:+33123456789" className="hover:text-primary transition-colors">+33 1 23 45 67 89</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="text-primary shrink-0" size={18} />
                    <a href="mailto:bonjour@famaparis.com" className="hover:text-primary transition-colors">bonjour@famaparis.com</a>
                  </li>
                </ul>
                <div className="flex gap-4 pt-2">
                  <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-serif uppercase tracking-wider">Horaires</h3>
                <ul className="space-y-3 text-foreground/80 font-light">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Lundi - Mercredi</span>
                    <span>19:00 - 23:30</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Jeudi - Samedi</span>
                    <span>19:00 - 01:00</span>
                  </li>
                  <li className="flex justify-between text-primary pb-2">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/10 border border-border/50 p-8 rounded-sm">
              <h3 className="text-2xl font-serif mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Nom</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Sujet</label>
                  <select className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Information générale</option>
                    <option>Privatisation / Événement</option>
                    <option>Presse / Partenariat</option>
                    <option>Recrutement</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-transparent border border-foreground text-foreground py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[500px] lg:h-auto min-h-[500px] rounded-sm overflow-hidden border border-border/50 relative grayscale hover:grayscale-0 transition-all duration-1000"
          >
            {/* Embedded Google Map - using a placeholder iframe for the example */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3761!3d48.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dfd89ace8f1%3A0x50b82c36894ce10!2s11th%20arrondissement%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Carte de localisation Fama Paris"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
