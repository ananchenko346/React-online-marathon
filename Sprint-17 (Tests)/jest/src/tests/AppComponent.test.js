import renderer from 'react-test-renderer';

import App from '../components/App/index';

describe('review App', () => {
  it('render page', () => {
    const prop = renderer.create(<App />);
    expect(prop.toJSON()).toMatchSnapshot();
  });
});

