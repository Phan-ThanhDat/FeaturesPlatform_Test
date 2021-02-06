import { AppTheme, Palette } from './types'

class PaletteObject implements Palette {
  constructor(
    public primary: string,
    public primary_contrast: string,
    public secondary: string,
    public secondary_contrast: string,
    public disable: string,
    public disable_contrast: string,
    public color: string
  ) {}
}

const RED = 'red'
const BLUE = 'blue'
const WHITE = 'white'
const GREY = 'grey'
const GREEN = 'green'
const BLACK = 'black'

// export const COLORS = {
//   red:RED,
//   blue: BLUE,
//   white: WHITE,
//   grey: GREY,
//   green: GREEN
// }
const Theme: AppTheme = {
  red: new PaletteObject(RED, WHITE, WHITE, RED, GREY, WHITE, WHITE),
  blue: new PaletteObject(BLUE, WHITE, WHITE, BLUE, GREY, WHITE, WHITE),
  green: new PaletteObject(GREEN, WHITE, WHITE, GREEN, GREY, WHITE, BLACK),
}

export default Theme
