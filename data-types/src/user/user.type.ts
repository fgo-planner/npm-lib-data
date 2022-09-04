import { EntityWithTimestamps } from '../entity-with-timestamps.type';
import { UserPreferences } from './user-preferences.type';

export type User<ID = string> = EntityWithTimestamps<ID> & {

    username: string;

    hash?: string;

    email?: string;

    admin?: boolean;

    enabled: boolean;

    userPrefs: UserPreferences;
    
};
