import SimpleSchema from 'simpl-schema';
import { SimpleSchema2Bridge } from 'uniforms-bridge-simple-schema-2';

const schema = new SimpleSchema(
  {
    options: { type: Array, label: 'Option Groups' },
    'options.$': String,
  },
  { requiredByDefault: false },
);

export const bridge = new SimpleSchema2Bridge(schema);
