import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { UserPreferences } from './UserPreferences.type';

export type User<ID = string> = EntityWithTimestamps<ID> & {

    username: string;

    hash?: string;

    email?: string;

    admin?: boolean;

    enabled: boolean;

    userPrefs: UserPreferences;
    
};
