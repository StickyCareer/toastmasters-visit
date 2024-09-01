// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a location item using TypeScript interfaces
export interface ILocation {
  address: string;
  country: string;
}

// Merging ILocation interface with mongoose's Document interface to create 
// a new interface that represents a location document in MongoDB
export interface ILocationDocument extends ILocation, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the location document, specifying the types 
// and constraints
const locationSchema = new mongoose.Schema<ILocationDocument>(
  {
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the location document
const Location: Model<ILocationDocument> =
  mongoose.models?.Location || mongoose.model("Location", locationSchema);

export default Location;