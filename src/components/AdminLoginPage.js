
import React, {useState} from 'react'
import {  useNavigate } from 'react-router-dom';
function AdminLoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const users = [{'username': 'admin', 'password': '1234'}];

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (username === users[0].username && password === users[0].password) {
            navigate('/list.component');
        } else {
            alert('Username or password is incorrect. Please enter admin username and password.');
        }
        console.log()
    }
  
    return (
        <div align='center'>
            <div className="row wrapper ">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Username</label>
                            <input
                                type="text"
                                id="email_field"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                               
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              
                            />
                        </div>

                        <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLoginPage
