import mongoose from 'mongoose';
import { TRANSACTION_STATUS } from '../config/constants'

const TopupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  reference: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(TRANSACTION_STATUS),
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  currency: {
    type: String,
    default: "NGN",
    required: true,
  },
  metadata: {
    type: Object,
    default: null
  }
},
  { timestamps: true }
);

const TopupModel = mongoose.model("Topup", TopupSchema);

export default TopupModel;
