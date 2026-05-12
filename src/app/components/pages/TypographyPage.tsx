export function TypographyPage() {
  const typeScale = [
    { name: 'Display Large', size: '4.5rem', weight: '700', lineHeight: '1.1', usage: 'Hero sections, major headings' },
    { name: 'Display Medium', size: '3.75rem', weight: '700', lineHeight: '1.1', usage: 'Page titles, section heroes' },
    { name: 'Heading 1', size: '3rem', weight: '700', lineHeight: '1.2', usage: 'Page headings' },
    { name: 'Heading 2', size: '2.25rem', weight: '600', lineHeight: '1.3', usage: 'Section headings' },
    { name: 'Heading 3', size: '1.875rem', weight: '600', lineHeight: '1.3', usage: 'Subsection headings' },
    { name: 'Heading 4', size: '1.5rem', weight: '600', lineHeight: '1.4', usage: 'Card titles' },
    { name: 'Heading 5', size: '1.25rem', weight: '600', lineHeight: '1.4', usage: 'Small headings' },
    { name: 'Heading 6', size: '1.125rem', weight: '600', lineHeight: '1.4', usage: 'Minimal headings' },
    { name: 'Body Large', size: '1.125rem', weight: '400', lineHeight: '1.6', usage: 'Lead paragraphs, introductions' },
    { name: 'Body Regular', size: '1rem', weight: '400', lineHeight: '1.6', usage: 'Body text, descriptions' },
    { name: 'Body Small', size: '0.875rem', weight: '400', lineHeight: '1.5', usage: 'Secondary text, captions' },
    { name: 'Caption', size: '0.75rem', weight: '400', lineHeight: '1.4', usage: 'Timestamps, metadata' },
    { name: 'Overline', size: '0.75rem', weight: '600', lineHeight: '1.4', usage: 'Labels, categories (uppercase)' },
  ];

  const fontWeights = [
    { name: 'Regular', weight: '400', usage: 'Body text, descriptions' },
    { name: 'Medium', weight: '500', usage: 'Buttons, emphasized text' },
    { name: 'Semibold', weight: '600', usage: 'Headings, labels' },
    { name: 'Bold', weight: '700', usage: 'Display text, major headings' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Typography</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our typography system uses modern, clean fonts that balance readability with the energetic
          ModCrash brand. The system is built on a harmonious scale with clear hierarchy.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Font Families</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">System Font Stack</h3>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif
              </p>
            </div>
            <div className="text-4xl font-bold mb-2">ModCrash</div>
            <p className="text-muted-foreground">
              Uses native system fonts for optimal performance and familiarity. Provides excellent
              readability across all platforms.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Monospace Stack</h3>
              <p className="text-sm text-muted-foreground font-mono mb-4">
                "SF Mono", "Monaco", "Consolas", "Liberation Mono", monospace
              </p>
            </div>
            <div className="text-4xl font-mono mb-2">{ `{Code}` }</div>
            <p className="text-muted-foreground">
              Used for code snippets, technical content, and data display. Ensures proper alignment
              and readability of code.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Type Scale</h2>
        <div className="space-y-1 border border-border rounded-lg overflow-hidden">
          {typeScale.map((type, index) => (
            <div
              key={type.name}
              className={`p-6 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                <div>
                  <h4 className="font-semibold mb-1">{type.name}</h4>
                  <p className="text-sm text-muted-foreground">{type.usage}</p>
                </div>
                <div className="text-sm font-mono text-muted-foreground">
                  <div>Size: {type.size}</div>
                  <div>Weight: {type.weight}</div>
                  <div>Line Height: {type.lineHeight}</div>
                </div>
                <div
                  style={{
                    fontSize: type.size,
                    fontWeight: type.weight,
                    lineHeight: type.lineHeight,
                  }}
                >
                  Aa
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Font Weights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="p-6 rounded-lg border border-border bg-card">
              <div className="text-4xl mb-2" style={{ fontWeight: weight.weight }}>
                The quick brown fox
              </div>
              <h4 className="font-semibold mb-1">{weight.name} ({weight.weight})</h4>
              <p className="text-sm text-muted-foreground">{weight.usage}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Examples in Context</h2>
        <div className="space-y-8">
          <div className="p-8 rounded-lg border border-border bg-card">
            <h2 className="text-3xl font-semibold mb-4">Article Heading Example</h2>
            <p className="text-lg text-muted-foreground mb-6">
              This is a lead paragraph that introduces the content. It uses Body Large sizing to
              draw attention and improve readability for important introductory text.
            </p>
            <h3 className="text-2xl font-semibold mb-3">Subsection Heading</h3>
            <p className="text-base mb-4">
              Regular body text provides the main content. It's sized for comfortable reading with
              appropriate line height and spacing. This is the workhorse of our typography system.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text is used for secondary information, captions, and metadata. It maintains
              readability while providing visual hierarchy.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Typography Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use the type scale consistently across all products</li>
              <li>• Maintain proper hierarchy with heading levels</li>
              <li>• Use appropriate line heights for readability</li>
              <li>• Limit line length to 60-80 characters for body text</li>
              <li>• Use semibold or bold for emphasis, not color alone</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't use custom font sizes outside the scale</li>
              <li>• Don't use all caps for body text (only for overlines)</li>
              <li>• Don't set body text smaller than 14px</li>
              <li>• Don't use multiple font families in one interface</li>
              <li>• Don't ignore line height and letter spacing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
