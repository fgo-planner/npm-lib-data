import { EntityWithTimestamps } from '../../entity/EntityWithTimestamps.type';
import { SerializableDate } from '../../entity/SerializableDate.type';
import { GameEventRewardSource } from './GameEventRewardSource.type';

export type GameEvent<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {
    name: string;
    shortName?: string;
    startDate: DATE;
    endDate: DATE;
    rerun: boolean;
    rewardSources: Array<GameEventRewardSource>;
};
