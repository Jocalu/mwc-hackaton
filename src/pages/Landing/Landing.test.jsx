import React from 'react';
import { act, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Landing from './Landing';
import constants from '../../constants/constants.json';

const {
  joinCommunity,
} = constants;

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container = null;
});
describe('Given a Landing Page', () => {
  test('Then should render a h2', () => {
    act(() => {
      render(
        <Router history={createMemoryHistory()}>
          <Landing />
        </Router>, container,
      );
    });
    const title = document.querySelector('h2');
    expect(title.innerHTML).toBe(joinCommunity);
  });
});
