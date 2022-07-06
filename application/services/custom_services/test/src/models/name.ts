
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const nameSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   address: { type: Schema.Types.String, ref: 'address' }
})

const nameModel = mongoose.model('name', nameSchema, 'name');
export default nameModel;
