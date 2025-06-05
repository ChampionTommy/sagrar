import localFont from 'next/font/local';

type FontConfig = {
  variable: string;
  style: {
    fontFamily: string;
  };
};

const golosText = localFont({
  src: [
    {
      path: '../../../../public/fonts/Golos-Text_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Golos-Text_Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Golos-Text_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-golos-text',
});

const golosUI = localFont({
  src: [
    {
      path: '../../../../public/fonts/golos-ui_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/golos-ui_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/golos-ui_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-golos-ui',
});

const golosTextVF = localFont({
  src: '../../../../public/fonts/golos-text_vf.woff2',
  variable: '--font-golos-text-vf',
});

const golosUIVF = localFont({
  src: '../../../../public/fonts/golos-ui_vf.woff2',
  variable: '--font-golos-ui-vf',
});

export const allFonts = {
  golosText,
  golosUI,
  golosTextVF,
  golosUIVF,
};

export const createFontsConfig = (config: Record<string, FontConfig>) => {
  const result: Record<string, { value: string }> = {};

  for (const [name, font] of Object.entries(config)) {
    result[name] = { value: font.style.fontFamily };
  }

  return result;
};

export const fonts = createFontsConfig({
  heading: golosText,
  body: golosText,
  ui: golosUI,
  uiHeading: golosUI,
});
