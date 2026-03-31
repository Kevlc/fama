import { motion } from 'motion/react';

const menuData = {
  starters: [
    { name: "Guacamole Fama", desc: "Avocat écrasé minute, grenade, totopos maison.", price: "12", tags: ["V", "GF"] },
    { name: "Ceviche Clásico", desc: "Poisson blanc du jour, leche de tigre, maïs chulpi, patate douce, coriandre.", price: "18", tags: ["GF", "Signature"] },
    { name: "Tiradito de Saumon", desc: "Fines tranches de saumon, sauce passion-aji amarillo, quinoa soufflé.", price: "19", tags: ["GF"] },
    { name: "Empanadas de Carne", desc: "Chaussons farcis au bœuf effiloché épicé, sauce chimichurri (2 pièces).", price: "14", tags: [] },
    { name: "Tostada de Thon", desc: "Thon rouge mariné, mayonnaise chipotle, avocat, poireau frit sur tortilla croustillante.", price: "16", tags: [] },
  ],
  mains: [
    { name: "Asado de Tira", desc: "Travers de bœuf confit 12h, purée de manioc, chimichurri maison.", price: "32", tags: ["GF", "Signature"] },
    { name: "Pulpo a la Parrilla", desc: "Poulpe grillé, pommes de terre grenailles au piment fumé, sauce olive botija.", price: "34", tags: ["GF"] },
    { name: "Arroz con Mariscos", desc: "Riz crémeux aux fruits de mer, pâte d'aji panca, petits pois, poivrons.", price: "28", tags: ["GF"] },
    { name: "Pollo a la Brasa", desc: "Demi-poulet mariné aux épices péruviennes, frites de patate douce, sauce huacatay.", price: "26", tags: ["GF"] },
    { name: "Coliflor Asada", desc: "Chou-fleur rôti entier, crème de noix de cajou au piment rocoto, amandes effilées.", price: "22", tags: ["V", "GF"] },
  ],
  desserts: [
    { name: "Tres Leches", desc: "Gâteau éponge imbibé aux trois laits, meringue italienne, zestes de citron vert.", price: "11", tags: ["V"] },
    { name: "Churros con Dulce de Leche", desc: "Churros croustillants, sucre à la cannelle, sauce dulce de leche tiède.", price: "10", tags: ["V"] },
    { name: "Mousse au Chocolat d'Équateur", desc: "Chocolat noir 70%, fleur de sel, huile d'olive vierge extra, tuile de cacao.", price: "12", tags: ["V", "GF"] },
  ],
  drinks: [
    { name: "Pisco Sour Clásico", desc: "Pisco Quebranta, jus de citron vert, sirop de sucre, blanc d'œuf, Angostura.", price: "14", tags: [] },
    { name: "Margarita Fama", desc: "Tequila reposado, mezcal, liqueur d'orange, citron vert, sel volcanique.", price: "15", tags: ["Signature"] },
    { name: "Paloma", desc: "Tequila blanco, jus de pamplemousse frais, sirop d'agave, soda, pointe de sel.", price: "13", tags: [] },
    { name: "Agua de Jamaica", desc: "Infusion de fleurs d'hibiscus, sirop d'agave, citron vert (Sans alcool).", price: "7", tags: [] },
  ]
};

function MenuSection({ title, items }: { title: string, items: any[] }) {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-serif font-light mb-10 pb-4 border-b border-border/50 uppercase tracking-widest">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-lg font-medium tracking-wide flex items-center gap-3">
                {item.name}
                {item.tags.includes("Signature") && (
                  <span className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-sm">Signature</span>
                )}
              </h3>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-12 border-b border-dotted border-border/50"></div>
                <span className="text-lg font-serif">{item.price}€</span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm font-light leading-relaxed pr-8">{item.desc}</p>
            <div className="flex gap-2 mt-2">
              {item.tags.filter((t: string) => t !== "Signature").map((tag: string) => (
                <span key={tag} className="text-[10px] text-foreground/40 border border-border px-1.5 py-0.5 rounded-sm" title={tag === 'V' ? 'Végétarien' : 'Sans Gluten'}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-widest text-xs font-semibold mb-4 block">Notre Carte</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">Le Menu</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Une sélection de plats pensés pour être partagés, inspirés par les traditions culinaires d'Amérique Latine et sublimés par des techniques modernes.
          </p>
          <div className="flex justify-center gap-6 mt-8 text-xs text-foreground/50 uppercase tracking-wider">
            <span className="flex items-center gap-1"><span className="border border-border px-1 rounded-sm">V</span> Végétarien</span>
            <span className="flex items-center gap-1"><span className="border border-border px-1 rounded-sm">GF</span> Sans Gluten</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MenuSection title="Entrées à partager" items={menuData.starters} />
          <MenuSection title="Plats Principaux" items={menuData.mains} />
          <MenuSection title="Desserts" items={menuData.desserts} />
          <MenuSection title="Cocktails & Boissons" items={menuData.drinks} />
        </motion.div>
        
        <div className="mt-24 text-center p-12 border border-border/50 bg-muted/10 rounded-sm">
          <h3 className="text-2xl font-serif mb-4">Prêt à déguster ?</h3>
          <p className="text-foreground/60 mb-8 font-light">Réservez votre table pour découvrir ces saveurs.</p>
          <a 
            href="/reservations" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Réserver une table
          </a>
        </div>
      </div>
    </div>
  );
}
