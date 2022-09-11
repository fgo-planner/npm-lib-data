import { UserPreferences, UserWebClientPreferences, UserWebClientTheme } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { RgbaColorSchema } from '../rgba-color.schema';

/**
 * Mongoose schema for the `UserWebClientTheme` type.
 */
const UserWebClientThemeSchema = new Schema<UserWebClientTheme>({
    backgroundImageUrl: {
        type: String,
        // TODO Add URL validation
    },
    backgroundColor: {
        type: RgbaColorSchema,
        required: true
    },
    foregroundColor: {
        type: RgbaColorSchema,
        required: true
    },
    drawerColor: {
        type: RgbaColorSchema,
        required: true
    },
    primaryColor: {
        type: RgbaColorSchema,
        required: true
    },
    secondaryColor: {
        type: RgbaColorSchema,
        required: true
    },
    dividerColor: {
        type: RgbaColorSchema,
        required: true
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `UserWebClientPreferences.themes` property.
 */
const UserWebClientPreferencesThemesSchema = new Schema<UserWebClientPreferences['themes']>({
    light: {
        type: UserWebClientThemeSchema
    },
    dark: {
        type: UserWebClientThemeSchema
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `UserWebClientPreferences` type.
 */
const UserWebClientPreferencesSchema = new Schema<UserWebClientPreferences>({
    themes: {
        type: UserWebClientPreferencesThemesSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});

/**
 * Mongoose schema for the `UserPreferences` type.
 */
export const UserPreferencesSchema = new Schema<UserPreferences>({
    // TODO Add global preferences
    webClient: {
        type: UserWebClientPreferencesSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
