import { motion } from 'motion/react';

const images = [
  { src: "https://picsum.photos/seed/fama-interior-1/800/1000", alt: "Intérieur du restaurant", span: "md:col-span-2 md:row-span-2" },
  { src: "https://picsum.photos/seed/fama-dish-1/800/800", alt: "Plat signature", span: "md:col-span-1 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-cocktail-1/800/800", alt: "Cocktail au bar", span: "md:col-span-1 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-people-1/1200/800", alt: "Clients profitant de l'ambiance", span: "md:col-span-2 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-dish-2/800/800", alt: "Ceviche", span: "md:col-span-1 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-interior-2/800/800", alt: "Détail de décoration", span: "md:col-span-1 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-chef-1/800/1000", alt: "Chef en cuisine", span: "md:col-span-1 md:row-span-2" },
  { src: "https://picsum.photos/seed/fama-dish-3/800/800", alt: "Dessert", span: "md:col-span-1 md:row-span-1" },
  { src: "https://picsum.photos/seed/fama-wine-1/800/800", alt: "Sélection de vins", span: "md:col-span-1 md:row-span-1" },
];

export function Gallery() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">Galerie</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">L'Expérience Visuelle</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Plongez dans l'univers Fama. Des assiettes vibrantes à l'atmosphère tamisée de notre salle.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4"
        >
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-sm ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
        
        <div className="mt-24 text-center">
          <p className="text-foreground/60 mb-8 font-light italic font-serif text-xl">"On mange d'abord avec les yeux."</p>
          <a 
            href="/reservations" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Vivre l'expérience
          </a>
        </div>

      </div>
    </div>
  );
}
