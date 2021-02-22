import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';

const schema = new SimpleSchema({
  betterNumber: {
    type: Number,
    min: 5,
    max: 50,
  },
  friends: { type: Array },
  'friends.$': Object,
  'friends.$.name': { type: String, min: 3 },
  'friends.$.age': { type: Number, min: 0, max: 150 },
});

export const bridge = new SimpleSchema2Bridge(schema);
