import { MasterAccountConstants, InstantiatedServantConstants } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { CommonTransformers } from '../../transformers';
import { MasterAccount } from '../../types';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';
import { GameEmberQuantitiesSchema } from '../game/ember/game-ember-quantities.schema';
import { GameItemQuantitiesSchemaTypeOptions } from '../game/item/game-item-quantities.schema';
import { MasterServantSchema } from './master-servant.schema';

/**
 * Mongoose schema for the `MasterAccount.resources` property.
 */
export const MasterAccountResourcesSchema = new Schema<MasterAccount['resources']>({
    items: {
        ...GameItemQuantitiesSchemaTypeOptions,
        required: true,
        default: {}
    },
    embers: {
        type: GameEmberQuantitiesSchema,
        required: true,
        default: {}
    },
    qp: {
        type: Number,
        required: true,
        min: MasterAccountConstants.MinQp,
        max: MasterAccountConstants.MaxQp,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: MasterAccountConstants.MinQp
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
        min: MasterAccountConstants.MinExp,
        max: MasterAccountConstants.MaxExp,
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
        validate: [
            {
                validator: MasterAccountValidators.servantsSizeLimit,
                message: ValidationStrings.MasterAccountServantsSizeLimitExceeded
            },
            {
                validator: MasterAccountValidators.servantsInstanceIdsUnique,
                message: ValidationStrings.MasterAccountServantsInstanceIdNotUnique
            }
        ],
        default: []
    },
    lastServantInstanceId: {
        type: Number,
        min: 0,
        required: true,
        validate: [
            {
                validator: CommonValidators.isNullOrInteger,
                message: ValidationStrings.NumberInteger
            },
            /**
             * The validation below is not possible here because there is no way to access
             * the servants, due to `this` being of type `Query` (even when using
             * `updateOne` instead of `findOneAndUpdate`). Instead, we handle the validation
             * in the `partialUpdate` static method.
             */
            // {
            //     validator: MasterAccountValidators.lastServantInstanceIdValid,
            //     message: ValidationStrings.MasterAccountLastServantInstanceIdInvalid
            // }
        ],
        default: MasterAccountValidators.getDefaultLastServantInstanceId
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    },
    bondLevels: {
        type: Map,
        of: {
            type: Number
        },
        validate: [
            {
                validator: CommonValidators.mapIntegerKeysValidator(0),
                message: ValidationStrings.GenericInvalidKeyPathOnly
            },
            {
                validator: CommonValidators.mapIntegerValuesValidator(
                    InstantiatedServantConstants.MinBondLevel,
                    InstantiatedServantConstants.MaxBondLevel
                ),
                message: ValidationStrings.GenericInvalidValuePathOnly
            },
        ],
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
