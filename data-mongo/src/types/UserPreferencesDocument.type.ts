import { UserDocument } from './UserDocument.type';

/**
 * Projected version of the `UserDocument` type with only `userPrefs`.
 */
export type UserPreferencesDocument = Pick<UserDocument, '_id' | 'userPrefs'>;
