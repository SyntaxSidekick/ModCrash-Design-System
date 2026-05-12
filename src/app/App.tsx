import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { CoverPage } from './components/pages/CoverPage';
import { ColorsPage } from './components/pages/ColorsPage';
import { TypographyPage } from './components/pages/TypographyPage';
import { SpacingPage } from './components/pages/SpacingPage';
import { ComponentsPage } from './components/pages/ComponentsPage';
import { PatternsPage } from './components/pages/PatternsPage';
import { AccessibilityPage } from './components/pages/AccessibilityPage';
import { UseCasesPage } from './components/pages/UseCasesPage';
import { MotionPage } from './components/pages/MotionPage';
import { DarkModePage } from './components/pages/DarkModePage';

export default function App() {
  return (
    <BrowserRouter basename="/ModCrash-Design-System">
      <div className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route path="/colors" element={<ColorsPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/spacing" element={<SpacingPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/patterns" element={<PatternsPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/motion" element={<MotionPage />} />
            <Route path="/dark-mode" element={<DarkModePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}