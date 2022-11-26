import { Entity } from '../../Entity.type';
import { GameEventRewardSource } from './GameEventRewardSource.type';

export type GameEvent<ID = string> = Entity<ID> & {
    name: string;
    shortName?: string;
    startDate: Date;
    endDate: Date;
    rerun: boolean;
    rewardSources: GameEventRewardSource[];
};
