import { Entity } from '../../Entity.type';
import { GameServantAscensionMaterials } from './GameServantAscensionMaterials.type';
import { GameServantAttribute } from './GameServantAttribute.enum';
import { GameServantClass } from './GameServantClass.enum';
import { GameServantCostume } from './GameServantCostume.type';
import { GameServantGachaType } from './GameServantGachaType.enum';
import { GameServantGender } from './GameServantGender.enum';
import { GameServantGrowthCurve } from './GameServantGrowthCurve.enum';
import { GameServantMetadata } from './GameServantMetadata.type';
import { GameServantNoblePhantasm } from './GameServantNoblePhantasm.enum';
import { GameServantRarity } from './GameServantRarity.type';
import { GameServantSkillMaterials } from './GameServantSkillMaterials.type';

export type GameServant = Entity<number> & {

    collectionNo: number;

    name?: string;

    gachaType?: GameServantGachaType;

    class: GameServantClass;

    rarity: GameServantRarity;

    cost: number;

    /**
     * The natural level cap of the servant.
     */
    maxLevel: number;

    gender: GameServantGender;

    attribute: GameServantAttribute;

    // TODO Add card deck

    /**
     * The servant's hit points at level 1.
     */
    hpBase: number;

    /**
     * The servant's hit points at their natural level cap.
     */
    hpMax: number;

    /**
     * The servant's attack strength at level 1.
     */
    atkBase: number;

    /**
     * The servant's attack strength at their natural level cap.
     */
    atkMax: number;

    growthCurve: GameServantGrowthCurve;

    /**
     * Contains the unique noble phantasm card type and target combinations for the
     * servant, used for filtering purposes. Duplicate combinations are only
     * included once.
     *
     * Examples:
     * - Fairy Knight Lancelot has two noble phantasms: an arts type single target
     *   and a buster type AOE. She will have two entries under this field.
     * - Space Ishtar has switchable noble phantasm card types. She will have three
     *   entries under this field.
     * - Mash has two noble phantasm, but both are support art types. She will only
     *   have one entry under this field.
     */
    np: Array<GameServantNoblePhantasm>;

    skillMaterials: GameServantSkillMaterials;

    appendSkillMaterials: GameServantSkillMaterials;

    ascensionMaterials?: GameServantAscensionMaterials;

    costumes: Record<number, GameServantCostume>;

    metadata: GameServantMetadata;

};
