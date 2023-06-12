import { SchemaDefinition } from 'mongoose';
import { UserDocument } from '../../types';
import { UserPreferencesSchema } from './UserPreferencesSchema';

/**
 * Mongoose schema definition for the `UserDocument` type.
 */
export const UserSchemaDefinition: SchemaDefinition<UserDocument> = {
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
