import { InstantiatedServantConstants, MasterServants } from '@fgo-planner/data-core';
import { Schema } from 'mongoose';
import { CommonTransformers } from '../../Transformers';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';
import { MasterServantSchema } from './MasterServantSchema';

/**
 * Mongoose schema for the `MasterServants` type.
 */
export const MasterServantsSchema = new Schema<MasterServants>({
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
    }
}, {
    _id: false,
    storeSubdocValidationError: false,
    minimize: false
});
