import mongoose from '../config/db.config';
//import jwt from "jsonwebtoken";
//import { CustomError } from "../utility";
//import statusCode from "../constant/statusCode";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: ''
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		default: ''
	},
 	createdAt: {
 		type: Date,
 		default: Date.now
 	},
 	updatedAt: {
 		type: Date,
 		default: Date.now
 	}
}, {
	collection: 'ComputationStore'
});

/**
userSchema.methods.generateAuthToken = function (saveToken, ip) {
  const token = jwt.sign(
    {
      _id: this._id.toString(),
      email: this.email,
      role: this.role,
      timestamps: Date.now(),
      ip,
    },
    process.env.JWT_SECRET,
    { expiresIn: (saveToken === true) ? "172800m" : "60m" }
  );
  return token;
};

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await UserModel.findOne({ email }).populate({
    path: "business shopper",
    populate: {
      path: "cards",
      model: "Card",
    },
  });
  if (!user) throw new CustomError("User not found.", statusCode.NOT_FOUND);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    throw new CustomError(
      "Incorrect email or password.",
      statusCode.VALIDATION_ERROR
    );
  return user;
};

	
	//hashing password
	userSchema.pre("save", function (next) {
		if (this.isModified("password")) {
			const salt = bcrypt.genSaltSync(8);
			this.password = bcrypt.hashSync(this.password, salt);
		}
		next();
	});
	
	userSchema.pre("save", function (next) {
		if (this.isModified("pin")) {
			const salt = bcrypt.genSaltSync(8);
			this.pin = bcrypt.hashSync(this.pin, salt);
		}
		next();
	});
 */

UserSchema.index({ email: 1 });

const UserModel: any = mongoose.model('User', UserSchema);


export { UserModel };