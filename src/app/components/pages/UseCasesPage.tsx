import { Play, TrendingUp, Users, MessageSquare, Image as ImageIcon, Code2 } from 'lucide-react';

export function UseCasesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Use Cases</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Real-world examples of how the ModCrash design system comes together to create
          compelling user experiences across different product types.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Homepage Example</h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="bg-gradient-to-br from-background via-muted/30 to-background p-12 text-center border-b border-border">
            <h2 className="text-4xl font-bold mb-4">Creator-Tech Ecosystem</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build, stream, and create with AI-powered tools designed for modern content creators
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-border rounded-lg hover:bg-muted transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Streaming Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Professional streaming software with AI-powered features
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Developer Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Code, build, and deploy with integrated AI assistance
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <ImageIcon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Content Creation</h3>
                <p className="text-sm text-muted-foreground">
                  Design, edit, and optimize content for any platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Creator Profile Page</h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="px-8 pb-6">
            <div className="flex items-end gap-6 -mt-12 mb-6">
              <div className="w-24 h-24 rounded-full bg-card border-4 border-card shadow-lg"></div>
              <div className="flex-1 pb-2">
                <h2 className="text-2xl font-bold mb-1">Creator Name</h2>
                <p className="text-muted-foreground">@username</p>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg mb-2">
                Follow
              </button>
            </div>

            <p className="text-muted-foreground mb-6 max-w-2xl">
              Gaming enthusiast, tech reviewer, and content creator. Building awesome setups and
              sharing the journey with 100K+ followers.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
              <div>
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12.5K</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">847</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Setup Battle Page</h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold mb-2">This Week's Setup Battle</h2>
            <p className="text-muted-foreground">Vote for your favorite gaming setup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <div className="font-semibold">Creator A</div>
                  <div className="text-sm text-muted-foreground">Minimal RGB Setup</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                </div>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <button className="w-full py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Vote
              </button>
            </div>

            <div className="p-6 hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4"></div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div>
                  <div className="font-semibold">Creator B</div>
                  <div className="text-sm text-muted-foreground">Ultra-wide Paradise</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: '55%' }}></div>
                </div>
                <span className="text-sm font-semibold">55%</span>
              </div>
              <button className="w-full py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">AI Tools Dashboard</h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">AI Tools</h2>
              <p className="text-muted-foreground">Powered by advanced AI models</p>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              New Tool
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'AI Image Generator', desc: 'Create stunning visuals', icon: ImageIcon, color: 'primary' },
                { name: 'Code Assistant', desc: 'Smart code completion', icon: Code2, color: 'accent' },
                { name: 'Content Analyzer', desc: 'Performance insights', icon: TrendingUp, color: 'secondary' },
                { name: 'Chat Moderator', desc: 'Auto-moderate chat', icon: MessageSquare, color: 'primary' },
                { name: 'Audience Insights', desc: 'Understand your viewers', icon: Users, color: 'accent' },
                { name: 'Stream Enhancer', desc: 'Optimize stream quality', icon: Play, color: 'secondary' },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-${tool.color}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <tool.icon className={`w-5 h-5 text-${tool.color}`} />
                  </div>
                  <h4 className="font-semibold mb-1">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Gaming Setup Gallery</h2>
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Featured Setups</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg">
                  All
                </button>
                <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">
                  Gaming
                </button>
                <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">
                  Streaming
                </button>
                <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">
                  Work
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-muted"></div>
                      <span className="text-sm font-semibold">@creator{i}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Minimal gaming setup with RGB accents
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>❤️ 1.2K</span>
                      <span>💬 45</span>
                      <span>🔖 Save</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Use Case Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Best Practices</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Maintain consistent component usage across pages</li>
              <li>• Follow established patterns for similar content types</li>
              <li>• Use appropriate spacing and grid layouts</li>
              <li>• Ensure responsive behavior on all screen sizes</li>
              <li>• Apply proper typography hierarchy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-primary">📝 Notes</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• These are reference implementations, not rigid templates</li>
              <li>• Adapt patterns to your specific content needs</li>
              <li>• Test with real content before finalizing designs</li>
              <li>• Consider loading states and empty states</li>
              <li>• Optimize for performance and accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
