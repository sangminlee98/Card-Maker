import { firebaseAuth,googleProvider,githubProvider } from './firebase';


// import {
//     getAuth,
//     signInWithPopup,
//     GoogleAuthProvider,
//     GithubAuthProvider,
// } from 'firebase/auth';

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);

        // let provider;
        // if(providerName === 'Google') provider = new GoogleAuthProvider();
        // if(providerName === 'Github') provider = new GithubAuthProvider();
        // const auth = getAuth();
        // return signInWithPopup(auth,provider);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebaseAuth.signOut();
    }

    getProvider(providerName) {
        switch(providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthService;