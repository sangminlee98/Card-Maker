import firebase from 'firebase/compat';
import firebaseApp from './firebase';

// import {
//     getAuth,
//     signInWithPopup,
//     GoogleAuthProvider,
//     GithubAuthProvider,
// } from 'firebase/auth';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);

        // let provider;
        // if(providerName === 'Google') provider = new GoogleAuthProvider();
        // if(providerName === 'Github') provider = new GithubAuthProvider();
        // const auth = getAuth();
        // return signInWithPopup(auth,provider);
    }
}

export default AuthService;