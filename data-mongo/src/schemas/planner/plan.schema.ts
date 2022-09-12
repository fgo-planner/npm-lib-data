import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { Plan } from '../../types';
import { PlanValidators, ValidationStrings } from '../../validators';
import { PlanServantSchema } from './plan-servant.schema';
import { PlanUpcomingResourcesSchema } from './plan-upcoming-resources.schema';

/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
export const PlanEnabledSchema = new Schema<Plan['enabled']>({
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
 * Mongoose schema definition for the `Plan` type.
 */
export const PlanSchemaDefinition: SchemaDefinition<Plan> = {
    accountId: {
        type: ObjectId,
        required: true,
        index: true
    },
    groupId: {
        type: ObjectId,
        sparse: true
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
    targetDate: {
        type: Date,
        // TODO Add limits/validators
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
    upcomingResources: {
        type: [PlanUpcomingResourcesSchema],
        required: true,
        default: []
    }
};
