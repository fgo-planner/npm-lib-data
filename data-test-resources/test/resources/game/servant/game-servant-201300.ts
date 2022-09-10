import { Immutable } from '@fgo-planner/common-types';
import { GameServant, GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantNoblePhantasmTarget } from '@fgo-planner/data-types';

/**
 * Arash (1* Archer)
 */
export const GameServant_2013000: Immutable<GameServant> = {
    _id: 201300,
    collectionNo: 16,
    name: 'Arash',
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
    growthCurve: 0,
    skillMaterials: {
        1: {
            qp: 10000,
            materials: [
                {
                    itemId: 6002,
                    quantity: 2
                }
            ]
        },
        2: {
            qp: 20000,
            materials: [
                {
                    itemId: 6002,
                    quantity: 4
                }
            ]
        },
        3: {
            qp: 60000,
            materials: [
                {
                    itemId: 6102,
                    quantity: 2
                }
            ]
        },
        4: {
            qp: 80000,
            materials: [
                {
                    itemId: 6102,
                    quantity: 4
                },
                {
                    itemId: 6503,
                    quantity: 5
                }
            ]
        },
        5: {
            qp: 200000,
            materials: [
                {
                    itemId: 6202,
                    quantity: 2
                },
                {
                    itemId: 6503,
                    quantity: 10
                }
            ]
        },
        6: {
            qp: 250000,
            materials: [
                {
                    itemId: 6202,
                    quantity: 4
                },
                {
                    itemId: 6502,
                    quantity: 2
                }
            ]
        },
        7: {
            qp: 500000,
            materials: [
                {
                    itemId: 6502,
                    quantity: 4
                },
                {
                    itemId: 6514,
                    quantity: 2
                }
            ]
        },
        8: {
            qp: 600000,
            materials: [
                {
                    itemId: 6514,
                    quantity: 6
                },
                {
                    itemId: 6505,
                    quantity: 16
                }
            ]
        },
        9: {
            qp: 1000000,
            materials: [
                {
                    itemId: 6999,
                    quantity: 1
                }
            ]
        }
    },
    appendSkillMaterials: {
        1: {
            qp: 10000,
            materials: [
                {
                    itemId: 6002,
                    quantity: 2
                }
            ]
        },
        2: {
            qp: 20000,
            materials: [
                {
                    itemId: 6002,
                    quantity: 4
                }
            ]
        },
        3: {
            qp: 60000,
            materials: [
                {
                    itemId: 6102,
                    quantity: 2
                }
            ]
        },
        4: {
            qp: 80000,
            materials: [
                {
                    itemId: 6102,
                    quantity: 4
                },
                {
                    itemId: 6515,
                    quantity: 2
                }
            ]
        },
        5: {
            qp: 200000,
            materials: [
                {
                    itemId: 6202,
                    quantity: 2
                },
                {
                    itemId: 6515,
                    quantity: 4
                }
            ]
        },
        6: {
            qp: 250000,
            materials: [
                {
                    itemId: 6202,
                    quantity: 4
                },
                {
                    itemId: 6518,
                    quantity: 1
                }
            ]
        },
        7: {
            qp: 500000,
            materials: [
                {
                    itemId: 6518,
                    quantity: 2
                },
                {
                    itemId: 6539,
                    quantity: 2
                }
            ]
        },
        8: {
            qp: 600000,
            materials: [
                {
                    itemId: 6539,
                    quantity: 4
                },
                {
                    itemId: 6541,
                    quantity: 8
                }
            ]
        },
        9: {
            qp: 1000000,
            materials: [
                {
                    itemId: 6999,
                    quantity: 1
                }
            ]
        }
    },
    ascensionMaterials: {
        1: {
            qp: 10000,
            materials: [
                {
                    itemId: 7002,
                    quantity: 2
                }
            ]
        },
        2: {
            qp: 30000,
            materials: [
                {
                    itemId: 7002,
                    quantity: 4
                },
                {
                    itemId: 6502,
                    quantity: 3
                }
            ]
        },
        3: {
            qp: 90000,
            materials: [
                {
                    itemId: 7102,
                    quantity: 2
                },
                {
                    itemId: 6503,
                    quantity: 10
                },
                {
                    itemId: 6515,
                    quantity: 2
                }
            ]
        },
        4: {
            qp: 300000,
            materials: [
                {
                    itemId: 7102,
                    quantity: 4
                },
                {
                    itemId: 6515,
                    quantity: 4
                },
                {
                    itemId: 6505,
                    quantity: 8
                }
            ]
        }
    },
    costumes: {},
    metadata: {
        displayName: 'Arash',
        fgoManagerName: 'Arash',
        links: []
    },
    np: [
        {
            cardType: GameServantCardType.Buster,
            target: GameServantNoblePhantasmTarget.All
        }
    ]
};
