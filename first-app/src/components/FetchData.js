import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function FetchData() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchData