import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif font-semibold tracking-wider uppercase block">
              Fama
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Une expérience culinaire latino-américaine au cœur de Paris. Saveurs authentiques, ambiance chaleureuse.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                  12 Rue de la Gastronomie<br />75011 Paris, France
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href="tel:+33123456789" className="hover:text-foreground transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a href="mailto:bonjour@famaparis.com" className="hover:text-foreground transition-colors">
                  bonjour@famaparis.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-wider uppercase">Horaires</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Lundi - Mercredi</span>
                <span>19:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Jeudi - Samedi</span>
                <span>19:00 - 01:00</span>
              </li>
              <li className="flex justify-between text-primary">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif tracking-wider uppercase">Liens Utiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/menu" className="hover:text-foreground transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-foreground transition-colors">Réservations</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">Notre Histoire</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">Privatisation</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fama Paris. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
