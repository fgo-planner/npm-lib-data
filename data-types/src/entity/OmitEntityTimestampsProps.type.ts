import { EntityTimestamps } from './EntityTimestamps.type';
import { SerializableDate } from './SerializableDate.type';

export type OmitEntityTimestampsProps<
    T extends EntityTimestamps<DATE>,
    DATE extends SerializableDate = string,
    K extends number | string | symbol = ''
> = Omit<T, keyof EntityTimestamps | K>;
