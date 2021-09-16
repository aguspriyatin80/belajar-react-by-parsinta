import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
export default function ShowUser() {
    const [user, setUser] = useState([])
    const { identifier } = useParams()
    const getUser = async () => {
        try {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        getUser()
    }, [identifier])
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">{user.username}</div>
                <div className="card-body">{user.phone}</div>
                <div className="card-body">{user.website}</div>
                <div className="card-body">{user.email}</div>
            </div>

        </div>
    )
}
