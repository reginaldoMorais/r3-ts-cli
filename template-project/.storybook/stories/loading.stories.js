import '../../src/app/assets/styles/scss/main.scss';

import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from '../../src/app/view/components/loading/Loading.tsx';

storiesOf('Loading', module).add('with loading', () => <Loading isLoading={true} />);
