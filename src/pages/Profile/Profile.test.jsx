import React from 'react';
import { act, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile from './Profile';
import constants from '../../constants/constants.json';

const {
  profileTitle,
} = constants;

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container = null;
});
describe('Given a Profile Page', () => {
  test('Then should render a h3', () => {
    act(() => {
      render(
        <Router history={createMemoryHistory()}>
          <Profile />
        </Router>, container,
      );
    });
    const title = document.querySelector('h3');
    expect(title.innerHTML).toBe(profileTitle);
  });
});
