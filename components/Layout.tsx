
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FlaskConical, Book, FileText, Fingerprint, Menu, X, Github, Wrench, Sun, Moon } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label, onClick }: { to: string; icon: any; label: string; onClick?: () => void }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 font-pixel text-lg uppercase tracking-wider transition-colors duration-200 
      ${isActive
        ? 'text-[var(--accent-secondary)] border-b-2 border-[var(--accent-secondary)]'
        : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-b-2 hover:border-[var(--border-main)]'}`
    }
  >
    <Icon size={16} />
    {label}
  </NavLink>
);

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Apply Theme class to body
  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden selection:bg-[var(--accent-primary)] selection:text-white transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border-main)] bg-[var(--bg-main)]/95 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-[var(--accent-primary)] border-2 border-[var(--text-main)] flex items-center justify-center shadow-[4px_4px_0px_0px_var(--shadow-color)] group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                  <span className="font-serif font-bold text-[var(--bg-main)] text-2xl italic">P</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-pixel text-3xl text-[var(--text-main)] leading-none">PrachaLabs</span>
                  <span className="font-mono text-[10px] text-[var(--accent-secondary)] tracking-[0.2em] leading-none">EST. 2025</span>
                </div>
              </NavLink>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              <NavItem to="/" icon={Fingerprint} label="Manifesto" />
              <NavItem to="/tracker" icon={FlaskConical} label="Tracker" />
              <NavItem to="/articles" icon={FileText} label="Articles" />
              <NavItem to="/tools" icon={Wrench} label="Tools" />

              <button
                onClick={toggleTheme}
                className="ml-4 p-2 text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors"
                title="Toggle Light Switch"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--accent-secondary)] transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 border border-[var(--border-main)] text-[var(--text-main)] shadow-[2px_2px_0px_0px_var(--shadow-color)] active:shadow-none active:translate-y-0.5 transition-all"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-main)] bg-[var(--bg-card)]">
            <div className="flex flex-col p-4 space-y-2">
              <NavItem to="/" icon={Fingerprint} label="Manifesto" onClick={() => setIsMenuOpen(false)} />
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
        <div className="absolute top-0 left-8 w-px h-full border-l border-dashed border-[var(--border-main)] opacity-20 pointer-events-none hidden md:block"></div>
        <div className="absolute top-0 right-8 w-px h-full border-l border-dashed border-[var(--border-main)] opacity-20 pointer-events-none hidden md:block"></div>

        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-main)] bg-[var(--bg-card)] mt-auto transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-pixel text-2xl text-[var(--text-main)]">PrachaLabs</h3>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1">Expression of Thoughts • Est. 2025</p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[var(--accent-primary)] hover:text-[var(--bg-main)] border border-[var(--border-main)] hover:border-[var(--accent-primary)] transition-colors">
                <Github size={20} />
              </a>
            </div>

            <div className="text-center md:text-right font-mono text-xs text-[var(--text-muted)]">
              <p>Designed & Engineered for Exploration</p>
              <p className="opacity-50">Columbia University • Data Science</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
