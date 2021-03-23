import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header.js';

describe('Testing the header component', () => {
  it('displays a title on initial render', async () => {
    render(<Header title="Header!!" />);

    expect(screen.getByText('Header!!')).toBeInTheDocument();
  });

  it('can change on button click', async () => {

    let title = 'Header!!';
    let changeTitle = (string) => {
      title = string;
    }
    let { rerender } = render(<Header changeTitle={changeTitle} title={title} />)

    let button = await screen.findByText('Change title');

    fireEvent.click(button);

    rerender(<Header changeTitle={changeTitle} title={title} />);
    expect(screen.getByText('changed!!')).toBeInTheDocument();
  });
});
