'use client';
import { createTheme, DEFAULT_THEME } from '@mantine/core';
import { roboto } from './fonts';

export const themeConfig = createTheme({
  fontFamily: `${roboto.style.fontFamily}`,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${roboto.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
  // components: {
  //   Loader: Loader.extend({
  //     defaultProps: {
  //       loaders: { ...Loader.defaultLoaders, ring: RingLoader },
  //       type: 'ring',
  //     },
  //   }),
  // },
});
