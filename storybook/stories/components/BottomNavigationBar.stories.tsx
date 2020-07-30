import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BottomNavigationBar } from '../../../src/components';
import { Alert } from 'react-native';

storiesOf('BottomNavigationBar', module).add('default', () => <BottomNavigationBar />);
