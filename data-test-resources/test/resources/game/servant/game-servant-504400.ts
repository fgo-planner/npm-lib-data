import { Immutable } from '@fgo-planner/common-types';
import { GameServant, GameServantAttribute, GameServantCardType, GameServantClass, GameServantGender, GameServantNoblePhantasmTarget } from '@fgo-planner/data-types';

/**
 * Chen Gong (2* Caster)
 */
export const GameServant_504400: Immutable<GameServant> = {
    _id: 504400,
    collectionNo: 258,
    name: 'Chen Gong',
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
            materials: [
                {
                    itemId: 6005,
                    quantity: 3
                }
            ]
        },
        2: {
            qp: 40000,
            materials: [
                {
                    itemId: 6005,
                    quantity: 6
                }
            ]
        },
        3: {
            qp: 120000,
            materials: [
                {
                    itemId: 6105,
                    quantity: 3
                }
            ]
        },
        4: {
            qp: 160000,
            materials: [
                {
                    itemId: 6105,
                    quantity: 6
                },
                {
                    itemId: 6510,
                    quantity: 3
                }
            ]
        },
        5: {
            qp: 400000,
            materials: [
                {
                    itemId: 6205,
                    quantity: 3
                },
                {
                    itemId: 6510,
                    quantity: 5
                }
            ]
        },
        6: {
            qp: 500000,
            materials: [
                {
                    itemId: 6205,
                    quantity: 6
                },
                {
                    itemId: 6511,
                    quantity: 3
                }
            ]
        },
        7: {
            qp: 1000000,
            materials: [
                {
                    itemId: 6511,
                    quantity: 5
                },
                {
                    itemId: 6532,
                    quantity: 3
                }
            ]
        },
        8: {
            qp: 1200000,
            materials: [
                {
                    itemId: 6532,
                    quantity: 9
                },
                {
                    itemId: 6538,
                    quantity: 12
                }
            ]
        },
        9: {
            qp: 2000000,
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
            qp: 20000,
            materials: [
                {
                    itemId: 6005,
                    quantity: 3
                }
            ]
        },
        2: {
            qp: 40000,
            materials: [
                {
                    itemId: 6005,
                    quantity: 6
                }
            ]
        },
        3: {
            qp: 120000,
            materials: [
                {
                    itemId: 6105,
                    quantity: 3
                }
            ]
        },
        4: {
            qp: 160000,
            materials: [
                {
                    itemId: 6105,
                    quantity: 6
                },
                {
                    itemId: 6515,
                    quantity: 3
                }
            ]
        },
        5: {
            qp: 400000,
            materials: [
                {
                    itemId: 6205,
                    quantity: 3
                },
                {
                    itemId: 6515,
                    quantity: 5
                }
            ]
        },
        6: {
            qp: 500000,
            materials: [
                {
                    itemId: 6205,
                    quantity: 6
                },
                {
                    itemId: 6525,
                    quantity: 1
                }
            ]
        },
        7: {
            qp: 1000000,
            materials: [
                {
                    itemId: 6525,
                    quantity: 2
                },
                {
                    itemId: 6534,
                    quantity: 9
                }
            ]
        },
        8: {
            qp: 1200000,
            materials: [
                {
                    itemId: 6534,
                    quantity: 27
                },
                {
                    itemId: 6539,
                    quantity: 8
                }
            ]
        },
        9: {
            qp: 2000000,
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
            qp: 15000,
            materials: [
                {
                    itemId: 7005,
                    quantity: 3
                }
            ]
        },
        2: {
            qp: 45000,
            materials: [
                {
                    itemId: 7005,
                    quantity: 6
                },
                {
                    itemId: 6511,
                    quantity: 4
                }
            ]
        },
        3: {
            qp: 150000,
            materials: [
                {
                    itemId: 7105,
                    quantity: 3
                },
                {
                    itemId: 6510,
                    quantity: 5
                },
                {
                    itemId: 6515,
                    quantity: 3
                }
            ]
        },
        4: {
            qp: 450000,
            materials: [
                {
                    itemId: 7105,
                    quantity: 6
                },
                {
                    itemId: 6515,
                    quantity: 5
                },
                {
                    itemId: 6525,
                    quantity: 3
                }
            ]
        }
    },
    costumes: {},
    metadata: {
        displayName: 'Chen Gong',
        fgoManagerName: 'Chen Gong',
        links: []
    },
    np: [
        {
            cardType: GameServantCardType.Arts,
            target: GameServantNoblePhantasmTarget.All
        }
    ]
};
