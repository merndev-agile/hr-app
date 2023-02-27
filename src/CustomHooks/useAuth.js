import React,{useState} from 'react';

export default function useAuth(initialValue){
    const [isAuth, setAuth] = useState(initialValue);

    return [ isAuth, setAuth ] ;
}