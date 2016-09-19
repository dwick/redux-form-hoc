import { connect } from 'react-redux';
import React, { PropTypes as T } from 'react';
import { getFormValues, Field as ReduxFormField } from 'redux-form';

let RenderField = ({
  input,
  values,
  label = '',
}) => {
  // do some stuff with values
  console.log('do something interesting:', values);

  return (
    <div className='field'>
      <label htmlFor={ input.name }>{ label }</label>
      <input { ...input } />
    </div>
  );
};

RenderField = connect(
  (state, props) => ({
    values: getFormValues(props.formKey)(state),
  })
)(RenderField);

RenderField.propTypes = {
  input: T.shape({
    name: T.string.isRequired,
  }),
  label: T.string.isRequired,
  values: T.object.isRequired,
};

const ReduxField = ({
  name,
  formKey,
  type = 'text',
  component = RenderField,
  children = null,
  ...props,
}) => (
  React.createElement(ReduxFormField, {
    type,
    name,
    component,
    formKey,
    ...props,
  }, children)
);

ReduxField.propTypes = {
  formKey: T.string.isRequired,
  name: T.string.isRequired,
  children: T.any,
  component: T.node,
  type: T.string,
};

export default ReduxField
