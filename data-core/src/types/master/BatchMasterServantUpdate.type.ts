import { MasterServantUpdate } from './MasterServantUpdate.type';

export type BatchMasterServantUpdate = MasterServantUpdate & {

    /**
     * The `gameId` of the target servant.
     */
    gameId: number;

    /**
     * Can be used during batch update process to match the update with a specific
     * target. Has no effect during single servant updates.
     */
    instanceId?: number;
    
};
