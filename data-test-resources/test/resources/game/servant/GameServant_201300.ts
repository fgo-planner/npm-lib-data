import { Immutable } from '@fgo-planner/common-types';
import { GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantGrowthCurveBase, GameServantNoblePhantasmTarget, GameServantWithMetadata } from '@fgo-planner/data-types';

/**
 * Arash (1* Archer)
 */
export const GameServant_201300: Immutable<GameServantWithMetadata> = {
    _id: 201300,
    collectionNo: 16,
    name: 'Arash',
    displayName: 'Arash',
    class: GameServantClass.Archer,
    rarity: 1,
    cost: 3,
    maxLevel: 60,
    gender: GameServantGender.Male,
    attribute: GameServantAttribute.Earth,
    hpBase: 1424,
    hpMax: 7122,
    atkBase: 1057,
    atkMax: 5816,
    growthCurve: GameServantGrowthCurveBase.Linear,
    skillMaterials: {
        1: {
            qp: 10000,
            materials: {
                6002: 2
            }
        },
        2: {
            qp: 20000,
            materials: {
                6002: 4
            }
        },
        3: {
            qp: 60000,
            materials: {
                6102: 2
            }
        },
        4: {
            qp: 80000,
            materials: {
                6102: 4,
                6503: 5
            }
        },
        5: {
            qp: 200000,
            materials: {
                6202: 2,
                6503: 10
            }
        },
        6: {
            qp: 250000,
            materials: {
                6202: 4,
                6502: 2
            }
        },
        7: {
            qp: 500000,
            materials: {
                6502: 4,
                6514: 2
            }
        },
        8: {
            qp: 600000,
            materials: {
                6505: 16,
                6514: 6
            }
        },
        9: {
            qp: 1000000,
            materials: {
                6999: 1
            }
        }
    },
    appendSkillMaterials: {
        1: {
            qp: 10000,
            materials: {
                6002: 2
            }
        },
        2: {
            qp: 20000,
            materials: {
                6002: 4
            }
        },
        3: {
            qp: 60000,
            materials: {
                6102: 2
            }
        },
        4: {
            qp: 80000,
            materials: {
                6102: 4,
                6515: 2
            }
        },
        5: {
            qp: 200000,
            materials: {
                6202: 2,
                6515: 4
            }
        },
        6: {
            qp: 250000,
            materials: {
                6202: 4,
                6518: 1
            }
        },
        7: {
            qp: 500000,
            materials: {
                6518: 2,
                6539: 2
            }
        },
        8: {
            qp: 600000,
            materials: {
                6539: 4,
                6541: 8
            }
        },
        9: {
            qp: 1000000,
            materials: {
                6999: 1
            }
        }
    },
    ascensionMaterials: {
        1: {
            qp: 10000,
            materials: {
                7002: 2
            }
        },
        2: {
            qp: 30000,
            materials: {
                6502: 3,
                7002: 4
            }
        },
        3: {
            qp: 90000,
            materials: {
                6503: 10,
                6515: 2,
                7102: 2
            }
        },
        4: {
            qp: 300000,
            materials: {
                6505: 8,
                6515: 4,
                7102: 4
            }
        }
    },
    costumes: {},
    metadata: {
        fgoManagerName: 'Arash',
        searchTags: [
            {
                value: 'Arash',
                enabled: true
            }
        ],
        links: []
    },
    np: [
        {
            cardType: GameServantCardType.Buster,
            target: GameServantNoblePhantasmTarget.All
        }
    ]
};
