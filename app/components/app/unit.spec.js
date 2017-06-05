import React from 'react';
import { shallow, expect } from '../../../test/specs_helper';

import App from './';
import Header from '../header';

describe('App', () => {
  it('renders itself', () => {
    const app = shallow(<App />);

    expect(app).to.have.length(1);
  });
});
