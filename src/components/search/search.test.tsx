import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './search';

const onChange = jest.fn();

describe('Search component', () => {
	it('search renders', () => {
		render(
			<Search value='' onChange={onChange}>
				Find:
			</Search>
		);

		expect(screen.getByText(/find/i)).toBeInTheDocument();
	});

	it('search renders without children', () => {
		render(<Search value='' onChange={onChange} />);

		expect(screen.getByText(/search/i)).toBeInTheDocument();
	});

	it('search renders without placeholder', () => {
		render(<Search value='' onChange={onChange} />);

		expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
	});

	it('search renders with custom placeholder', () => {
		render(<Search value='' onChange={onChange} placeholder='find post' />);

		expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
	});

	it('onChange works', () => {
		render(<Search value='' onChange={onChange} />);
		userEvent.type(screen.getByRole('textbox'), 'React');

		expect(onChange).toHaveBeenCalledTimes(5);
	});

	it('dinamyc input styles works', () => {
		render(<Search value='abc' onChange={onChange} />);

		expect(screen.getByRole('textbox')).toHaveClass('input');
		expect(screen.getByRole('textbox')).toHaveClass('filled');
	});

	it('Search snapshot', () => {
		const view = render(
			<Search value='' onChange={onChange}>
				Find:
			</Search>
		);

		expect(view).toMatchSnapshot();
	});
});
