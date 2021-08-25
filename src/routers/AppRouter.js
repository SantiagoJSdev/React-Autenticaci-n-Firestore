import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    
    Redirect
  } from 'react-router-dom';

  import { firebase } from "../firebase/firebaseConfig";

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    // const state = useSelector( state => state );
    // console.log(state)
        //Nota:  creo un estado para saber colocar loading en la pagina mienstras comprueba el user
    const [checking, setchecking] = useState(true)

        //Nota:  creo un estado para saber identificar usuario activo
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {

        //nota: creo un observador del user asi si esta autenticado en la pagina
        //lo cargo en el store sino no esta logueado y lo envia a la ruta del login

        firebase.auth().onAuthStateChanged(  user=>{

           

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setisLoggedIn(true)

               dispatch(startLoadingNotes(user.uid)) 
            //   const notas = await loadNotas(user.uid)
            //   dispatch(notesLoad(notas))
            } else {
            setisLoggedIn(false)
            }
            setchecking(false)
            })
           
        
    }, [dispatch, setchecking, setisLoggedIn])

    if (checking) {

        return (
        <h1>Loading</h1>
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
