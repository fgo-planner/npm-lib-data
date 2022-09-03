import { Entity } from '../../entity.type';
import { GameEventRewardSource } from './game-event-reward-source.type';

export type GameEvent<ID = string> = Entity<ID> & {
    name: string;
    shortName?: string;
    startDate: Date;
    endDate: Date;
    rerun: boolean;
    rewardSources: GameEventRewardSource[];
};
