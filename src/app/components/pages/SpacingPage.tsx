export function SpacingPage() {
  const spacingScale = [
    { name: 'Space 1', value: '2px', token: 'var(--space-1)', usage: 'Minimal spacing, tight layouts' },
    { name: 'Space 2', value: '4px', token: 'var(--space-2)', usage: 'Icon padding, tight gaps' },
    { name: 'Space 3', value: '8px', token: 'var(--space-3)', usage: 'Small gaps, compact spacing' },
    { name: 'Space 4', value: '12px', token: 'var(--space-4)', usage: 'Default button padding' },
    { name: 'Space 5', value: '16px', token: 'var(--space-5)', usage: 'Card padding, element spacing' },
    { name: 'Space 6', value: '24px', token: 'var(--space-6)', usage: 'Section spacing, card gaps' },
    { name: 'Space 7', value: '32px', token: 'var(--space-7)', usage: 'Component spacing' },
    { name: 'Space 8', value: '48px', token: 'var(--space-8)', usage: 'Section margins' },
    { name: 'Space 9', value: '64px', token: 'var(--space-9)', usage: 'Large section spacing' },
    { name: 'Space 10', value: '96px', token: 'var(--space-10)', usage: 'Hero spacing, major sections' },
  ];

  const radiusScale = [
    { name: 'XS', value: '4px', token: 'var(--radius-xs)', usage: 'Small elements, badges' },
    { name: 'SM', value: '6px', token: 'var(--radius-sm)', usage: 'Buttons, inputs' },
    { name: 'MD', value: '8px', token: 'var(--radius-md)', usage: 'Cards, containers' },
    { name: 'LG', value: '12px', token: 'var(--radius-lg)', usage: 'Large cards, modals' },
    { name: 'XL', value: '16px', token: 'var(--radius-xl)', usage: 'Hero sections' },
    { name: '2XL', value: '24px', token: 'var(--radius-2xl)', usage: 'Specialty elements' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Spacing System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          ModCrash uses an 8-point spacing system for consistent, harmonious layouts. This creates
          visual rhythm and makes designs feel cohesive across all products.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Spacing Scale</h2>
        <p className="text-muted-foreground mb-6">
          Built on multiples of 8px for clean, predictable layouts. Use these tokens for margins,
          padding, and gaps throughout your designs.
        </p>
        <div className="space-y-4">
          {spacingScale.map((space) => (
            <div key={space.name} className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-32">
                  <div className="font-semibold mb-1">{space.name}</div>
                  <div className="text-sm text-muted-foreground">{space.value}</div>
                  <div className="text-xs font-mono text-muted-foreground">{space.token}</div>
                </div>
                <div className="flex-grow">
                  <div className="bg-primary rounded" style={{ height: '24px', width: space.value }}></div>
                </div>
                <div className="flex-shrink-0 w-64 text-sm text-muted-foreground">
                  {space.usage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Border Radius Scale</h2>
        <p className="text-muted-foreground mb-6">
          Consistent corner rounding creates visual harmony and brand recognition across all UI elements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {radiusScale.map((radius) => (
            <div key={radius.name} className="p-6 rounded-lg border border-border bg-card">
              <div
                className="w-full h-32 bg-primary mb-4"
                style={{ borderRadius: radius.value }}
              ></div>
              <h4 className="font-semibold mb-1">{radius.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{radius.value}</p>
              <p className="text-xs font-mono text-muted-foreground mb-2">{radius.token}</p>
              <p className="text-sm text-muted-foreground">{radius.usage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Layout Grid</h2>
        <p className="text-muted-foreground mb-6">
          ModCrash uses a 12-column grid system with responsive breakpoints for flexible, consistent layouts.
        </p>
        <div className="rounded-lg border border-border bg-card p-6 mb-6">
          <h3 className="font-semibold mb-4">Breakpoints</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="font-mono font-semibold mb-1">Mobile</div>
              <div className="text-sm text-muted-foreground">0px - 767px</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="font-mono font-semibold mb-1">Tablet</div>
              <div className="text-sm text-muted-foreground">768px - 1023px</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="font-mono font-semibold mb-1">Desktop</div>
              <div className="text-sm text-muted-foreground">1024px - 1439px</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="font-mono font-semibold mb-1">Large Desktop</div>
              <div className="text-sm text-muted-foreground">1440px+</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-6 rounded-lg border border-border bg-card">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square bg-primary/20 border border-primary rounded flex items-center justify-center text-xs font-semibold text-primary">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Spacing Examples</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Card Component Spacing</h3>
            <div className="p-6 rounded-lg border-2 border-dashed border-primary/30 bg-muted/30">
              <div className="font-mono text-xs text-primary mb-2">padding: var(--space-6) /* 24px */</div>
              <h4 className="font-semibold mb-3">Card Title</h4>
              <p className="text-sm text-muted-foreground">
                Internal card spacing uses Space 6 (24px) for comfortable padding that creates breathing room
                without wasting space.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button Spacing</h3>
            <div className="inline-flex items-center gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                <span className="text-sm">Padding: 16px × 8px</span>
              </button>
              <span className="text-sm text-muted-foreground font-mono">
                Space 5 × Space 3
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Spacing Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use spacing tokens from the scale consistently</li>
              <li>• Follow the 8pt grid system for alignment</li>
              <li>• Use larger spacing for major sections</li>
              <li>• Apply consistent padding across similar components</li>
              <li>• Use spacing to create visual hierarchy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't use arbitrary spacing values (e.g., 13px, 27px)</li>
              <li>• Don't mix different spacing systems</li>
              <li>• Don't make spacing too tight - give elements room to breathe</li>
              <li>• Don't forget responsive spacing adjustments</li>
              <li>• Don't ignore the relationship between spacing and typography</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
