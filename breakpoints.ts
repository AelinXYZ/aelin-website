const sizes = {
  smallMobile: '500px',
  mobile: '620px',
  tablet: '840px',
  laptop: '1100px',
  desktop: '2560px',
};

export const devices = {
  smallMobile: `(max-width: ${sizes.smallMobile})`,
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
