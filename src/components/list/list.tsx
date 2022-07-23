type Props = {
	list?: string[];
};

export const List = ({ list = [] }: Props) => {
	if (!list.length) {
		return null;
	}

	return (
		<ul>
			{list.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};
