import { ObjectId } from 'bson';
import mongoose, { Document, Model, ProjectionFields, Schema, UpdateQuery } from 'mongoose';
import { UserSchemaDefinition } from '../../schemas';
import { BasicUserDocument, UserDocument } from '../../types';


//#region Projections

const BasicUserProjection = {
    username: 1,
    email: 1
} as const satisfies ProjectionFields<BasicUserDocument>;

type UserPreferencesDocument = Pick<UserDocument, '_id' | 'userPrefs'>;

const UserPreferencesProjection = {
    userPrefs: 1
} as const satisfies ProjectionFields<UserPreferencesDocument>;

//#endregion


//#region Mongoose document types

export type UserDbDocument = UserDocument & Document<ObjectId, any, UserDocument>;

export type BasicUserDbDocument = BasicUserDocument & Document<ObjectId, any, BasicUserDocument>;

type UserPreferencesDbDocument = UserPreferencesDocument & Document<ObjectId, any, UserPreferencesDocument>;

//#endregion


//#region Static function implementations

function findBasicById(this: Model<UserDocument>, id: ObjectId) {
    return this.findById<BasicUserDbDocument>(id, BasicUserProjection);
}

function setEnabledStatus(this: Model<UserDocument>, id: ObjectId, status: boolean) {
    const update: UpdateQuery<UserDocument> = {
        $set: {
            active: status
        }
    };
    return this.updateOne<UserDbDocument>({ _id: id }, update, { new: true });
}

function setAdminStatus(this: Model<UserDocument>, id: ObjectId, isAdmin: boolean) {
    const update: UpdateQuery<UserDocument> = {};
    if (isAdmin) {
        update.$set = { admin: true };
    } else {
        update.$unset = { admin: null };
    }
    return this.updateOne<UserDbDocument>({ _id: id }, update, { new: true });
}

function getUserPreferences(this: Model<UserDocument>, id: ObjectId) {
    return this.findById<UserPreferencesDbDocument>(id, UserPreferencesProjection);
}

//#endregion


/**
 * Mongoose schema for the `UserDocument` type.
 */
const UserSchema = new Schema<UserDocument>(UserSchemaDefinition, {
    timestamps: true,
    minimize: false
});

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findBasicById,
    setEnabledStatus,
    setAdminStatus,
    getUserPreferences
} as const;

// Add the static properties to the schema
Object.assign(UserSchema.statics, Statics);

// Add additional options
UserSchema.set('toJSON', {
    versionKey: false
});

type UserModel = Model<UserDocument> & typeof Statics;

export const UserModel = mongoose.model<UserDocument, UserModel>(
    'User',
    UserSchema,
    'Users'
);
