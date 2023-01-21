const OpenSans = `'Open Sans'`;

export const Constants = {
  fonts: {
    $openSans: OpenSans,
  },

  fontSize: {
    minSize: '12px',
    maxHeroSize: '16px',
  },

  lineHeight: {
    height: '1.2',
  },

  colors: {
    $styleColor: '#28A745',
    $white: '#FFFFFF',
    $textColor: '#333333',
    $placeholderColor: '#808080',
  },

  spacing: value => `${4 * value}px`,

  options: {
    /* radius: '5px',
    buttonShadow: `-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient: ' linear-gradient(180deg, #5a8fff 0%, #003094 100%)', */
  },

  breakpoints: {
    desktop: '1360px',
    tablet: '768px',
    mobile: '320px',
  },
};
