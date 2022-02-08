import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { register } from '../../store/slices/user' 
import Button from '../../components/button'

const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        // confirmPassword: '',
    })

    const dispatch = useDispatch()

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
          ...prevState,
          [name]: value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        dispatch(register({
            username: state.username,
            email: state.email, 
            password: state.password,
            // confirmPassword: state.confirmPassword
        }))

        navigate(from, { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <div className="form-group">
                <label> Username </label>
                <input type="text" name="username" className="form-control" value={state.username} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label> Email </label>
                <input type="text" name="email" className="form-control" value={state.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
                <label> Password </label>
                <input type="password" name="password" className="form-control" value={state.password} onChange={handleChange} required />
            </div>

            {/* <div className="form-group">
                <label> Confirm Password </label>
                <input type="password" name="confirmPassword" className="form-control" value={state.confirmPassword} onChange={handleChange} required />
            </div> */}

            <div className='form-group'>
                <Button type="submit" label="Register" variant="primary" />
            </div>
        </form>
    )
}

export default Register;