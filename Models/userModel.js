import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
          validator: function(value) {
              return value.length >= 5 && value.length <= 10;
          },
          message: 'User name must be between 5 and 10 characters'
      }
    },
    password: {
      type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                return value.length >= 8;
            },
            message: 'Password must be between 8 and 15 characters'
        }
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,

      

      validate: {
          validator: function (value) {

              return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
          },
          message: 'Invalid email format'
      }
    },
    
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
            return value.length == 10;
        },
        message: 'Phone Number must be 10 of digits'
    }
    }
}
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
