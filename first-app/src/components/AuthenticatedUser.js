import React, { useContext } from 'react';
import { UserContext } from '../views/context/User';
import '../custom.css'
function AuthenticatedUser(props) {
    const { user, loading } = useContext(UserContext)
    return (
        <div className="text-nowrap">
            {
                loading ? <div>Loading . . . </div> : <div>{user.name}</div>
            }

        </div>
    )
}

export default AuthenticatedUser