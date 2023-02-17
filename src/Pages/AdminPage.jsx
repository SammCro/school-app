import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

export default function AdminPage() {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        //const users = await axios.get("http://localhost:3003/users");
        const usersData = [{id: 1, name: "John", username: "john", email: "ilk.samet@gmail.com"},
        {id: 2, name: "John", username: "john", email: "arthur@gmail.com"}]
        setUsers(usersData);
    }

  return (
    <div className="container">
      {" "}
      <table className="table border shadow mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button  className="btn btn-danger btn-default mx-2">
                  Reset Password
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
