// AuthorContext.jsx

import { createContext, useEffect, useState, useContext } from "react";
import { auth ,db} from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'

const AuthorContext = createContext();

export function AuthorContextProvider({ children }) {
    const [user, setUser] = useState();

    function signup(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass);
        setDoc(doc(db, 'users', email), {
            savedShows: []
          })
    }

    function login(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthorContext.Provider value={{ signup, logout, login, user }}>
            {children}
        </AuthorContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthorContext);
}
