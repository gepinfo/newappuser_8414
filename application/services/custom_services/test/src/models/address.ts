
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const addressSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   address: String
})

const addressModel = mongoose.model('address', addressSchema, 'address');
export default addressModel;
