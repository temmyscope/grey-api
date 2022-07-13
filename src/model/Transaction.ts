import mongoose from 'mongoose'
import { TRANSACTION_STATUS, TRANSACTION_TYPE } from '../config/constants'

const TransactionSchema = new mongoose.Schema(
  {
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
    type: {
      type: String,
      required: true,
      enum: Object.values(TRANSACTION_TYPE)
    }
  },
  { timestamps: true },
);

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

export default TransactionModel;