import { EntityWithTimestamps } from './EntityWithTimestamps.type';
import { SerializableDate } from './SerializableDate.type';

export type OmitEntityWithTimestampsProps<
    T extends EntityWithTimestamps<ID, DATE>,
    ID = string,
    DATE extends SerializableDate = string,
    K extends number | string | symbol = ''
> = Omit<T, keyof EntityWithTimestamps<ID, DATE> | K>;
