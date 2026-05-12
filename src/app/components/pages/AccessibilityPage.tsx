import { Eye, Keyboard, MousePointer, Volume2, Palette, Check, X } from 'lucide-react';

export function AccessibilityPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Accessibility</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          ModCrash is committed to creating inclusive experiences for all users. Our design system
          follows WCAG 2.1 AA standards and includes built-in accessibility features.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Accessibility Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-3">WCAG 2.1 Level AA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our minimum standard for all products. We aim for AAA compliance where possible.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Perceivable content and UI
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Operable interface components
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Understandable information
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Robust content compatibility
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-3">Compliance Testing</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Regular testing ensures we maintain accessibility standards.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Automated accessibility audits
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Manual screen reader testing
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Keyboard navigation validation
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Color contrast verification
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Key Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Color Contrast</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All text meets minimum contrast ratios for readability.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Normal text: 4.5:1 minimum</li>
              <li>• Large text (18pt+): 3:1 minimum</li>
              <li>• UI components: 3:1 minimum</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Keyboard className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              All interactive elements are keyboard accessible.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Tab navigation support</li>
              <li>• Clear focus indicators</li>
              <li>• Logical focus order</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Screen Readers</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Semantic HTML and ARIA labels for assistive technology.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Proper ARIA attributes</li>
              <li>• Alt text for images</li>
              <li>• Descriptive labels</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MousePointer className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Touch Targets</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Interactive elements meet minimum size requirements.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Minimum 44×44px touch targets</li>
              <li>• Adequate spacing between elements</li>
              <li>• Clear hover and active states</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Volume2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Media Accessibility</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Video and audio content is accessible to all users.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Captions for video content</li>
              <li>• Transcripts for audio</li>
              <li>• Audio descriptions when needed</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Color Blindness</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Information is not conveyed by color alone.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Icons supplement color coding</li>
              <li>• Patterns and labels for clarity</li>
              <li>• Tested with simulators</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Focus States</h2>
        <div className="p-6 rounded-lg border border-border bg-card">
          <p className="text-sm text-muted-foreground mb-6">
            All interactive elements have clear, visible focus indicators for keyboard navigation.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg ring-2 ring-primary ring-offset-2 ring-offset-background">
                Focused Button
              </button>
              <span className="text-sm text-muted-foreground">2px ring with offset for visibility</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Focused input"
                className="px-4 py-2 bg-input-background border border-primary ring-2 ring-primary outline-none rounded-lg"
              />
              <span className="text-sm text-muted-foreground">Border and ring combination</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary underline ring-2 ring-primary ring-offset-2 ring-offset-background rounded px-1">
                Focused Link
              </a>
              <span className="text-sm text-muted-foreground">Ring with offset for text links</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">ARIA Patterns</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button Example</h3>
            <div className="p-4 rounded-lg bg-muted/50 font-mono text-xs mb-3">
              <div>{`<button`}</div>
              <div className="ml-4">{`aria-label="Close dialog"`}</div>
              <div className="ml-4">{`aria-pressed="false"`}</div>
              <div>{`>`}</div>
              <div className="ml-4">{`Close`}</div>
              <div>{`</button>`}</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Use aria-label for buttons with only icons. Include aria-pressed for toggle buttons.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Form Input Example</h3>
            <div className="p-4 rounded-lg bg-muted/50 font-mono text-xs mb-3">
              <div>{`<label for="email">Email</label>`}</div>
              <div>{`<input`}</div>
              <div className="ml-4">{`id="email"`}</div>
              <div className="ml-4">{`type="email"`}</div>
              <div className="ml-4">{`aria-required="true"`}</div>
              <div className="ml-4">{`aria-describedby="email-error"`}</div>
              <div>{`/>`}</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Associate labels with inputs. Use aria-describedby for error messages and hints.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Dialog Example</h3>
            <div className="p-4 rounded-lg bg-muted/50 font-mono text-xs mb-3">
              <div>{`<div`}</div>
              <div className="ml-4">{`role="dialog"`}</div>
              <div className="ml-4">{`aria-labelledby="dialog-title"`}</div>
              <div className="ml-4">{`aria-modal="true"`}</div>
              <div>{`>`}</div>
              <div className="ml-4">{`<h2 id="dialog-title">Title</h2>`}</div>
              <div>{`</div>`}</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Dialogs should trap focus and include proper role and aria attributes.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Image Example</h3>
            <div className="p-4 rounded-lg bg-muted/50 font-mono text-xs mb-3">
              <div>{`<img`}</div>
              <div className="ml-4">{`src="creator.jpg"`}</div>
              <div className="ml-4">{`alt="Creator streaming setup with dual monitors"`}</div>
              <div>{`/>`}</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Provide descriptive alt text that conveys the meaning and context of the image.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Accessibility Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Test with keyboard navigation (Tab, Enter, Escape)</li>
              <li>• Verify color contrast meets WCAG AA standards</li>
              <li>• Include proper ARIA labels and roles</li>
              <li>• Provide alternative text for images and icons</li>
              <li>• Test with screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>• Ensure focus indicators are clearly visible</li>
              <li>• Support browser zoom up to 200%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't remove focus outlines without providing alternatives</li>
              <li>• Don't rely on color alone to convey information</li>
              <li>• Don't create keyboard traps in modal dialogs</li>
              <li>• Don't use low-contrast text or UI elements</li>
              <li>• Don't forget to test with real assistive technologies</li>
              <li>• Don't make touch targets smaller than 44×44px</li>
              <li>• Don't use automatic carousels without pause controls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
