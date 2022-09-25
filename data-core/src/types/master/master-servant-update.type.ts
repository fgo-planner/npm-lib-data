import { MasterServantAscensionLevel, MasterServantBondLevel, MasterServantNoblePhantasmLevel, MasterServantSkillLevel } from '@fgo-planner/data-types';

export type MasterServantUpdateType = 'New' | 'Existing' | 'Imported';

export const NewMasterServantUpdateType = 'New';

export const ExistingMasterServantUpdateType = 'Existing';

export const ImportedMasterServantUpdateType = 'Imported';

type Indeterminate = 'indeterminate';

export type MasterServantUpdateIndeterminate = Indeterminate;

export const MasterServantUpdateIndeterminateValue: Indeterminate = 'indeterminate';

type BaseMasterServantUpdate = {

    /**
     * Qualifier for identifying the update type.
     */
    readonly type: MasterServantUpdateType;

    /**
     * Whether the servant has already been summoned by the master, or is just
     * tentative. Supports indeterminate value.
     */
    summoned: boolean | Indeterminate;

    /**
     * The servant's summoning date in number of milliseconds since the
     * ECMAScript epoch. Supports indeterminate value.
     */
    summonDate?: number | Indeterminate;

    /**
     * The servant's noble phantasm level. Supports indeterminate value.
     */
    np: MasterServantNoblePhantasmLevel | Indeterminate;

    /**
     * The servant's level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited.
     * If multiple servants are being edited, this should be set to the
     * indeterminate value.
     *
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    level: number | Indeterminate;

    /**
     * The servant's ascension level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited.
     * If multiple servants are being edited, this should be set to the
     * indeterminate value.
     * 
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    ascension: MasterServantAscensionLevel | Indeterminate;

    /**
     * The servant's attack fou enhancement. Supports indeterminate value.
     */
    fouAtk?: number | Indeterminate;

    /**
     * The servant's HP fou enhancement. Supports indeterminate value.
     */
    fouHp?: number | Indeterminate;

    /**
     * The servant's skill levels. Supports indeterminate values.
     */
    skills: {
        1: MasterServantSkillLevel | Indeterminate;
        2?: MasterServantSkillLevel | Indeterminate;
        3?: MasterServantSkillLevel | Indeterminate;
    };

    /**
     * The servant's append skill levels. Supports indeterminate values.
     */
    appendSkills: {
        1?: MasterServantSkillLevel | Indeterminate;
        2?: MasterServantSkillLevel | Indeterminate;
        3?: MasterServantSkillLevel | Indeterminate;
    };

    /**
     * The servant's bond level. Supports indeterminate value.
     */
    bondLevel?: MasterServantBondLevel | Indeterminate;

    /**
     * Contains all of the IDs of the costumes that are to be added or removed as
     * a result of the update. Supports indeterminate values.
     */
    unlockedCostumes: Map<number, boolean | Indeterminate>;

};

export type NewMasterServantUpdate = BaseMasterServantUpdate & {
    readonly type: 'New';
    /**
     * The ID of the servant that is being added.
     */
    gameId: number;
};

export type ExistingMasterServantUpdate = BaseMasterServantUpdate & {
    readonly type: 'Existing';
    /**
     * The ID of the servant that is being editing. Supports indeterminate values.
     */
    gameId: number | Indeterminate;
};

export type ImportedMasterServantUpdate = BaseMasterServantUpdate & {
    readonly type: 'Imported';
    /**
     * The ID of the servant that is being imported.
     */
    gameId: number;
    /**
     * If present, the batch update process will try to target the existing servant
     * with the matching `instanceId` and `gameId`. If the `instanceId` matches but
     * the `gameId` does not, then it will be ignored. Has no effect during single
     * servant updates.
     */
    instanceId?: number;
};

/**
 * Data transfer object for updating master servant data. Some fields can be set
 * to an indeterminate value (specific value depends on the field) when updating
 * multiple servants or when performing partial updates. Fields set to an
 * indeterminate value will be ignored when updating the master servant data.
 *
 * Data conversion between the update payload and master servant (and related
 * data) is handled by the `MasterServantUpdateUtils` class. 
 */
export type MasterServantUpdate = NewMasterServantUpdate | ExistingMasterServantUpdate | ImportedMasterServantUpdate;
