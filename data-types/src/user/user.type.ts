import { SerializableDate } from '../entity/SerializableDate.type';
import { EntityWithTimestamps } from '../entity/EntityWithTimestamps.type';
import { UserPreferences } from './UserPreferences.type';

export type User<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {

    username: string;

    hash?: string;

    email?: string;

    admin?: boolean;

    enabled: boolean;

    userPrefs: UserPreferences;

};
