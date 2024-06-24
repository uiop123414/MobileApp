// __tests__/MobileApp.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Welcome from '../app/index';

test('Check wheater sign up btn works', () => {
  const { getByText } = render(<Welcome />);
  
  fireEvent.press(getByText('Conitnue with Email')); // Skip onboarding screen

  fireEvent.press(getByText('Signup'));// push sign up btn
  
  expect(getByText('Sign Up to Aora')).toBeTruthy();
});