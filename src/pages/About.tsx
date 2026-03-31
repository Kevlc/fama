import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">Notre Histoire</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">L'Esprit Fama</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Une célébration de l'héritage culinaire latino-américain, réimaginé avec l'élégance et le savoir-faire parisien.
          </p>
        </motion.div>

        {/* Story Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-6"
          >
            <h2 className="text-3xl font-serif font-light">Des Racines Profondes</h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              Fama est né de la rencontre entre deux cultures passionnées par la gastronomie. Notre fondateur, originaire de Lima, a souhaité apporter à Paris l'authenticité et la chaleur des "picanterías" traditionnelles, ces lieux de vie où l'on partage bien plus qu'un repas.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed">
              Le nom "Fama" évoque la renommée et la célébration. C'est une invitation à se rassembler autour de plats généreux, préparés avec des ingrédients sourcés avec le plus grand soin, tant en Amérique Latine qu'auprès de producteurs locaux français.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/chef-portrait/800/1000" 
              alt="Chef préparant un plat" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/20 border border-border/50 p-12 md:p-20 rounded-sm mb-32 text-center"
        >
          <h2 className="text-3xl font-serif font-light mb-16">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-primary rounded-full flex items-center justify-center text-primary font-serif text-xl italic">1</div>
              <h3 className="text-xl font-serif tracking-wide uppercase">Authenticité</h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed">
                Le respect des recettes traditionnelles et des techniques ancestrales, transmises de génération en génération.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-primary rounded-full flex items-center justify-center text-primary font-serif text-xl italic">2</div>
              <h3 className="text-xl font-serif tracking-wide uppercase">Qualité</h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed">
                Une sélection rigoureuse de produits frais, de saison, privilégiant les circuits courts et l'agriculture responsable.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-primary rounded-full flex items-center justify-center text-primary font-serif text-xl italic">3</div>
              <h3 className="text-xl font-serif tracking-wide uppercase">Hospitalité</h3>
              <p className="text-foreground/60 font-light text-sm leading-relaxed">
                L'art de recevoir à la latino-américaine : chaleureux, attentionné et toujours avec le sourire.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-sm overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/restaurant-interior-details/800/1000" 
              alt="Détails de l'intérieur du restaurant" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-light">Le Lieu</h2>
            <p className="text-foreground/70 font-light leading-relaxed">
              Situé dans le bouillonnant 11ème arrondissement, l'espace a été conçu par un studio d'architecture parisien renommé. L'objectif : créer un écrin élégant qui laisse la vedette à l'assiette.
            </p>
            <p className="text-foreground/70 font-light leading-relaxed">
              Les matériaux bruts comme le bois brûlé et la pierre naturelle côtoient des touches de laiton et des textiles chauds, rappelant les paysages contrastés de la cordillère des Andes. La cuisine ouverte permet d'observer le ballet de notre brigade, ajoutant une dimension spectaculaire à votre repas.
            </p>
            <div className="pt-8">
              <a 
                href="/gallery" 
                className="inline-block border border-foreground text-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Découvrir la galerie
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
