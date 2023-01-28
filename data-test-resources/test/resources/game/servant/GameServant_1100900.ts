import { Immutable } from '@fgo-planner/common-types';
import { GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantNoblePhantasmTarget, GameServantWithMetadata } from '@fgo-planner/data-types';

/**
 * Space Ishtar (5* Avenger)
 */
export const GameServant_1100900: Immutable<GameServantWithMetadata> = {
    _id: 1100900,
    collectionNo: 268,
    name: 'Space Ishtar',
    displayName: 'Space Ishtar',
    class: GameServantClass.Avenger,
    rarity: 5,
    cost: 16,
    maxLevel: 90,
    gender: GameServantGender.Female,
    attribute: GameServantAttribute.Star,
    hpBase: 1912,
    hpMax: 13041,
    atkBase: 1949,
    atkMax: 12612,
    growthCurve: 10,
    skillMaterials: {
        1: {
            qp: 200000,
            materials: {
                6510: 10
            }
        },
        2: {
            qp: 400000,
            materials: {
                6501: 10
            }
        },
        3: {
            qp: 1200000,
            materials: {
                6530: 12
            }
        },
        4: {
            qp: 1600000,
            materials: {
                6533: 12
            }
        },
        5: {
            qp: 4000000,
            materials: {
                6534: 12
            }
        },
        6: {
            qp: 5000000,
            materials: {
                6536: 15
            }
        },
        7: {
            qp: 10000000,
            materials: {
                6529: 15
            }
        },
        8: {
            qp: 12000000,
            materials: {
                6542: 15
            }
        },
        9: {
            qp: 20000000,
            materials: {
                6999: 1
            }
        }
    },
    appendSkillMaterials: {
        1: {
            qp: 200000,
            materials: {
                6515: 10
            }
        },
        2: {
            qp: 400000,
            materials: {
                6509: 10
            }
        },
        3: {
            qp: 1200000,
            materials: {
                6521: 12
            }
        },
        4: {
            qp: 1600000,
            materials: {
                6528: 12
            }
        },
        5: {
            qp: 4000000,
            materials: {
                6537: 12
            }
        },
        6: {
            qp: 5000000,
            materials: {
                6539: 15
            }
        },
        7: {
            qp: 10000000,
            materials: {
                6541: 15
            }
        },
        8: {
            qp: 12000000,
            materials: {
                6544: 15
            }
        },
        9: {
            qp: 20000000,
            materials: {
                6999: 1
            }
        }
    },
    ascensionMaterials: {
        1: {
            qp: 100000,
            materials: {
                6515: 10,
                6521: 10
            }
        },
        2: {
            qp: 300000,
            materials: {
                6509: 10,
                6528: 10
            }
        },
        3: {
            qp: 1000000,
            materials: {
                6520: 10,
                6539: 10
            }
        },
        4: {
            qp: 3000000,
            materials: {
                6517: 10,
                6525: 10
            }
        }
    },
    costumes: {
        1100930: {
            collectionNo: 31,
            name: 'Spiritron Dress: Ashtart Origin',
            materials: {
                qp: 3000000,
                materials: {
                    6505: 10,
                    6528: 5,
                    6537: 5,
                    6542: 5
                }
            }
        }
    },
    metadata: {
        fgoManagerName: 'Space Ishtar',
        searchTags: [],
        links: []
    },
    np: [
        {
            cardType: GameServantCardType.Arts,
            target: GameServantNoblePhantasmTarget.All
        },
        {
            cardType: GameServantCardType.Buster,
            target: GameServantNoblePhantasmTarget.All
        },
        {
            cardType: GameServantCardType.Quick,
            target: GameServantNoblePhantasmTarget.All
        }
    ]
};
