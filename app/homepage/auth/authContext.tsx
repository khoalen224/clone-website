'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children } : AuthProviderProps) =>{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if(savedUser){
            setUser(JSON.parse(savedUser));
        }
    },[]);
    const login = (userData : User) =>{
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(context === null){
        throw new Error ('useAuth must be used with an AuthProvider ');
    }
    return context;
};