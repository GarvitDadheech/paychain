// Helper functions for staggered animations
export const stagger = (index: number, baseDelay: number = 0.1): number => {
  return baseDelay * index;
};

// Animation durations
export const durations = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
};

// Animation delays
export const delays = {
  short: 0.1,
  medium: 0.2, 
  long: 0.3,
};

// Transition easing types
export const easings = {
  easeOut: [0.16, 1, 0.3, 1], // custom ease out
  easeInOut: [0.87, 0, 0.13, 1], // custom ease in-out
}; 