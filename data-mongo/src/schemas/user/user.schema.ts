import { SchemaDefinition } from 'mongoose';
import { User } from '../../types';
import { UserPreferencesSchema } from './user-preferences.schema';

/**
 * Mongoose schema definition for the `User` type.
 */
export const UserSchemaDefinition: SchemaDefinition<User> = {
    username: {
        type: String,
        // TODO Add validation
        lowercase: true,
        required: true,
        unique: true,
        index: true
    },
    hash: {
        type: String
    },
    email: {
        type: String,
        // TODO Add validation
        lowercase: true,
        required: false,
        unique: true,
        sparse: true
    },
    admin: {
        type: Boolean,
        index: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: true,
        index: true
    },
    userPrefs: {
        type: UserPreferencesSchema,
        required: true,
        default: {}
    }
};
