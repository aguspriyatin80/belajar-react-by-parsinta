import React from 'react'
import { UserProvider } from './context/User'
import AuthenticatedUser from '../components/AuthenticatedUser'
export default function Home() {
    return (
        <div className="container-fluid">

            <div className="row">
                <UserProvider>
                    <AuthenticatedUser />
                </UserProvider>
            </div>

        </div>
    )
}
