import { UserGlobalPreferences } from './UserGlobalPreferences.type';
import { UserWebClientPreferences } from './UserWebClientPreferences.type';

export type UserPreferences  = {

    global: UserGlobalPreferences;

    webClient: UserWebClientPreferences;

};
