// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a club item using TypeScript interfaces
export interface IClub {
  name: string;
  clubType: string;
}

// Merging IClub interface with mongoose's Document interface to create 
// a new interface that represents a club document in MongoDB
export interface IClubDocument extends IClub, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the club document, specifying the types 
// and constraints
const clubSchema = new mongoose.Schema<IClubDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    clubType: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the club document
const Club: Model<IClubDocument> =
  mongoose.models?.Club || mongoose.model("Club", clubSchema);

export default Club;