import React from 'react';
// import { AutoForm, ListField, SubmitField } from 'uniforms-unstyled';
// import { AutoForm } from 'uniforms-antd';
// import { AutoForm } from 'uniforms-bootstrap3';
import { AutoForm, ListField, SubmitField } from 'uniforms-bootstrap4';
// import { AutoForm } from 'uniforms-material';
// import { AutoForm } from 'uniforms-semantic';

// import { bridge as schema } from './schema/json-schema';
// import { bridge as schema } from './schema/graphql-schema';
import { bridge as schema } from './schema/simple-schema-2';

export function App() {
  return (
    <AutoForm schema={schema}>
      <ListField name="options" addIcon="+" initialCount={4} />
      <SubmitField />
    </AutoForm>
  );
}
