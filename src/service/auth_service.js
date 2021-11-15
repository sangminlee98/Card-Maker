import firebase from 'firebase';
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

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebase.auth().signOut();
    }
}

export default AuthService;