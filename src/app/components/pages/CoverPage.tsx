import logo from '../../../assets/modcrash-logo.png';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function CoverPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-12 animate-fade-in">
          <img src={logo} alt="ModCrash logo - orange crash icon" className="h-24 mx-auto mb-8" />
        </div>

        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          ModCrash Design System
        </h1>

        <p className="text-xl text-muted-foreground mb-2">
          Creator-Tech Ecosystem UI System
        </p>

        <p className="text-sm text-muted-foreground mb-12">
          Version 1.0.0
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/colors"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Explore Design System
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/components"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border hover:bg-muted transition-colors"
          >
            View Components
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-6 h-6 rounded bg-primary"></div>
            </div>
            <h3 className="font-semibold mb-2">Gaming Culture</h3>
            <p className="text-sm text-muted-foreground">
              High-end tech brand aesthetic with gaming energy and professional polish
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <div className="w-6 h-6 rounded bg-accent"></div>
            </div>
            <h3 className="font-semibold mb-2">Creator Tools</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered tools for streaming, content creation, and developer workflows
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <div className="w-6 h-6 rounded bg-secondary"></div>
            </div>
            <h3 className="font-semibold mb-2">Enterprise Grade</h3>
            <p className="text-sm text-muted-foreground">
              Production-ready system with accessibility, tokens, and comprehensive documentation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
