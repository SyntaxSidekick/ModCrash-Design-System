import { Moon, Sun, Monitor } from 'lucide-react';
import { useState } from 'react';

export function DarkModePage() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Dark Mode</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Dark mode is the primary experience for ModCrash. Our design system is optimized for
          dark interfaces with carefully balanced colors and contrast ratios.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Theme Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Moon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Dark by Default</h3>
            <p className="text-sm text-muted-foreground">
              ModCrash prioritizes dark mode for reduced eye strain during long gaming and streaming sessions
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Sun className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Light Mode Support</h3>
            <p className="text-sm text-muted-foreground">
              Full light mode support for daytime use and user preference
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">System Aware</h3>
            <p className="text-sm text-muted-foreground">
              Automatically adapts to user's system preferences
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Interactive Theme Comparison</h2>
        <div className="p-6 rounded-lg border border-border bg-card mb-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold">Preview Mode:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsDark(true)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  isDark ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-muted'
                }`}
              >
                <Moon className="w-4 h-4" />
                Dark
              </button>
              <button
                onClick={() => setIsDark(false)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  !isDark ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-muted'
                }`}
              >
                <Sun className="w-4 h-4" />
                Light
              </button>
            </div>
          </div>

          <div className={isDark ? 'dark' : ''}>
            <div className="p-8 rounded-lg bg-background border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Sample UI Components</h3>
              <p className="text-muted-foreground mb-6">
                Toggle between dark and light mode to see how components adapt to each theme.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-3 text-card-foreground">Buttons</h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                      Primary
                    </button>
                    <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">
                      Secondary
                    </button>
                    <button className="px-4 py-2 border border-border rounded-lg text-foreground">
                      Outline
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-3 text-card-foreground">Form Elements</h4>
                  <input
                    type="text"
                    placeholder="Email address..."
                    className="w-full px-3 py-2 bg-input-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-3 text-card-foreground">Status Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-success text-success-foreground text-xs font-semibold rounded-full">
                      Success
                    </span>
                    <span className="px-3 py-1 bg-warning text-warning-foreground text-xs font-semibold rounded-full">
                      Warning
                    </span>
                    <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
                      Error
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-3 text-card-foreground">Typography</h4>
                  <p className="text-foreground mb-1">Primary text color</p>
                  <p className="text-muted-foreground text-sm">Secondary text color</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted border border-border">
                <p className="text-sm text-muted-foreground">
                  This muted section uses background-muted and text-muted-foreground for subtle contrast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Dark Mode Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#0D0D0D]"></div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">Background</h4>
              <p className="text-sm font-mono text-muted-foreground">#0D0D0D</p>
              <p className="text-xs text-muted-foreground mt-2">Smoky Black - Main background</p>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#1A1A1A]"></div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">Card Surface</h4>
              <p className="text-sm font-mono text-muted-foreground">#1A1A1A</p>
              <p className="text-xs text-muted-foreground mt-2">Early Jet Black - Cards and containers</p>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#333333]"></div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">Borders & Muted</h4>
              <p className="text-sm font-mono text-muted-foreground">#333333</p>
              <p className="text-xs text-muted-foreground mt-2">Gray Wolf - Borders and subtle elements</p>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#FF6600] flex items-center justify-center">
              <span className="text-white font-semibold">Primary</span>
            </div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">ModCrash Orange</h4>
              <p className="text-sm font-mono text-muted-foreground">#FF6600</p>
              <p className="text-xs text-muted-foreground mt-2">Primary brand color - unchanged in dark mode</p>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#FFFFFF] border-b border-border"></div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">Foreground Text</h4>
              <p className="text-sm font-mono text-muted-foreground">#FFFFFF</p>
              <p className="text-xs text-muted-foreground mt-2">Primary text color in dark mode</p>
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="h-32 bg-[#999999]"></div>
            <div className="p-4 bg-card">
              <h4 className="font-semibold mb-1">Muted Text</h4>
              <p className="text-sm font-mono text-muted-foreground">#999999</p>
              <p className="text-xs text-muted-foreground mt-2">Secondary text and placeholders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Dark Mode Examples</h2>

        <div className="space-y-6">
          <div className="dark">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-4 text-foreground">Gaming Dashboard (Dark Mode)</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Active Players', value: '12.5K', change: '+12%' },
                  { label: 'Streams', value: '3.2K', change: '+8%' },
                  { label: 'Viewers', value: '87K', change: '+15%' },
                  { label: 'Clips', value: '1.4K', change: '+23%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                    <div className="flex items-end gap-2">
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-success mb-1">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-4 text-card-foreground">Weekly Activity</h4>
                  <div className="h-40 flex items-end justify-between gap-1">
                    {[65, 45, 80, 55, 70, 60, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/80 rounded-t hover:bg-primary transition-colors"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-4 text-card-foreground">Top Games</h4>
                  <div className="space-y-3">
                    {['Valorant', 'League of Legends', 'CS2', 'Fortnite'].map((game, i) => (
                      <div key={game} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-muted"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{game}</div>
                          <div className="text-xs text-muted-foreground">{(4 - i) * 250}K viewers</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dark">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-4 text-foreground">Content Feed (Dark Mode)</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          Ultimate Gaming Setup Guide {i}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Complete guide to building the perfect creator workspace with RGB and dual monitors
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>❤️ 1.2K</span>
                          <span>💬 45</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="dark">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="font-semibold mb-4 text-foreground">Navigation Example (Dark Mode)</h3>
              <div className="rounded-lg bg-card border border-border overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-6 bg-primary rounded"></div>
                    <nav className="hidden md:flex gap-4 text-sm">
                      <a href="#" className="text-primary font-medium">Home</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discover</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Create</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <div className="w-5 h-5 rounded bg-muted-foreground/20"></div>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">Page content goes here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Contrast & Readability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Text Contrast Ratios</h3>
            <div className="space-y-3">
              <div className="dark bg-background p-3 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Primary Text on Background</span>
                  <span className="text-xs text-success font-semibold">15.8:1 ✓</span>
                </div>
                <div className="text-xs text-muted-foreground">White (#FFFFFF) on Smoky Black (#0D0D0D)</div>
              </div>

              <div className="dark bg-background p-3 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">Secondary Text on Background</span>
                  <span className="text-xs text-success font-semibold">7.1:1 ✓</span>
                </div>
                <div className="text-xs text-muted-foreground">Gray Medium (#999999) on Smoky Black (#0D0D0D)</div>
              </div>

              <div className="dark bg-card p-3 rounded border border-border">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Text on Card Surface</span>
                  <span className="text-xs text-success font-semibold">13.2:1 ✓</span>
                </div>
                <div className="text-xs text-muted-foreground">White (#FFFFFF) on Early Jet (#1A1A1A)</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Component Contrast</h3>
            <div className="space-y-3">
              <div className="dark bg-background p-3 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Primary Button</span>
                  <span className="text-xs text-success font-semibold">4.6:1 ✓</span>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm mt-2">
                  ModCrash Orange Button
                </button>
              </div>

              <div className="dark bg-background p-3 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Border Contrast</span>
                  <span className="text-xs text-success font-semibold">3.3:1 ✓</span>
                </div>
                <div className="p-3 border-2 border-border rounded-lg text-sm mt-2 text-foreground">
                  Border element
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Dark Mode Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use true black (#0D0D0D) for OLED optimization</li>
              <li>• Maintain proper contrast ratios for all text</li>
              <li>• Test dark mode with reduced brightness</li>
              <li>• Use elevation with subtle borders instead of shadows</li>
              <li>• Keep ModCrash Orange consistent across themes</li>
              <li>• Reduce color saturation slightly in dark mode</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't use pure black backgrounds everywhere - vary elevation</li>
              <li>• Don't invert colors directly from light mode</li>
              <li>• Don't use bright whites that cause eye strain</li>
              <li>• Don't forget to test with actual dark environments</li>
              <li>• Don't ignore user's system theme preference</li>
              <li>• Don't use low-contrast text for important information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
