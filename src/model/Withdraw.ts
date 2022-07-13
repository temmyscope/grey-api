import mongoose from 'mongoose';
import { TRANSACTION_STATUS } from '../config/constants'

const WithdrawSchema = new mongoose.Schema({
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
  bankName: {
    type: String,
    default: '',
  },
  accountNumber: {
    type: String,
    default: '',
  },
  bankCode: {
    type: String,
    default: '',
  },
  bankAccountName: {
    type: String,
    default: '',
  },
},
{
  timestamps: true 
});

const WithdrawModel = mongoose.model("Withdraw", WithdrawSchema);

export default WithdrawModel
