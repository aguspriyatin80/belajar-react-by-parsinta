import React from 'react'
import axios from 'axios'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            name: '',
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()

        if (document.userForm.firstname.value == '') {
            alert('firstname required')
            document.userForm.firstname.focus()
            return
        } else if (document.userForm.lastname.value == '') {
            alert('lastname required')
            document.userForm.lastname.focus()
            return
        }

        this.setState({
            name: `${this.state.firstname} ${this.state.lastname}`
        }
        )

        this.state.firstname = ''
        this.state.lastname = ''
        document.userForm.firstname.focus()
    }
    render() {
        // const user = this.state.user
        const { name } = this.state // baris di atas bisa ditulis seperti ini
        return (
            <div>
                <div className="p-5 custom-centered">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3>">
                                <div className="card" >
                                    <div className="card-header">
                                        Learn React.js
                                    </div>
                                    <div className="card-body">
                                        <form name="userForm" onSubmit={this.submitHandler}>
                                            <div className="mb-6">
                                                <label htmlFor="firstname" className="form-label mt-6">Firstname</label>
                                                <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id="firstname" className="form-control" />
                                            </div>
                                            <div className="mb-6 mt-2">
                                                <label htmlFor="lastname" className="form-label">Lastname</label>
                                                <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id="lastname" className="form-control" />
                                            </div>
                                            <div className="d-grid mt-4">
                                                <button type="submit" className="btn btn-primary">Show</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        {name ? `Hello, ${name}.` : 'Hi, Guest!'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default App