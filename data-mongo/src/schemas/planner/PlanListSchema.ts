import { PlanType } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { PlanList, PlanListItem } from '../../types';
import { PlanValidators, ValidationStrings } from '../../validators';

/**
 * Mongoose schema for the `PlanListBaseItem` type.
 */
export const PlanListBaseItemSchema = new Schema<PlanListItem>({
    type: {
        type: String,
        enum: Object.values(PlanType),
        required: true
    },
    refId: {
        type: ObjectId,
        required: true
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `PlanListItem` type.
 */
export const PlanListItemSchema = new Schema<PlanListItem>({
    type: {
        type: String,
        enum: Object.values(PlanType),
        required: true
    },
    refId: {
        type: ObjectId,
        required: true
    },
    children: {
        type: [PlanListBaseItemSchema],
        /**
         * Have to specify `undefined` here because for some reason is automatically
         * defaulting to an empty array.
         */
        default: undefined
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `PlanList` type.
 */
export const PlanListSchemaDefinition: SchemaDefinition<PlanList> = {
    accountId: {
        type: ObjectId,
        required: true,
        unique: true
    },
    list: {
        type: [PlanListItemSchema],
        required: true,
        default: [],
        validate: [
            {
                validator: PlanValidators.planListPlanItemsHaveNoChildren,
                message: ValidationStrings.PlanListPlanItemContainsChildren
            },
            {
                validator: PlanValidators.planListGroupItemHaveChildren,
                message: ValidationStrings.PlanListGroupItemMissingChildren
            },
            {
                validator: PlanValidators.planListGroupItemChildrenValid,
                message: ValidationStrings.PlanListGroupItemInvalid
            }
        ]
    }
};
