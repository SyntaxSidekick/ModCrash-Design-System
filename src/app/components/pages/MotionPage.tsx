import { motion } from 'motion/react';
import { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';

export function MotionPage() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Motion System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          ModCrash's motion system brings interfaces to life with purposeful, delightful animations.
          Motion guides user attention, provides feedback, and creates a premium feel.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Motion Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-2">Purposeful</h3>
            <p className="text-sm text-muted-foreground">
              Every animation serves a purpose: guiding attention, providing feedback, or showing relationships
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-2">Responsive</h3>
            <p className="text-sm text-muted-foreground">
              Animations respond quickly to user input, providing immediate feedback to actions
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-2">Natural</h3>
            <p className="text-sm text-muted-foreground">
              Motion follows physics-inspired easing for organic, believable movement
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Duration & Easing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Duration Tokens</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Fast (150ms)</span>
                <span className="text-xs text-muted-foreground font-mono">--duration-fast</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">Standard (250ms)</span>
                <span className="text-xs text-muted-foreground font-mono">--duration-standard</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">Slow (400ms)</span>
                <span className="text-xs text-muted-foreground font-mono">--duration-slow</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">Page (600ms)</span>
                <span className="text-xs text-muted-foreground font-mono">--duration-page</span>
              </div>
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Easing Functions</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Ease Out</span>
                  <span className="text-xs text-muted-foreground font-mono">cubic-bezier(0, 0, 0.2, 1)</span>
                </div>
                <div className="flex gap-1">
                  <motion.div
                    className="w-12 h-12 bg-primary rounded"
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 1.5, ease: [0, 0, 0.2, 1], repeat: Infinity, repeatDelay: 0.5 }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">UI interactions, hover states</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Ease In-Out</span>
                  <span className="text-xs text-muted-foreground font-mono">cubic-bezier(0.4, 0, 0.2, 1)</span>
                </div>
                <div className="flex gap-1">
                  <motion.div
                    className="w-12 h-12 bg-accent rounded"
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 0.5 }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Page transitions, modal open/close</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Spring</span>
                  <span className="text-xs text-muted-foreground font-mono">cubic-bezier(0.68, -0.55, 0.265, 1.55)</span>
                </div>
                <div className="flex gap-1">
                  <motion.div
                    className="w-12 h-12 bg-secondary rounded"
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55], repeat: Infinity, repeatDelay: 0.5 }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Interactive elements, playful feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Micro-Interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Button Hover</h3>
            <motion.button
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              Hover Me
            </motion.button>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Card Lift</h3>
            <motion.div
              className="p-4 rounded-lg border border-border bg-background cursor-pointer"
              onHoverStart={() => setIsCardHovered(true)}
              onHoverEnd={() => setIsCardHovered(false)}
              animate={{
                y: isCardHovered ? -8 : 0,
                boxShadow: isCardHovered
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 0 0 0 rgba(0, 0, 0, 0)',
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded mb-2"></div>
              <p className="text-sm">Hover to lift</p>
            </motion.div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Icon Rotation</h3>
            <motion.button
              className="p-3 rounded-lg border border-border hover:bg-muted"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.25 }}
            >
              <Play className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Page Transitions</h2>
        <div className="p-6 rounded-lg border border-border bg-card">
          <h3 className="font-semibold mb-4">Fade & Slide</h3>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              {isModalOpen ? 'Close' : 'Open'} Modal
            </button>
          </div>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-lg border border-border bg-background"
            >
              <h4 className="font-semibold mb-2">Modal Content</h4>
              <p className="text-sm text-muted-foreground">
                This modal animates in with a fade and slide effect
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Loading States</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Spinner</h3>
            <div className="flex gap-4 items-center">
              <motion.div
                className="w-12 h-12 border-4 border-muted border-t-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <span className="text-sm text-muted-foreground">Loading...</span>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Progress Bar</h3>
            <button
              onClick={handleLoadingDemo}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg mb-4"
            >
              Start Loading
            </button>
            {isLoading && (
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'linear' }}
                />
              </div>
            )}
          </div>

          <div className="p-6 rounded-lg border border-border bg-card lg:col-span-2">
            <h3 className="font-semibold mb-4">Skeleton Loader</h3>
            <div className="space-y-3">
              <motion.div
                className="h-4 bg-muted rounded"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="h-4 bg-muted rounded w-3/4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="h-4 bg-muted rounded w-1/2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Attention-Grabbing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Pulse Effect</h3>
            <motion.div
              className="w-16 h-16 bg-primary rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4">Bounce</h3>
            <motion.div
              className="flex items-center gap-2 text-primary"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
            >
              <ChevronRight className="w-6 h-6" />
              <span className="font-semibold">New Feature</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-muted/50 border border-border">
        <h3 className="font-semibold mb-3">Motion Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2 text-primary">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Use motion to guide user attention and provide feedback</li>
              <li>• Keep animations short (under 400ms for most interactions)</li>
              <li>• Use consistent easing functions for similar interactions</li>
              <li>• Respect users' prefers-reduced-motion settings</li>
              <li>• Test animations on various devices and performance levels</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-destructive">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Don't animate everything - motion should be purposeful</li>
              <li>• Don't use overly long animations that slow down the UI</li>
              <li>• Don't create distracting or excessive motion</li>
              <li>• Don't ignore accessibility considerations</li>
              <li>• Don't use motion as the only way to convey information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
