import { SerializableDate } from '../SerializableDate.type';
import { EntityWithTimestamps } from '../EntityWithTimestamps.type';
import { UserPreferences } from './UserPreferences.type';

export type User<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    username: string;

    hash?: string;

    email?: string;

    admin?: boolean;

    enabled: boolean;

    userPrefs: UserPreferences;

};
