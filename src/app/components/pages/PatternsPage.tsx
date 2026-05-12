import { User, TrendingUp, Video, Code, Cpu } from 'lucide-react';

export function PatternsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Patterns</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Common layout patterns and UI compositions for the ModCrash ecosystem. These patterns
          provide consistent user experiences across all products.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Navigation Patterns</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Top Navigation Bar</h3>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-muted p-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-6 bg-primary rounded"></div>
                  <div className="hidden md:flex gap-4">
                    <div className="w-16 h-4 bg-foreground/20 rounded"></div>
                    <div className="w-16 h-4 bg-foreground/20 rounded"></div>
                    <div className="w-16 h-4 bg-foreground/20 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-foreground/20"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Sidebar Navigation</h3>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="flex">
                <div className="w-64 bg-muted p-4 space-y-2">
                  <div className="w-full h-10 bg-primary rounded"></div>
                  <div className="w-full h-8 bg-foreground/10 rounded"></div>
                  <div className="w-full h-8 bg-foreground/10 rounded"></div>
                  <div className="w-full h-8 bg-foreground/10 rounded"></div>
                </div>
                <div className="flex-1 p-6 bg-background/50">
                  <div className="w-full h-32 bg-foreground/5 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Card Layouts</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Grid Layout - Creator Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-muted"></div>
                      <div>
                        <div className="w-24 h-3 bg-foreground/20 rounded mb-1"></div>
                        <div className="w-16 h-2 bg-foreground/10 rounded"></div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-foreground/10 rounded mb-1"></div>
                    <div className="w-3/4 h-2 bg-foreground/10 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">List Layout - Activity Feed</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10"></div>
                  <div className="flex-1">
                    <div className="w-48 h-3 bg-foreground/20 rounded mb-2"></div>
                    <div className="w-32 h-2 bg-foreground/10 rounded"></div>
                  </div>
                  <div className="w-16 h-2 bg-foreground/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Dashboard Layouts</h2>
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-4">Analytics Dashboard</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: User, label: 'Total Users', value: '12.5K', change: '+12%' },
                { icon: Video, label: 'Videos', value: '3.2K', change: '+8%' },
                { icon: TrendingUp, label: 'Engagement', value: '87%', change: '+5%' },
                { icon: Code, label: 'Projects', value: '156', change: '+23%' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border border-border bg-background">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-success">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 p-4 rounded-lg border border-border bg-background">
                <h4 className="font-semibold mb-4">Activity Overview</h4>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[65, 45, 80, 55, 70, 60, 85, 50, 75, 60, 90, 70].map((height, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-border bg-background">
                <h4 className="font-semibold mb-4">Top Categories</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Gaming', percent: 45 },
                    { name: 'AI Tools', percent: 30 },
                    { name: 'Setups', percent: 15 },
                    { name: 'Tutorials', percent: 10 },
                  ].map((cat) => (
                    <div key={cat.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{cat.name}</span>
                        <span className="text-muted-foreground">{cat.percent}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${cat.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Content Patterns</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Article Page Layout</h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider">Category</div>
              <div className="w-2/3 h-8 bg-foreground/20 rounded"></div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted"></div>
                <div className="w-32 h-3 bg-foreground/10 rounded"></div>
              </div>
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-foreground/10 rounded"></div>
                <div className="w-full h-2 bg-foreground/10 rounded"></div>
                <div className="w-full h-2 bg-foreground/10 rounded"></div>
                <div className="w-3/4 h-2 bg-foreground/10 rounded"></div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Setup Showcase Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-video bg-muted rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="w-2/3 h-6 bg-foreground/20 rounded mb-2"></div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-muted"></div>
                    <div className="w-24 h-3 bg-foreground/10 rounded"></div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-2 bg-foreground/10 rounded"></div>
                    <div className="w-full h-2 bg-foreground/10 rounded"></div>
                    <div className="w-2/3 h-2 bg-foreground/10 rounded"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Specs</div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-muted-foreground" />
                        <div className="w-32 h-2 bg-foreground/10 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Pattern Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Maintain consistent patterns across similar page types</li>
              <li>• Use established patterns before creating new ones</li>
              <li>• Consider mobile-first responsive design</li>
              <li>• Test patterns with real content and data</li>
              <li>• Follow grid system and spacing tokens</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't reinvent patterns that already exist in the system</li>
              <li>• Don't ignore responsive breakpoints and mobile layouts</li>
              <li>• Don't create patterns that work only with placeholder content</li>
              <li>• Don't mix different pattern styles on the same page</li>
              <li>• Don't forget to consider loading and empty states</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
