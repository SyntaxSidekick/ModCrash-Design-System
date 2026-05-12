import { Check, Search, ChevronDown, Play, Heart, Share2, Bell, Settings } from 'lucide-react';
import { useState } from 'react';

export function ComponentsPage() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [toggleEnabled, setToggleEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [selectedTab, setSelectedTab] = useState('components');

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Components</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A comprehensive library of reusable UI components built for the ModCrash ecosystem.
          Each component follows our design principles and is accessible by default.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Buttons</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Primary
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Secondary
              </button>
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity">
                Accent
              </button>
              <button className="px-4 py-2 border-2 border-border rounded-lg hover:bg-muted transition-colors">
                Outline
              </button>
              <button className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors">
                Ghost
              </button>
              <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity">
                Destructive
              </button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg">
                Small
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                Medium
              </button>
              <button className="px-6 py-3 text-lg bg-primary text-primary-foreground rounded-lg">
                Large
              </button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Icon Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                <Play className="w-5 h-5" />
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 border border-border rounded-lg hover:bg-muted">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button States</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                Default
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg opacity-90">
                Hover
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg ring-2 ring-primary ring-offset-2">
                Focus
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg cursor-not-allowed" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Form Inputs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Text Input</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Search Input</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Textarea</h3>
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Select Menu</h3>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Controls</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Checkboxes</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    checkboxChecked ? 'bg-primary border-primary' : 'border-border'
                  }`}
                >
                  {checkboxChecked && <Check className="w-3 h-3 text-primary-foreground" />}
                </div>
                <span className="text-sm">I agree to the terms and conditions</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border-2 border-border flex items-center justify-center"></div>
                <span className="text-sm">Subscribe to newsletter</span>
              </label>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Toggle Switch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable notifications</span>
                <button
                  onClick={() => setToggleEnabled(!toggleEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors ${
                    toggleEnabled ? 'bg-primary' : 'bg-switch-background'
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      toggleEnabled ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  ></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark mode</span>
                <button className="w-11 h-6 rounded-full bg-switch-background">
                  <div className="w-5 h-5 bg-white rounded-full translate-x-0.5"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card lg:col-span-2">
            <h3 className="font-semibold mb-4">Slider</h3>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
              />
              <div className="text-sm text-muted-foreground">Value: {sliderValue}%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Navigation</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Tabs</h3>
            <div className="border-b border-border">
              <div className="flex gap-1">
                {['components', 'documentation', 'examples'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 text-sm capitalize border-b-2 transition-colors ${
                      selectedTab === tab
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground">
                {selectedTab === 'components' && 'Components tab content'}
                {selectedTab === 'documentation' && 'Documentation tab content'}
                {selectedTab === 'examples' && 'Examples tab content'}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Pagination</h3>
            <div className="flex items-center justify-center gap-2">
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                2
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                10
              </button>
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-primary to-accent"></div>
            <div className="p-4">
              <h4 className="font-semibold mb-2">Content Card</h4>
              <p className="text-sm text-muted-foreground mb-3">
                A versatile card component for displaying content with images and text.
              </p>
              <button className="text-sm text-primary hover:underline">Read more →</button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <div className="w-6 h-6 rounded bg-primary"></div>
            </div>
            <h4 className="font-semibold mb-2">Feature Card</h4>
            <p className="text-sm text-muted-foreground">
              Highlight key features or benefits with icon-based cards.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-primary bg-card shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  Featured
                </div>
                <h4 className="font-semibold">Premium Card</h4>
              </div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
            <p className="text-sm text-muted-foreground">
              Cards can have special states like featured or premium variants.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Badges & Labels</h2>
        <div className="p-6 rounded-lg border border-border bg-card">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Primary
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
              Secondary
            </span>
            <span className="px-3 py-1 bg-success text-success-foreground text-xs font-semibold rounded-full">
              Success
            </span>
            <span className="px-3 py-1 bg-warning text-warning-foreground text-xs font-semibold rounded-full">
              Warning
            </span>
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
              Error
            </span>
            <span className="px-3 py-1 bg-info text-info-foreground text-xs font-semibold rounded-full">
              Info
            </span>
            <span className="px-3 py-1 border border-border text-foreground text-xs font-semibold rounded-full">
              Outline
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Component Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use components consistently across all products</li>
              <li>• Follow accessibility best practices (ARIA labels, focus states)</li>
              <li>• Maintain proper visual hierarchy and spacing</li>
              <li>• Test components in both light and dark modes</li>
              <li>• Provide clear labels and helpful error messages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't create custom components without checking the library first</li>
              <li>• Don't remove focus indicators or keyboard navigation</li>
              <li>• Don't use color as the only way to convey information</li>
              <li>• Don't ignore loading and error states</li>
              <li>• Don't make interactive elements too small to tap/click</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
