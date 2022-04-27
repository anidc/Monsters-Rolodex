import './App.css';

import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [title, setTitle] = useState("Monsters Rolodex")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))

  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value
    setTitle(titleFieldString)
  }

  return (
    <div className="App">
      <h1 className='title'>{title}</h1>
      <SearchBox placeholder="Set title" onChangeHandler={onTitleChange} className="search-box" />
      <br />
      <SearchBox placeholder="Search Monsters..." onChangeHandler={onSearchChange} className="search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}
export default App;
