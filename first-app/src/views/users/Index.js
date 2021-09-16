import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
export default function Index() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try {
            let response = await Axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="container">
            <div className="row">

                {
                    users.map((user, index) => {
                        return (
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-header">{user.name}</div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <a href={`http://${user.website}`} target="_blank">{user.website}</a>
                                        </div>
                                        <div className="mb-4">
                                            {user.username}
                                        </div>

                                        <NavLink className="btn btn-primary" to={`/users/${user.id}`}>View profile</NavLink>

                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}
