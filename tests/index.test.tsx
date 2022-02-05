import {render, screen} from '@testing-library/react';
import {useSession} from 'next-auth/react';
import Home from '../src/pages/index';
jest.mock('next-auth/react');

describe('Home', () => {
  it('renders a heading', () => {
    const mockSession = {
      expires: '100',
      user: {email: 'test@test.com', name: 'Test', image: 'None'}
    };
    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i
    });

    expect(heading).toBeInTheDocument();
  });
});
