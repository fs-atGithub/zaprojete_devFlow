import { Schema, Types, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}

// 2. Create a Schema corresponding to the document interface.

const AccountSchema = new Schema<IAccount>(
  {
    // Define the schema here
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: false },
    password: { type: String, required: false },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Create a Model.
const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
