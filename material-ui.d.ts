import { Palette } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
    export interface Palette {
        copyandpost: {
            yellow: string;
            green: string;
            red: string;
            grey: string;
            light: string;
            tan: string;
            dark: string;
            blue: string;
        }
    }
  }