import {render} from '@testing-library/react';
import Home from '../src/pages/index';
import {useSession} from 'next-auth/react';
jest.mock('next-auth/react');

it('renders homepage unchanged', () => {
  const mockSession = {
    expires: '100',
    user: {email: 'test@test.com', name: 'Test', image: 'None'}
  };
  (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  const {container} = render(<Home />);
  expect(container).toMatchSnapshot();
});
