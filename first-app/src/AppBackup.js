import React, { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    name: ''
  })
  const handleOnchange = (event) => {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (document.userForm.firstname.value == '') {
      alert('firstname required')
      return
    }

    setForm({
      name: `${form.firstname} ${form.lastname}`,
      firstname: '',
      lastname: ''
    })
    document.userForm.firstname.focus()

  }
  return (
    <div className="p5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">Learn React Function</div>
              <div className="card-body">
                <form name="userForm" onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input onChange={handleOnchange} value={form.firstname} type="text" name="firstname" id="firstname" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input onChange={handleOnchange} value={form.lastname} type="text" name="lastname" id="lastname" className="form-control" />
                  </div>
                  <div className="d-grid">
                    <input type="button" onClick={handleSubmit} value="Submit" className="btn btn-primary" />
                  </div>
                </form>
              </div>
              <div className="card-footer">{form.name ? `Hello, ${form.name}` : `Hi, Good Morning!`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App