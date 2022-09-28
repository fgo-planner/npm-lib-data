import { MasterServantAscensionLevel, MasterServantBondLevel, MasterServantNoblePhantasmLevel, MasterServantSkillLevel } from '@fgo-planner/data-types';
import { MasterServantUpdateBoolean } from './master-servant-update-boolean.type';
import { MasterServantUpdateNumber } from './master-servant-update-number.type';

/**
 * Qualifier for identifying the update type.
 */
export type MasterServantUpdateType = 'New' | 'Existing' | 'Imported';

/**
 * Qualifier value for the `NewMasterServantUpdate` type.
 */
export const NewMasterServantUpdateType = 'New';

/**
 * Qualifier value for the `ExistingMasterServantUpdate` type.
 */
export const ExistingMasterServantUpdateType = 'Existing';

/**
 * Qualifier value for the `ImportedMasterServantUpdate` type.
 */
export const ImportedMasterServantUpdateType = 'Imported';

type BaseMasterServantUpdate = {

    /**
     * Qualifier for identifying the update type.
     */
    readonly type: MasterServantUpdateType;

    /**
     * Whether the servant has already been summoned by the master, or is just
     * tentative. Supports indeterminate value.
     */
    summoned: MasterServantUpdateBoolean;

    /**
     * The servant's summoning date in number of milliseconds since the
     * ECMAScript epoch. Supports indeterminate value.
     */
    summonDate: MasterServantUpdateNumber | null;

    /**
     * The servant's noble phantasm level. Supports indeterminate value.
     */
    np: MasterServantUpdateNumber<MasterServantNoblePhantasmLevel>;

    /**
     * The servant's level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited.
     * If multiple servants are being edited, this should be set to the
     * indeterminate value.
     *
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    level: MasterServantUpdateNumber;

    /**
     * The servant's ascension level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited.
     * If multiple servants are being edited, this should be set to the
     * indeterminate value.
     * 
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    ascension: MasterServantUpdateNumber<MasterServantAscensionLevel>;

    /**
     * The servant's attack fou enhancement. Supports indeterminate value.
     */
    fouAtk: MasterServantUpdateNumber | null;

    /**
     * The servant's HP fou enhancement. Supports indeterminate value.
     */
    fouHp: MasterServantUpdateNumber | null;

    /**
     * The servant's skill levels. Supports indeterminate values.
     */
    skills: {
        1: MasterServantUpdateNumber<MasterServantSkillLevel>;
        2: MasterServantUpdateNumber<MasterServantSkillLevel> | null;
        3: MasterServantUpdateNumber<MasterServantSkillLevel> | null;
    };

    /**
     * The servant's append skill levels. Supports indeterminate values.
     */
    appendSkills: {
        1: MasterServantUpdateNumber<MasterServantSkillLevel> | null;
        2: MasterServantUpdateNumber<MasterServantSkillLevel> | null;
        3: MasterServantUpdateNumber<MasterServantSkillLevel> | null;
    };

    /**
     * The servant's bond level. Supports indeterminate value.
     */
    bondLevel: MasterServantUpdateNumber<MasterServantBondLevel> | null;

    /**
     * Contains all of the IDs of the costumes that are to be added or removed as
     * a result of the update. Supports indeterminate values.
     */
    unlockedCostumes: Map<number, MasterServantUpdateBoolean>;

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
    gameId: MasterServantUpdateNumber;
};

export type ImportedMasterServantUpdate = BaseMasterServantUpdate & {
    readonly type: 'Imported';
    /**
     * The ID of the servant that is being imported.
     */
    gameId: number;
    /**
     * Can be used during batch update process to match the update with a specific
     * target. Has no effect during single servant updates.
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
