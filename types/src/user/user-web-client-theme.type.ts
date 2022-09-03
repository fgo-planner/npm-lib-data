import { RgbaColor } from '../rgba-color.type';

export type UserWebClientTheme = {

    backgroundImageUrl?: string;

    backgroundColor: RgbaColor;

    foregroundColor: RgbaColor;

    drawerColor: RgbaColor;

    primaryColor: RgbaColor;

    secondaryColor: RgbaColor;

    dividerColor: RgbaColor;

    // TODO Add warning and error colors.

};
