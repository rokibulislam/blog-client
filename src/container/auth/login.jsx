import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/user'

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [state, setState] = useState({
        email: '',
        password: '',
    })
    
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email: state.email, password: state.password }));
        navigate(from, { replace: true });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label> Email </label>
                <input type="text" name="email" className="form-control" value={state.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
                <label> Password </label>
                <input type="password" name="password" className="form-control" value={state.password} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <button type='submit' className="button button-primary"> Log In </button>
            </div>
        </form>
    )
}

export default Login;