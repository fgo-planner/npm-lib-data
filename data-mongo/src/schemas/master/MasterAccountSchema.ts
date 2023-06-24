import { MasterAccountConstants } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import { SchemaDefinition } from 'mongoose';
import { MasterAccountDocument } from '../../types';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';
import { ResourcesSchema } from '../common/resources/ResourcesSchema';
import { MasterCostumesSchema } from './MasterCostumesSchema';
import { MasterServantsSchema } from './MasterServantsSchema';
import { MasterSoundtracksSchema } from './MasterSoundtracksSchema';
import { PlanGroupingSchema } from '../planner/PlanGroupingSchema';

/**
 * Mongoose schema definition for the `MasterAccountDocument` type.
 */
export const MasterAccountSchemaDefinition: SchemaDefinition<MasterAccountDocument> = {
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
            validator: MasterAccountValidators.isFriendIdFormatValidOrEmpty,
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
        type: ResourcesSchema,
        required: true,
        default: {}
    },
    servants: {
        type: MasterServantsSchema,
        required: true,
        default: {}
    },
    costumes: {
        type: MasterCostumesSchema,
        required: true,
        default: {}
    },
    soundtracks: {
        type: MasterSoundtracksSchema,
        required: true,
        default: {}
    },
    planGrouping: {
        type: PlanGroupingSchema,
        required: true,
        default: {}
    }
};
