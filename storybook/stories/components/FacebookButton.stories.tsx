import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { FacebookButton } from '../../../src/components';
import { Alert } from 'react-native';

storiesOf('FacebookButton', module).add('default', () => <FacebookButton onPress={() => Alert.alert('wow')} />);
