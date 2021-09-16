import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-4">
                    <div className="text-center mb-4">
                        Back to <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">password</label>
                                    <input type="password" name="password" id="password" className="form-control" />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                    <NavLink to="/register">Register</NavLink>
                                </div>
                                {/* <div className="row">
                                    <div className="d-flex justify-content-left">
                                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                                    </div>
                                    <div className="d-flex justify-content-right">
                                        <NavLink to="/register">Register</NavLink>
                                    </div>
                                </div> */}


                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
