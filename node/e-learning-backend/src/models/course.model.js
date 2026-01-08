import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: String,       // for text-based topics
    videoUrl: String,      // for video-based topics
    duration: String,
  },
  { _id: true }
);

const sectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    topics: [topicSchema],
  },
  { _id: true }
);

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    freeCourse: {
      type: Boolean,
      default: false,
    },
    price: {
      amount: Number,
      currency: String,
    },
    sections: [sectionSchema],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
