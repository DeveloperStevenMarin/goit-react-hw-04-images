import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };
  return (
    <header className="searchbar">
      <form role="search" className='form'>
        <label htmlFor="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          autoComplete="off"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className="search__btn" onClick={handleSubmit}>Go!</button>
      </form>
    </header>
    
  );
}
