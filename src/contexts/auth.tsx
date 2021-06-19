import { async } from "q";
import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: User;
  token: string;
  setUserData:React.Dispatch<React.SetStateAction<IUserData>>;
}
interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  pius: Piu[];
  likes: PiuLike[];
  following: User[];
  followers: User[];
  favorites: Piu[];
}

interface Piu {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}

interface PiuLike {
  id: string;
  user: User;
  piu: Piu;
}
interface IUserData{
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC = ({ children }) => {


const [userData, setUserData] = useState<IUserData>(() => {
  const token = localStorage.getItem('@PiuPiuwer:token');
  const user = localStorage.getItem('@PiuPiuwer:user');

  if(user && token){
    return{user:JSON.parse(user), token}
  }
  else{
    Error ('401 - Bad request Incorrect email/password combination')
    return {} as IUserData
  }
})

  return (
    <AuthContext.Provider value={{ 
      setUserData,
      signed: Boolean(userData.token),
      token: userData.token,
      user: userData.user
    }}>

      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext


