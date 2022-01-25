import {render, screen} from '@testing-library/react';

import Info from '../components/Info';

describe('Info component', () => {
  it('Info renders', () => {
    render(<Info/>);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('GitHub User Info')).toBeInTheDocument();
  });

  it('Info snapshot', () => {
    const info = render(<Info/>);
    
    expect(info).toMatchSnapshot();
  });
});