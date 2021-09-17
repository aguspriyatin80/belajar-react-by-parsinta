import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'
const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const getUser = async () => {
        setLoading(true)
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/users/1')
            setUser(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }