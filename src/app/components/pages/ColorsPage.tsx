import colorPalette from '../../../assets/ModCrash_Color_Palette.png';

export function ColorsPage() {
  const coreColors = [
    { name: 'ModCrash Orange Primary', hex: '#FF6600', usage: 'Primary brand color, CTAs, interactive elements' },
    { name: 'ModCrash Orange Secondary', hex: '#FF9900', usage: 'Accent color, hover states, highlights' },
    { name: 'Early Jet Black', hex: '#1A1A1A', usage: 'Primary dark backgrounds, cards in dark mode' },
    { name: 'Gray Wolf', hex: '#333333', usage: 'Secondary backgrounds, borders in dark mode' },
    { name: 'Smoky Black', hex: '#0D0D0D', usage: 'Background in dark mode, deepest black' },
  ];

  const neutrals = [
    { name: 'White', hex: '#FFFFFF', usage: 'Light mode background, text on dark' },
    { name: 'Background Light', hex: '#F0F0F0', usage: 'Light mode muted backgrounds' },
    { name: 'Gray Dark', hex: '#666666', usage: 'Secondary text, muted content' },
    { name: 'Gray Medium', hex: '#999999', usage: 'Disabled states, placeholders' },
    { name: 'Gray Light', hex: '#CCCCCC', usage: 'Borders, dividers in light mode' },
  ];

  const functionalColors = [
    { name: 'Success', hex: '#16A34A', light: '#22C55E', usage: 'Success messages, positive states' },
    { name: 'Warning', hex: '#FF9900', light: '#FF9900', usage: 'Warning messages, caution states' },
    { name: 'Error', hex: '#DC2626', light: '#EF4444', usage: 'Error messages, destructive actions' },
    { name: 'Info', hex: '#3B82F6', light: '#60A5FA', usage: 'Information messages, neutral states' },
  ];

  return (
    <article className="max-w-[1400px] mx-auto px-8 py-12">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Color System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          The ModCrash color palette reflects our creator-tech ecosystem with bold, energetic oranges
          combined with professional neutrals. Designed for both light and dark modes with WCAG AA compliance.
        </p>
      </header>

      <section className="mb-16" aria-labelledby="palette-heading">
        <h2 id="palette-heading" className="text-3xl font-semibold mb-6">Official Color Palette</h2>
        <div className="rounded-xl overflow-hidden border border-border">
          <img src={colorPalette} alt="ModCrash Color Palette showing gradient ranges from orange to black with hex values" className="w-full" />
        </div>
      </section>

      <section className="mb-16" aria-labelledby="core-colors-heading">
        <h2 id="core-colors-heading" className="text-3xl font-semibold mb-6">Core Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreColors.map((color) => (
            <div key={color.hex} className="rounded-lg border border-border overflow-hidden">
              <div
                className="h-40 w-full"
                style={{ backgroundColor: color.hex }}
                aria-label={`Color swatch for ${color.name}`}
              ></div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold mb-1">{color.name}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-2">{color.hex}</p>
                <p className="text-sm text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="neutral-colors-heading">
        <h2 id="neutral-colors-heading" className="text-3xl font-semibold mb-6">Neutral Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neutrals.map((color) => (
            <div key={color.hex} className="rounded-lg border border-border overflow-hidden">
              <div
                className="h-40 w-full border-b border-border"
                style={{ backgroundColor: color.hex }}
                aria-label={`Color swatch for ${color.name}`}
              ></div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold mb-1">{color.name}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-2">{color.hex}</p>
                <p className="text-sm text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="functional-colors-heading">
        <h2 id="functional-colors-heading" className="text-3xl font-semibold mb-6">Functional Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {functionalColors.map((color) => (
            <div key={color.name} className="rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-2">
                <div
                  className="h-32 flex items-center justify-center text-white font-semibold border-r border-border"
                  style={{ backgroundColor: color.hex }}
                >
                  Dark Mode
                </div>
                <div
                  className="h-32 flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: color.light }}
                >
                  Light Mode
                </div>
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold mb-1">{color.name}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-2">
                  {color.hex} / {color.light}
                </p>
                <p className="text-sm text-muted-foreground">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="accessibility-heading">
        <h2 id="accessibility-heading" className="text-3xl font-semibold mb-6">Accessibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-3">Contrast Requirements</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                WCAG AA: Minimum 4.5:1 for normal text
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                WCAG AA: Minimum 3:1 for large text (18pt+)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                All color combinations tested for compliance
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-3">Color Blindness</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Never rely on color alone for meaning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Use icons, labels, and patterns for clarity
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Tested with deuteranopia and protanopia simulators
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-lg bg-muted/50 border border-border" aria-labelledby="usage-guidelines-heading">
        <h3 id="usage-guidelines-heading" className="font-semibold mb-3">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use ModCrash Orange for primary actions and brand moments</li>
              <li>• Maintain consistent color usage across all products</li>
              <li>• Test color contrast ratios before implementation</li>
              <li>• Use dark mode as the primary experience</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't use colors outside the defined palette</li>
              <li>• Don't use orange for errors or destructive actions</li>
              <li>• Don't rely solely on color to convey information</li>
              <li>• Don't mix light and dark mode colors inconsistently</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
