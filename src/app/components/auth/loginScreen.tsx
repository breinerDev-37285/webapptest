import React, { FormEvent } from 'react';
import useForm from '../../hooks/useForm';
import { i_login } from '../../intefaces/loginInterface';
import { useDispatch,useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';
import i_redux from '../../intefaces/reduxInterface';

const init:i_login = {
    email: '',
    password: ''
}

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ values,onChangeInput ] = useForm(init);
    const { email, password }:i_login = values;

    const onSubmit = ( e:FormEvent ) => {
        e.preventDefault();
        dispatch(startLogin({email,password}))
    }

    const { err } = useSelector((info:i_redux) => info.err);

    return (
        <div className="App container">
            <div className="col-md-6">
                <h1 className="">Bienvenido Administrador</h1>
                <hr className="my-3" />
                { err && <p className="text-center">{ err } </p> }
                
                <form onSubmit={ onSubmit }>
                    <div>
                        <label 
                            htmlFor="email-id"
                            className="form-label"
                            >Email
                        </label>
                        <input 
                            id="email-id"
                            className="form-control"
                            type="text" 
                            name='email'
                            placeholder="Ingrese su email"
                            onChange={ onChangeInput }
                            value={ email }
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="password-id"
                            className="form-label"
                            >Contraseña
                        </label>
                        <input 
                            id="password-id"
                            className="form-control"
                            type="password" 
                            name='password'
                            placeholder="Ingrese su contraseña"
                            onChange={ onChangeInput }
                            value={ password }
                        />
                    </div>

                    <button
                        type='submit' 
                        className="btn btn-primary" 
                        >Iniciar Sesion
                    </button>
                </form>
            </div>
        </div>
    );
};


export default LoginScreen;