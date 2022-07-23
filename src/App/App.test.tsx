import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
	it('App renders', () => {
		render(<App />);

		expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getByText('Find:')).toBeInTheDocument();
	});

	it('typing in search textbox', () => {
		render(<App />);

		expect(screen.queryByDisplayValue(/irs/)).toBeNull();

		const input = screen.getByRole('textbox');

		userEvent.type(input, 'irs');

		expect(screen.getByText('first')).toBeInTheDocument();
	});

	it('search filter is working', () => {
		render(<App />);

		expect(screen.getByText('first')).toBeInTheDocument();
		expect(screen.getByText('second')).toBeInTheDocument();

		const input = screen.getByRole('textbox');

		userEvent.type(input, 'irs');

		expect(screen.queryByText('second')).toBeNull();
		expect(screen.getByText('first')).toBeInTheDocument();
	});

	it('App snapshot', () => {
		const view = render(<App />);

		expect(view).toMatchSnapshot();
	});
});
