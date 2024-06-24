// __tests__/MobileApp.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Welcome from '../app/index';

test('Check wheater sign up btn works', () => {
  const { getByText } = render(<Welcome />);
  
  expect(getByText('Conitnue with Email')).toBeTruthy();
});