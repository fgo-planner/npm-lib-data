import { UserPreferences } from '@fgo-planner/data-core';
import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { UserSchemaDefinition } from '../../schemas';
import { BasicUser, User } from '../../types';

export type UserDocument = User & Document<ObjectId, any, User>;
export type BasicUserDocument = BasicUser & Document<ObjectId, any, BasicUser>;

const BasicUserProjection = {
    username: 1,
    email: 1
};

type UserModel = Model<User> & {

    findBasicById: (id: ObjectId) => Query<BasicUserDocument | null, BasicUserDocument>;

    setEnabledStatus: (id: ObjectId, status: boolean) => void;

    setAdminStatus: (id: ObjectId, isAdmin: boolean) => void;

    getUserPreferences: (id: ObjectId) => Promise<UserPreferences | null>;

};

//#region Static function implementations

const findBasicById = function (
    this: UserModel,
    id: ObjectId
): Query<BasicUserDocument | null, BasicUserDocument> {
    return this.findById(id, BasicUserProjection);
};

const setEnabledStatus = function (
    this: UserModel,
    id: ObjectId,
    status: boolean
): void {
    this.updateOne({ _id: id }, { active: status }, { new: true });
};

const setAdminStatus = function (this: UserModel,
    id: ObjectId,
    isAdmin: boolean
): void {
    const update: any = {};
    if (isAdmin) {
        update.$set = { admin: true };
    } else {
        update.$unset = { admin: null };
    }
    this.updateOne({ _id: id }, update, { new: true });
};

const getUserPreferences = async function (
    this: UserModel,
    id: ObjectId
): Promise<UserPreferences | null> {
    const doc = await this.findById(id, { userPrefs: 1 });
    if (!doc) {
        return null;
    }
    return doc.userPrefs;
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findBasicById,
    setEnabledStatus,
    setAdminStatus,
    getUserPreferences
};

/**
 * Mongoose schema for the `User` type.
 */
const UserSchema = new Schema<User>(UserSchemaDefinition, {
    timestamps: true,
    minimize: false
});

// Add the static properties to the schema.
Object.assign(UserSchema.statics, Statics);

UserSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const UserModel = mongoose.model<User, UserModel>('User', UserSchema, 'Users');
