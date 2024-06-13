import  { useState, useEffect } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch danh sách người dùng từ API
  useEffect(() => {
    fetch('https://test-dbonline-y5jx.vercel.app/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Xử lý thay đổi ô tìm kiếm
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  // Lọc danh sách người dùng dựa trên từ khóa tìm kiếm
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4   ">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-80 px-10 py-2 text-sm text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input id={`checkbox-table-search-${user.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`checkbox-table-search-${user.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
                </td>
                <td className="px-6 py-4">
                  {user.username}
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {user.createdAt}
                </td>
                <td className="px-6 py-4">
                  {user.updatedAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
