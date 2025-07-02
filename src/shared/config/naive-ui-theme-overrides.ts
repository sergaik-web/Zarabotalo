import type { GlobalThemeOverrides } from 'naive-ui'

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    cardColor: '#2D3748',
    textColorBase: 'hsla(160, 100%, 37%, 1)',
    borderColor: 'hsla(160, 100%, 37%, 1)',
  },
  Card: {
    titleTextColor: 'hsla(160, 100%, 37%, 1)',
    titleFontWeight: 600,
  },
  Input: {
    color: '#1E2939',
    textColor: 'hsla(160, 100%, 37%, 1)',
    border: '1px solid hsla(160, 100%, 37%, 1)',
    borderHover: '1px solid hsla(160, 100%, 37%, 1)',
    borderFocus: '1px solid hsla(160, 100%, 37%, 1)',
  },
  Button: {
    textColor: 'hsla(160, 100%, 37%, 1)',
    borderColor: 'hsla(160, 100%, 37%, 1)',
    borderHoverColor: 'hsla(160, 100%, 37%, 1)',
    textColorHover: 'hsla(160, 100%, 37%, 1)',
    borderPressedColor: 'hsla(160, 100%, 37%, 1)',
    textColorPressed: 'hsla(160, 100%, 37%, 1)',
    colorHover: 'transparent',
    colorPressed: 'transparent',
    colorFocus: 'transparent',
  },
}
