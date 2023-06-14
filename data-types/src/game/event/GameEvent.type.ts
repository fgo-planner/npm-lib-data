import { EntityWithTimestamps } from '../../EntityWithTimestamps.type';
import { SerializableDate } from '../../SerializableDate.type';
import { GameEventRewardSource } from './GameEventRewardSource.type';

export type GameEvent<ID = string, DATE extends SerializableDate = string> = EntityWithTimestamps<ID, DATE> & {
    name: string;
    shortName?: string;
    startDate: DATE;
    endDate: DATE;
    rerun: boolean;
    rewardSources: GameEventRewardSource[];
};
