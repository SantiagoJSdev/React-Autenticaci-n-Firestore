
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { uiError, uiRemoveError } from '../../actions/uiError';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const state = useSelector(state=>state)

    // console.log(state.ui.msgError)
    const dispatch = useDispatch();

const [values, handleInputChange] = useForm({
    name:'hernando',
    email: 'hernando@gmail.com',
    password: '123456',
    password2:'123456'
})

const {name, email, password,password2} = values;


const handleRegister = (e) =>{

    e.preventDefault()
    if (isFormVlaid()) {
      dispatch(startRegisterWithEmailPasswordName(email,password,name))  
    }
    
}

const isFormVlaid =()=>{

        if (name.trim().length === 0) {
            dispatch(uiError('name requerido'))
            
            return false
        } else if ( !validator.isEmail(email)){
            dispatch(uiError('email requerido'))
            
            return false
        } else if (password !== password2 || password.length <5){ 
        dispatch(uiError('Verifique password '))
        
        return false
        }
        dispatch(uiRemoveError())
        return true

}



    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
             className = "animate__animated animate__fadeIn"
            onSubmit={handleRegister}>
        {
                   state.ui.msgError && (     
                       
                    <div className='auth__alert-error'>
                            {state.ui.msgError}
                        </div> 
                    )
        }
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange ={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange ={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange ={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={password2}
                    onChange ={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
