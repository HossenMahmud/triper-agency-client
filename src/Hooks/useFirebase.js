import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));

    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {

            })
            .catch((error) => {

            }).finally(() => setIsLoading(false));

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
            setIsLoading(false);
        });
    }, []);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setIsLoading(false));

    };

    return {
        handleGoogleLogin,
        handleGithubLogin,
        handleLogout,
        user,
        error,
        isLoading
    }
}
export default useFirebase;