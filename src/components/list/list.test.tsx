import { screen, render } from '@testing-library/react';
import { List } from './list';

describe('List component', () => {
	const data = ['first', 'second', 'third'];

	it('List renders', () => {
		render(<List list={data} />);
		const first = screen.getByText('first');
		const list = screen.getByRole('list');

		expect(list).toBeInTheDocument();
		expect(first).toBeInTheDocument();
	});

	it('List renders without data', () => {
		render(<List />);
		const list = screen.queryByRole('list');

		expect(list).toBeNull();
	});

	it('List snapshot', () => {
		const view = render(<List list={data} />);

		expect(view).toMatchSnapshot();
	});

	it('List empty snapshot', () => {
		const view = render(<List />);

		expect(view).toMatchSnapshot();
	});
});
