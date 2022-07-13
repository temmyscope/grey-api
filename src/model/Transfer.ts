import mongoose from 'mongoose';
import { TRANSACTION_STATUS } from '../config/constants'

const TransferSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  recipient: {
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
},
  { timestamps: true }
);

const TransferModel = mongoose.model("Transfer", TransferSchema);

export default TransferModel
