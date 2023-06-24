/**
 * Enhancement categories that are enabled/disabled for plan requirement
 * computations.
 */
export type PlanEnabledEnhancements = {

    /**
     * Whether ascension and level requirements are computed.
     */
    ascensions: boolean;

    /**
     * Whether skill requirements are computed.
     */
    skills: boolean;

    /**
     * Whether append skill requirements are computed.
     */
    appendSkills: boolean;

    /**
     * Whether costume unlock requirements are computed.
     */
    costumes: boolean;

};
