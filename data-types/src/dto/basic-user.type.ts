import { User } from '../user/user.type';

export type BasicUser<ID = string> = Pick<User<ID>,
    '_id' |
    'username' |
    'email'
>;
