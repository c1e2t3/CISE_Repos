import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('显示计数和增加按钮', () => {
  render(<App />);
  const countElement = screen.getByText(/Count:/i);
  expect(countElement).toBeInTheDocument();
  const buttonElement = screen.getByText(/Increment count/i);
  expect(buttonElement).toBeInTheDocument();
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});