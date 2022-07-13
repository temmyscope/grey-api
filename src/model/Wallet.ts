import mongoose from '../config/db.config';

const WalletSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	balance: {
		type: Number,
		required: true,
		default: 0
	},
}, {
	collection: 'WalletStore',
  timestamps: true
});

WalletSchema.index({ email: 1 });

const WalletModel: any = mongoose.model('Wallet', WalletSchema);


export { WalletModel };