import { ObjectId } from 'bson';
import { SchemaDefinition } from 'mongoose';
import { PlanGroup } from '../../types';

/**
 * Mongoose schema definition for the `PlanGroup` type.
 */
export const PlanGroupSchemaDefinition: SchemaDefinition<PlanGroup> = {
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
    }
};
