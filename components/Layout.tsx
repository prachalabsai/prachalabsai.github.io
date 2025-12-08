
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FlaskConical, Book, FileText, Fingerprint, Menu, X, Github, Wrench } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label, onClick }: { to: string; icon: any; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider transition-colors duration-200 
      ${isActive 
        ? 'bg-[#1c1c1c] text-[#FDFBF7]' 
        : 'text-[#1c1c1c] hover:bg-[#B44C43] hover:text-[#FDFBF7]'}`
    }
  >
    <Icon size={16} />
    {label}
  </NavLink>
);

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1c1c1c] overflow-x-hidden selection:bg-[#B44C43] selection:text-white">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 border-b-2 border-[#1c1c1c] bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#B44C43] border border-[#1c1c1c] flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(28,28,28,1)] group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                  <span className="font-serif font-bold text-[#FDFBF7] text-xl italic">P</span>
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">PrachaLabs<span className="text-[#B44C43]">.ai</span></span>
              </NavLink>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <NavItem to="/" icon={Fingerprint} label="Manifesto" />
              <NavItem to="/journal" icon={Book} label="Journal" />
              <NavItem to="/tracker" icon={FlaskConical} label="Tracker" />
              <NavItem to="/articles" icon={FileText} label="Articles" />
              <NavItem to="/tools" icon={Wrench} label="Tools" />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border border-[#1c1c1c] shadow-[2px_2px_0px_0px_rgba(28,28,28,1)] active:shadow-none active:translate-y-0.5 transition-all"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-[#1c1c1c] bg-[#F2EFE9]">
            <div className="flex flex-col p-4 space-y-2">
              <NavItem to="/" icon={Fingerprint} label="Manifesto" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/journal" icon={Book} label="Journal" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/tracker" icon={FlaskConical} label="Tracker" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/articles" icon={FileText} label="Articles" onClick={() => setIsMenuOpen(false)} />
              <NavItem to="/tools" icon={Wrench} label="Tools" onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-8 w-px h-full border-l border-dashed border-[#1c1c1c] opacity-10 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 right-8 w-px h-full border-l border-dashed border-[#1c1c1c] opacity-10 pointer-events-none hidden md:block"></div>
        
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#1c1c1c] bg-[#F2EFE9] mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-serif font-bold text-lg">PrachaLabs</h3>
              <p className="font-mono text-xs text-[#555] mt-1">Expression of Thoughts • Est. 2025</p>
            </div>
            
            <div className="flex gap-4">
               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#B44C43] hover:text-white border border-transparent hover:border-[#1c1c1c] transition-colors rounded-full">
                 <Github size={20} />
               </a>
            </div>

            <div className="text-center md:text-right font-mono text-xs text-[#555]">
              <p>Designed & Engineered for Exploration</p>
              <p className="opacity-50">Columbia University • Data Science</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
