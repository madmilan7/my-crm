import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  createdAt?: Date;
  lastLogin?: Date;
  activityLogs?: Array<{ action: string; timestamp: Date }>;
  accountStatus?: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    role: { type: String, default: "user" },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    activityLogs: [
      {
        action: { type: String },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    accountStatus: { type: String, default: "active" },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
