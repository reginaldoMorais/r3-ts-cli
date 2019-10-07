import '../../src/app/assets/styles/scss/main.scss';

import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../Provider.tsx';
import Toastr from '../../src/app/view/shared/toastr/Toastr.tsx';

storiesOf('Toastr', module)
  .add('with info', () => (
    <Provider>
      <Toastr title="Info" message="Info text" />
    </Provider>
  ))
  .add('with success', () => (
    <Provider>
      <Toastr title="Success" message="Success text" type="success" />
    </Provider>
  ))
  .add('with warning', () => (
    <Provider>
      <Toastr title="Warning" message="Warning text" type="warning" />
    </Provider>
  ))
  .add('with error', () => (
    <Provider>
      <Toastr title="Error" message="Error text" type="error" />
    </Provider>
  ));
