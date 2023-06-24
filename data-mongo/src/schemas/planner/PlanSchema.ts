import { ObjectId } from 'bson';
import { SchemaDefinition } from 'mongoose';
import { PlanDocument } from '../../types';
import { PlanValidators, ValidationStrings } from '../../validators';
import { PlanEnabledEnhancementsSchema } from './PlanEnabledEnhancementsSchema';
import { PlanResourcesSchema } from './PlanResourcesSchema';
import { PlanServantSchema } from './PlanServantSchema';

/**
 * Mongoose schema definition for the `PlanDocument` type.
 */
export const PlanSchemaDefinition: SchemaDefinition<PlanDocument> = {
    accountId: {
        type: ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 63
    },
    description: {
        type: String
        // TODO Add length limit
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    shared: {
        type: Boolean,
        required: true,
        default: false
    },
    enabled: {
        type: PlanEnabledEnhancementsSchema,
        required: true,
        default: {}
    },
    servants: {
        type: [PlanServantSchema],
        required: true,
        validate: {
            validator: PlanValidators.servantsInstanceIdsUnique,
            message: ValidationStrings.PlanServantsUniqueInstanceIdNotUnique
        },
        default: []
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    },
    upcomingResources: {
        type: [PlanResourcesSchema],
        required: true,
        default: []
    }
};
