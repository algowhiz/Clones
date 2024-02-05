import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthorContext';

const Protected_route = ({ children }) => {

    const { user} = useAuth();

    if(!user){
        return <Navigate to={'/'} />
    }
    else{
        return children;
    }
    
}

export default Protected_route