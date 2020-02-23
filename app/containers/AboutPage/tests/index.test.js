import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import AboutPage from '../index';

describe('<AboutPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <AboutPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
