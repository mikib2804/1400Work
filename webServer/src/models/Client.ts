import mongoose, { Schema, InferSchemaType } from "mongoose";

// Schema
const clientSchema = new Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

export type Client = InferSchemaType<typeof clientSchema>;

export const ClientModel = mongoose.model("Client", clientSchema);
