module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'window-background': 'var(--v-window-background)',
        'side-bar-section-header-border':
          'var(--v-side-bar-section-header-border)'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      outline: ['active']
    }
  },
  plugins: []
};
