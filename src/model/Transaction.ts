import mongoose from 'mongoose'
import { TRANSACTION_STATUS } from '../config/constants'


const TransacSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      unique: true
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
      default: "",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Transfer', 'Topup']
    },
    initiatedAt: {
      type: Date,
      default: Date.now
    },
    effectiveAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

const TransactionModel = mongoose.model("Transaction", TransacSchema);
export { TransactionModel as default };