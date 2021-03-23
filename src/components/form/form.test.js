import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form.js';

describe('testing form component', () => {
  it('Needs to run a function on button click', async () => {
    let handleUpdate = jest.fn();

    render(<Form updatePeople={handleUpdate} />);

    let button = screen.getByText('Click to get People');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    // handy helper for awaiting funcion calls within components.
    await waitFor(() => expect(handleUpdate).toHaveBeenCalled());
  });
});
