import { Immutable } from '@fgo-planner/common-types';
import { GameServant, GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantNoblePhantasmTarget } from '@fgo-planner/data-types';

/**
 * Space Ishtar (5* Avenger)
 */
export const GameServant_1100900: Immutable<GameServant> = {
    _id: 1100900,
    collectionNo: 268,
    name: 'Space Ishtar',
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
            materials: [
                {
                    itemId: 6510,
                    quantity: 10
                }
            ]
        },
        2: {
            qp: 400000,
            materials: [
                {
                    itemId: 6501,
                    quantity: 10
                }
            ]
        },
        3: {
            qp: 1200000,
            materials: [
                {
                    itemId: 6530,
                    quantity: 12
                }
            ]
        },
        4: {
            qp: 1600000,
            materials: [
                {
                    itemId: 6533,
                    quantity: 12
                }
            ]
        },
        5: {
            qp: 4000000,
            materials: [
                {
                    itemId: 6534,
                    quantity: 12
                }
            ]
        },
        6: {
            qp: 5000000,
            materials: [
                {
                    itemId: 6536,
                    quantity: 15
                }
            ]
        },
        7: {
            qp: 10000000,
            materials: [
                {
                    itemId: 6529,
                    quantity: 15
                }
            ]
        },
        8: {
            qp: 12000000,
            materials: [
                {
                    itemId: 6542,
                    quantity: 15
                }
            ]
        },
        9: {
            qp: 20000000,
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
            qp: 200000,
            materials: [
                {
                    itemId: 6515,
                    quantity: 10
                }
            ]
        },
        2: {
            qp: 400000,
            materials: [
                {
                    itemId: 6509,
                    quantity: 10
                }
            ]
        },
        3: {
            qp: 1200000,
            materials: [
                {
                    itemId: 6521,
                    quantity: 12
                }
            ]
        },
        4: {
            qp: 1600000,
            materials: [
                {
                    itemId: 6528,
                    quantity: 12
                }
            ]
        },
        5: {
            qp: 4000000,
            materials: [
                {
                    itemId: 6537,
                    quantity: 12
                }
            ]
        },
        6: {
            qp: 5000000,
            materials: [
                {
                    itemId: 6539,
                    quantity: 15
                }
            ]
        },
        7: {
            qp: 10000000,
            materials: [
                {
                    itemId: 6541,
                    quantity: 15
                }
            ]
        },
        8: {
            qp: 12000000,
            materials: [
                {
                    itemId: 6544,
                    quantity: 15
                }
            ]
        },
        9: {
            qp: 20000000,
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
            qp: 100000,
            materials: [
                {
                    itemId: 6515,
                    quantity: 10
                },
                {
                    itemId: 6521,
                    quantity: 10
                }
            ]
        },
        2: {
            qp: 300000,
            materials: [
                {
                    itemId: 6509,
                    quantity: 10
                },
                {
                    itemId: 6528,
                    quantity: 10
                }
            ]
        },
        3: {
            qp: 1000000,
            materials: [
                {
                    itemId: 6520,
                    quantity: 10
                },
                {
                    itemId: 6539,
                    quantity: 10
                }
            ]
        },
        4: {
            qp: 3000000,
            materials: [
                {
                    itemId: 6525,
                    quantity: 10
                },
                {
                    itemId: 6517,
                    quantity: 10
                }
            ]
        }
    },
    costumes: {
        1100930: {
            collectionNo: 31,
            name: 'Spiritron Dress: Ashtart Origin',
            materials: {
                qp: 3000000,
                materials: [
                    {
                        itemId: 6505,
                        quantity: 10
                    },
                    {
                        itemId: 6537,
                        quantity: 5
                    },
                    {
                        itemId: 6528,
                        quantity: 5
                    },
                    {
                        itemId: 6542,
                        quantity: 5
                    }
                ]
            }
        }
    },
    metadata: {
        displayName: 'Space Ishtar',
        links: [],
        fgoManagerName: 'Space Ishtar'
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
