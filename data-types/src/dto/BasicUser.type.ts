import { User } from '../user/User.type';

export type BasicUser<ID = string> = Pick<User<ID>,
    '_id' |
    'username' |
    'email'
>;
