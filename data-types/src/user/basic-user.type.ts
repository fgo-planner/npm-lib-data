import { User } from './user.type';

export type BasicUser<ID = string> = Pick<User<ID>,
    '_id' |
    'username' |
    'email'
>;
