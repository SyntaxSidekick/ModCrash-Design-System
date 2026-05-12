import { Link, useLocation } from 'react-router';
import logo from '../../assets/modcrash-logo.png';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/colors', label: 'Colors' },
    { path: '/typography', label: 'Typography' },
    { path: '/spacing', label: 'Spacing' },
    { path: '/components', label: 'Components' },
    { path: '/patterns', label: 'Patterns' },
    { path: '/accessibility', label: 'Accessibility' },
    { path: '/use-cases', label: 'Use Cases' },
    { path: '/motion', label: 'Motion' },
    { path: '/dark-mode', label: 'Dark Mode' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="ModCrash" className="h-8" />
            <span className="hidden md:inline text-sm text-muted-foreground">Design System</span>
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
