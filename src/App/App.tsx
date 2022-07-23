import './App.css';
import { useEffect, useState } from 'react';
import { List } from '../components/list';
import { Search } from '../components/search';

const data = ['first', 'second', 'third'];

function App() {
	const [search, setSearch] = useState('');
	const [items, setItems] = useState(data);

	useEffect(() => {
		setItems(
			data.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
		);
	}, [search]);

	return (
		<div className='App'>
			<div className='App-header'>
				<Search value={search} onChange={setSearch}>Find:</Search>
				<List list={items} />
			</div>
		</div>
	);
}

export default App;
