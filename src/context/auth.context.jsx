import CircularProgress from '@mui/material/CircularProgress';
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

function AuthWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedUserId, setLoggedUserId] = useState(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    // token
    const authenticateUser = async () => {
        const authToken = localStorage.getItem("authToken")

        // clausula de guardia
        if(!authToken){
            setIsLoggedIn(false)
            setLoggedUserId(null)
            setIsAuthenticating(false)
            return
        }

        // GET "api/auth/verify"
        try {
            const response = await service.get("/auth/verify")

            // si el token es valido:
            setIsLoggedIn(true)
            setLoggedUserId(response.data.payload._id)
            setIsAuthenticating(false)

        } catch (error) {
            // si el token no es valido o ha expirado:
            setIsLoggedIn(false)
            setLoggedUserId(null)
            setIsAuthenticating(false)
        }
    }

    const passedContext = {
        isLoggedIn,
        loggedUserId,
        authenticateUser
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    //clausula de guardia
    if (isAuthenticating === true) {
        return <CircularProgress />
    }

  return (
    <AuthContext.Provider value={passedContext}>{props.children}</AuthContext.Provider>
  )
}

export  {
    AuthContext,
    AuthWrapper
}