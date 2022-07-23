import './App.css';
import { useState } from 'react';
import { List } from './components/list';
import { Search } from './components/search';

const data = ['first', 'second', 'third'];

function App() {
	const [search, setSearch] = useState('');

	return (
		<div className='App'>
			<div className='App-header'>
				<Search value={search} onChange={setSearch}></Search>
				<List list={data} />
			</div>
		</div>
	);
}

export default App;
