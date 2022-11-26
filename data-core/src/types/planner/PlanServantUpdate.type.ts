import { InstantiatedServantAscensionLevel, InstantiatedServantSkillLevel } from '@fgo-planner/data-types';
import { InstantiatedServantUpdateBoolean } from '../common/InstantiatedServantUpdateBoolean.type';
import { InstantiatedServantUpdateNumber } from '../common/InstantiatedServantUpdateNumber.type';

/**
 * Data transfer object for updating plan servant data. Some fields can be set
 * to an indeterminate value (specific value depends on the field) when updating
 * multiple servants or when performing partial updates. Fields set to an
 * indeterminate value will be ignored when updating the plan servant data.
 *
 * Data conversion between the update payload and plan servant (and related
 * data) is handled by the `PlanServantUpdateUtils` class. 
 */
export type PlanServantUpdate = {

    /**
     * Enhancement categories that are enabled/disabled for plan requirement
     * computations.
     */
    enabled: {

        /**
         * Whether the entire servant's requirements are computed for the plan. Supports
         * indeterminate value.
         */
        servant: InstantiatedServantUpdateBoolean;

        /**
         * Whether the servant's ascension and level requirements are computed for the
         * plan. Supports indeterminate value.
         */
        ascensions: InstantiatedServantUpdateBoolean;

        /**
         * Whether the servant's skill requirements are computed for the plan. Supports
         * indeterminate value.
         */
        skills: InstantiatedServantUpdateBoolean;

        /**
         * Whether the servant's append skill requirements are computed for the plan.
         * Supports indeterminate value.
         */
        appendSkills: InstantiatedServantUpdateBoolean;

        /**
         * Whether the servant's costume unlock requirements are computed for the plan.
         * Supports indeterminate value.
         */
        costumes: InstantiatedServantUpdateBoolean;
    };

    /**
     * The servant's target level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited. If
     * multiple servants are being edited, this should be set to the indeterminate
     * value.
     *
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    level: InstantiatedServantUpdateNumber | null;

    /**
     * The servant's target ascension level. Supports indeterminate value.
     *
     * This is currently not supported when multiple servants are being edited. If
     * multiple servants are being edited, this should be set to the indeterminate
     * value.
     *
     * TODO Find a way to handle this when multiple servants are being edited.
     */
    ascension: InstantiatedServantUpdateNumber<InstantiatedServantAscensionLevel> | null;

    /**
     * The servant's target attack fou enhancement. Supports indeterminate value.
     */
    fouAtk: InstantiatedServantUpdateNumber | null;

    /**
     * The servant's target HP fou enhancement. Supports indeterminate value.
     */
    fouHp: InstantiatedServantUpdateNumber | null;

    /**
     * The servant's target skill levels. Supports indeterminate values.
     */
    skills: {
        1: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
        2: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
        3: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
    };

    /**
     * The servant's target append skill levels. Supports indeterminate values.
     */
    appendSkills: {
        1: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
        2: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
        3: InstantiatedServantUpdateNumber<InstantiatedServantSkillLevel> | null;
    };

    /**
     * Contains all of the IDs of the target costumes that are to be added or
     * removed as a result of the update.
     */
    costumes: Map<number, boolean>;

};
