import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { PlanDocument } from '../../types';
import { PlanValidators, ValidationStrings } from '../../validators';
import { PlanServantSchema } from './PlanServantSchema';
import { PlanUpcomingResourcesSchema } from './PlanUpcomingResourcesSchema';

/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
export const PlanEnabledSchema = new Schema<PlanDocument['enabled']>({
    ascensions: {
        type: Boolean,
        required: true,
        default: true
    },
    skills: {
        type: Boolean,
        required: true,
        default: true
    },
    appendSkills: {
        type: Boolean,
        required: true,
        default: true
    },
    costumes: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

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
        type: Date
    },
    endDate: {
        type: Date
    },
    enabled: {
        type: PlanEnabledSchema,
        required: true,
        default: {}
    },
    shared: {
        type: Boolean,
        required: true,
        default: false
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
        type: [PlanUpcomingResourcesSchema],
        required: true,
        default: []
    }
};
