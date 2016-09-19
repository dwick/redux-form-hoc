import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import ReduxField from './ReduxField';

import './App.css';

const REDUX_FORM_KEY = 'foo';

class App extends Component {
  render() {
    return (
      <ReduxField name='foo' label='Foo' formKey={ REDUX_FORM_KEY } />
    );
  }
}

export default reduxForm({ form: REDUX_FORM_KEY, initialValues: { foo: 'bar '} })(App);
