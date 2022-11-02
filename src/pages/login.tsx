import {auth, provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth'
import { async } from '@firebase/util';

import {useNavigate} from 'react-router-dom'
export const Login = () =>{
    const navigate = useNavigate();
    const signInWithGoogle = async ()=>{
       const result =  signInWithPopup(auth,provider)
       navigate("/");
    }
    
    return(
         <div>
            <p>Sign In with google to continue </p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
        );

}