import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/restaurant-dark/1920/1080?blur=2" 
            alt="Fama Restaurant Interior" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
              Une expérience culinaire <br className="hidden md:block" />
              <span className="text-primary italic">latino-américaine</span> <br className="hidden md:block" />
              au cœur de Paris
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-light tracking-wide max-w-xl mx-auto">
              Saveurs authentiques, ambiance chaleureuse.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                to="/reservations" 
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Réserver une table
              </Link>
              <Link 
                to="/menu" 
                className="w-full sm:w-auto bg-transparent border border-foreground/30 text-foreground px-8 py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-foreground/10 transition-colors"
              >
                Voir le menu
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-foreground/50">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <div className="text-sm">
                <span className="font-bold">4.9/5</span> sur Google
              </div>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-border" />
            <p className="text-center md:text-left italic font-serif text-lg text-foreground/80 max-w-md">
              "Le meilleur ceviche de Paris, une ambiance incroyable et un service impeccable."
            </p>
            <div className="hidden md:block w-[1px] h-12 bg-border" />
            <div className="font-serif text-xl tracking-wider uppercase text-foreground/60">
              Le Fooding
            </div>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
                L'âme de l'Amérique Latine, <br />
                <span className="text-primary italic">l'élégance parisienne.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed font-light">
                Fama est né d'une passion pour les saveurs vibrantes et la convivialité de l'Amérique Latine. Notre chef revisite les classiques avec des produits locaux de saison, créant un pont gastronomique entre deux cultures.
              </p>
              <p className="text-foreground/70 leading-relaxed font-light">
                Dans un cadre tamisé et chaleureux, laissez-vous transporter par nos cocktails signature et nos plats à partager, conçus pour éveiller les sens.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors uppercase tracking-widest text-sm font-medium pt-4">
                Notre histoire <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/ceviche/600/800" 
                alt="Plat signature" 
                className="w-full h-full object-cover rounded-sm aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/cocktail-bar/600/800" 
                alt="Cocktail au bar" 
                className="w-full h-full object-cover rounded-sm aspect-[3/4] mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-2 block">Notre Carte</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light">Plats Signatures</h2>
            </div>
            <Link to="/menu" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-medium">
              Voir tout le menu <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ceviche Clásico",
                desc: "Poisson blanc du jour, leche de tigre, maïs chulpi, patate douce, coriandre.",
                img: "https://picsum.photos/seed/ceviche-dish/800/600"
              },
              {
                name: "Tiradito de Saumon",
                desc: "Fines tranches de saumon, sauce passion-aji amarillo, quinoa soufflé.",
                img: "https://picsum.photos/seed/salmon-dish/800/600"
              },
              {
                name: "Asado de Tira",
                desc: "Travers de bœuf confit 12h, purée de manioc, chimichurri maison.",
                img: "https://picsum.photos/seed/beef-dish/800/600"
              }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-6 aspect-[4/3]">
                  <img 
                    src={dish.img} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{dish.name}</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">L'Atmosphère Fama</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light">
            Un lieu pensé pour le partage, où le design contemporain rencontre la chaleur des matériaux bruts.
          </p>
        </div>
        
        {/* Horizontal scrollable gallery on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-4 gap-4 px-4 md:px-6 snap-x snap-mandatory hide-scrollbar">
          {[
            "https://picsum.photos/seed/restaurant-table/600/800",
            "https://picsum.photos/seed/wine-glass/600/800",
            "https://picsum.photos/seed/chef-cooking/600/800",
            "https://picsum.photos/seed/friends-dining/600/800"
          ].map((img, i) => (
            <div key={i} className="min-w-[80vw] md:min-w-0 snap-center">
              <img 
                src={img} 
                alt="Atmosphere" 
                className="w-full h-[60vh] md:h-[500px] object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm font-medium">
            Voir la galerie <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Reservation CTA Block */}
      <section className="relative py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/dark-table-setting/1920/800" 
            alt="Table setting" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
            Vivez l'expérience <span className="text-primary italic">Fama</span>
          </h2>
          <p className="text-lg text-foreground/80 font-light mb-10 max-w-xl mx-auto">
            Réservez votre table dès maintenant pour vous assurer une soirée mémorable.
          </p>
          <Link 
            to="/reservations" 
            className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-2xl"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
