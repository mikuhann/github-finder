import { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
function UserSearch() {
  const [search, setSearch] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = ({ target: { value }}) => {
    setSearch(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === '') {
      return alert('Search text is empty');
    }

    searchUsers(search);

    setSearch('');
  }

  const handleClear = () => {
    clearUsers();
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder='Search'
                onChange={handleChange}
                value={search}
              />
              <button
                type='submit'
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={handleClear}
            className="btn btn-ghost btn-lg"
          >Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
