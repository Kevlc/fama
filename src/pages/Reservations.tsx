import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Phone, MapPin } from 'lucide-react';

export function Reservations() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle actual submission here
      console.log('Reservation submitted:', formData);
      setStep(3);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-muted/10 border border-border/50 p-8 md:p-12 rounded-sm"
          >
            <h1 className="text-3xl md:text-5xl font-serif font-light mb-4">Réserver une table</h1>
            <p className="text-foreground/70 font-light mb-10">
              Réservez votre table en quelques secondes. Pour les groupes de plus de 6 personnes, merci de nous contacter directement.
            </p>

            {step === 3 ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-serif">Demande confirmée</h2>
                <p className="text-foreground/70 font-light">
                  Merci {formData.name}. Votre demande de réservation pour {formData.guests} personnes le {formData.date} à {formData.time} a bien été enregistrée. Vous recevrez un email de confirmation très prochainement.
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-8 text-primary uppercase tracking-widest text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  Faire une autre réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
                          <input 
                            type="date" 
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Heure</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
                          <select 
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-background border border-border rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                          >
                            <option value="" disabled>Choisir une heure</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Nombre de personnes</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
                        <select 
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-sm py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors mt-8"
                    >
                      Continuer
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/50">
                      <div className="text-sm font-light">
                        <span className="text-foreground/60">Réservation pour</span> {formData.guests} personnes <br/>
                        <span className="text-foreground/60">Le</span> {formData.date} <span className="text-foreground/60">à</span> {formData.time}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="text-xs uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                      >
                        Modifier
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Nom complet</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Téléphone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 6 12 34 56 78"
                          className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@exemple.com"
                        className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-foreground/60 font-medium">Demandes spéciales (Optionnel)</label>
                      <textarea 
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Allergies, anniversaire..."
                        className="w-full bg-background border border-border rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors mt-8"
                    >
                      Confirmer la réservation
                    </button>
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>

          {/* Right Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img 
                src="https://picsum.photos/seed/restaurant-table-setting/800/600" 
                alt="Table dressée" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Informations Pratiques</h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-6">
                  Nous conservons votre table pendant 15 minutes après l'heure de réservation. En cas de retard, merci de nous prévenir par téléphone.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-foreground/80">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block font-medium mb-1">Adresse</strong>
                      <span className="font-light">12 Rue de la Gastronomie<br/>75011 Paris, France</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-foreground/80">
                    <Phone className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block font-medium mb-1">Téléphone</strong>
                      <a href="tel:+33123456789" className="font-light hover:text-primary transition-colors">+33 1 23 45 67 89</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-border/50 bg-muted/5 rounded-sm">
                <h4 className="font-serif text-lg mb-2">Groupes & Événements</h4>
                <p className="text-sm text-foreground/70 font-light mb-4">
                  Pour les réservations de plus de 6 personnes ou pour privatiser le restaurant, veuillez nous contacter directement.
                </p>
                <a href="mailto:events@famaparis.com" className="text-primary uppercase tracking-widest text-xs font-medium hover:text-primary/80 transition-colors">
                  events@famaparis.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
