import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [form, setForm] = useState ({})
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { value, name } = event.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form
    if(username === "admin" && password === '123'){
      navigate("/main")
    } else {
      alert("404")
    }
  }

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  className="form-control my-2"
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control my-2"
                />
                <Button type="submit" variant="contained" className="btn btn-success">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
