import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { CommonTransformers } from '../../../transformers';
import { MasterAccount } from '../../../types';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../../validators';
import { GameEmberQuantitiesSchema } from '../../game/ember/game-ember-quantities.schema';
import { GameItemQuantitySchema } from '../../game/item/game-item-quantity.schema';
import { MasterServantSchema } from '../servant/master-servant.schema';

/**
 * Mongoose schema for the `MasterAccount.resources` property.
 */
export const MasterAccountResourcesSchema = new Schema<MasterAccount['resources']>({
    items: {
        type: [GameItemQuantitySchema],
        required: true,
        default: []
    },
    embers: {
        type: GameEmberQuantitiesSchema,
        required: true,
        default: {}
    },
    qp: {
        type: Number,
        required: true,
        min: 0,
        max: 2000000000, // TODO Define this as a constant
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});

/**
 * Mongoose schema definition for the `MasterAccount` type.
 */
export const MasterAccountSchemaDefinition: SchemaDefinition<MasterAccount> = {
    userId: {
        type: ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 31
    },
    friendId: {
        type: String,
        validate: {
            validator: MasterAccountValidators.isFriendIdFormalValidOrEmpty,
            message: ValidationStrings.MasterFriendIdFormat
        },
        index: true
    },
    exp: {
        type: Number,
        min: 0,
        max: 367421977, // TODO Define this as a constant
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: null
    },
    resources: {
        type: MasterAccountResourcesSchema,
        required: true,
        default: {}
    },
    servants: {
        type: [MasterServantSchema],
        required: true,
        validate: {
            validator: MasterAccountValidators.servantInstanceIdsUnique,
            message: ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    },
    bondLevels: {
        type: Map,
        of: {
            type: Number,
            min: 0,
            max: 15,
            validate: {
                validator: CommonValidators.isNullOrInteger,
                message: ValidationStrings.NumberInteger
            }
        },
        required: true,
        default: {},
        transform: CommonTransformers.mapToObject as any
    },
    soundtracks: {
        type: [Number],
        required: true,
        default: []
    }
};
