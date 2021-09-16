import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function FetchSatuData() {
    const [user, setUser] = useState([])
    const [identifier, setIdentifier] = useState(1)
    const [loading, setLoading] = useState(false);
    const getUser = async () => {
        setLoading(true)
        try {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [identifier])
    const handleOnChange = (e => setIdentifier(e.target.value))

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <input type="text" name="id" onChange={handleOnChange} value={identifier} />
                        {loading ? <div>loading ...</div> :
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
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                        </tr>

                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchSatuData