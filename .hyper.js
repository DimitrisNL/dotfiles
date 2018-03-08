module.exports = {
  config: {
    updateChannel: 'stable',
    fontSize: 12,
    fontFamily:
      'Hack, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    cursorColor: '#8fbcbb',
    cursorShape: 'BEAM',
    cursorBlink: true,
    foregroundColor: '#fff',
    backgroundColor: '#000',
    borderColor: '#333',
    css: `
      .terms_terms {
        border-bottom: 3px solid #8fbcbb;
      }
      `,
    termCSS: ``,
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '10px 16px',
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff',
    },
    shell: 'zsh',
    shellArgs: ['--login'],
    env: {},
    bell: false,
    copyOnSelect: false,
  },
  plugins: [
    'nord-hyper',
    'gitrocket',
    'hyper-hide-title',
    'hyper-font-smoothing',
    'hypercwd',
    'hyper-always-on-top',
    'hyper-dark-scrollbar',
  ],
  localPlugins: [],
  keymaps: {},
};
