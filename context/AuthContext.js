import{createContext,useContext,useState,useEffect}from'react';
import AsyncStorage from'@react-native-async-storage/async-storage';
const AuthContext=createContext();
export function AuthProvider({children}){
const[user,setUser]=useState(null);
const[loading,setLoading]=useState(true);
const login=(username)=>setUser({username});
const logout=()=>setUser(null);
useEffect(()=>{
AsyncStorage.getItem('user').then(stored=>{
if(stored)setUser(JSON.parse(stored));
setLoading(false);
});
},[]);
useEffect(()=>{
if(user){
AsyncStorage.setItem('user',JSON.stringify(user));
}else{
AsyncStorage.removeItem('user');
}
},[user]);
if(loading)return null;
return(
<AuthContext.Provider value={{user,login,logout}}>
{children}
</AuthContext.Provider>
);
}
export function useAuth(){
return useContext(AuthContext);
}
