import React,{useState,createContext} from 'react';

export const UserContext = createContext();
export const UserProvider = props => {
	const [user,setUser] = useState({});
	const [auth, setAuth] = useState(false);
	return (
		<UserContext.Provider value={{user,setUser,auth,setAuth}}>
			{props.children}
		</UserContext.Provider>
	)
}
