import { Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image?: string;
  location?: string;
  portfolio?: string;
  reputation: number;
}

// 2. Create a Schema corresponding to the document interface.

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String, required: false },
    image: { String, required: false },
    locatioin: { type: String, required: false },
    portfolio: { type: String, required: false },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 3. Create a Model.
const User = models?.user || model<IUser>("User", userSchema);

export default User;
