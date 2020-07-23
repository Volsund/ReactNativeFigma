import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { GoogleButton } from '../../../src/components';
import { Alert } from 'react-native';

storiesOf('GoogleButton', module).add('default', () => <GoogleButton onPress={() => Alert.alert('wow')} />);
