// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a event item using TypeScript interfaces
export interface IEvent {
  name: string;
  eventDate: Date;
}

// Merging IEvent interface with mongoose's Document interface to create 
// a new interface that represents a event document in MongoDB
export interface IEventDocument extends IEvent, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the event document, specifying the types 
// and constraints
const eventSchema = new mongoose.Schema<IEventDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the event document
const Event: Model<IEventDocument> =
  mongoose.models?.Event || mongoose.model("Event", eventSchema);

export default Event;