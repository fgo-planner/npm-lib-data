import { Entity } from './Entity.type';

export type OmitEntityProps<
    T extends Entity<ID>,
    ID = string,
    K extends number | string | symbol = ''
> = Omit<T, keyof Entity | K>;
