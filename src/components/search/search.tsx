import classes from './search.module.css';
import cn from 'classnames';

type Props = {
	value: string;
	onChange: (value: string) => void;
	children?: string;
	placeholder?: string;
};

export const Search = ({
	value,
	onChange,
	children = 'Search',
	placeholder = 'search...',
}: Props) => {
	const inputClass = cn({
		[classes.input]: true,
		[classes.filled]: value.length,
	});

	return (
		<label className={classes.lable}>
			{children}
			<input
				type='text'
				value={value}
				onChange={(event) => onChange(event.target.value)}
				className={inputClass}
				placeholder={placeholder}
			/>
		</label>
	);
};
