import { Immutable } from '@fgo-planner/common-types';
import { GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantNoblePhantasmTarget, GameServantWithMetadata } from '@fgo-planner/data-types';

/**
 * Chen Gong (2* Caster)
 */
export const GameServant_504400: Immutable<GameServantWithMetadata> = {
    _id: 504400,
    collectionNo: 258,
    name: 'Chen Gong',
    displayName: 'Chen Gong',
    class: GameServantClass.Caster,
    rarity: 2,
    cost: 4,
    maxLevel: 65,
    gender: GameServantGender.Male,
    attribute: GameServantAttribute.Man,
    hpBase: 1459,
    hpMax: 7755,
    atkBase: 1085,
    atkMax: 6119,
    growthCurve: 5,
    skillMaterials: {
        1: {
            qp: 20000,
            materials: {
                6005: 3
            }
        },
        2: {
            qp: 40000,
            materials: {
                6005: 6
            }
        },
        3: {
            qp: 120000,
            materials: {
                6105: 3
            }
        },
        4: {
            qp: 160000,
            materials: {
                6105: 6,
                6510: 3
            }
        },
        5: {
            qp: 400000,
            materials: {
                6205: 3,
                6510: 5
            }
        },
        6: {
            qp: 500000,
            materials: {
                6205: 6,
                6511: 3
            }
        },
        7: {
            qp: 1000000,
            materials: {
                6511: 5,
                6532: 3
            }
        },
        8: {
            qp: 1200000,
            materials: {
                6532: 9,
                6538: 12
            }
        },
        9: {
            qp: 2000000,
            materials: {
                6999: 1
            }
        }
    },
    appendSkillMaterials: {
        1: {
            qp: 20000,
            materials: {
                6005: 3
            }
        },
        2: {
            qp: 40000,
            materials: {
                6005: 6
            }
        },
        3: {
            qp: 120000,
            materials: {
                6105: 3
            }
        },
        4: {
            qp: 160000,
            materials: {
                6105: 6,
                6515: 3
            }
        },
        5: {
            qp: 400000,
            materials: {
                6205: 3,
                6515: 5
            }
        },
        6: {
            qp: 500000,
            materials: {
                6205: 6,
                6525: 1
            }
        },
        7: {
            qp: 1000000,
            materials: {
                6525: 2,
                6534: 9
            }
        },
        8: {
            qp: 1200000,
            materials: {
                6534: 27,
                6539: 8
            }
        },
        9: {
            qp: 2000000,
            materials: {
                6999: 1
            }
        }
    },
    ascensionMaterials: {
        1: {
            qp: 15000,
            materials: {
                7005: 3
            }
        },
        2: {
            qp: 45000,
            materials: {
                6511: 4,
                7005: 6
            }
        },
        3: {
            qp: 150000,
            materials: {
                6510: 5,
                6515: 3,
                7105: 3
            }
        },
        4: {
            qp: 450000,
            materials: {
                6515: 5,
                6525: 3,
                7105: 6
            }
        }
    },
    costumes: {},
    metadata: {
        fgoManagerName: 'Chen Gong',
        searchTags: [],
        links: []
    },
    np: [
        {
            cardType: GameServantCardType.Arts,
            target: GameServantNoblePhantasmTarget.All
        }
    ]
};
