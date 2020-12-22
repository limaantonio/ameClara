import { useState, useCallback } from "react";

import api from "../Services/api";

const AuthUser = () => {
	// Show and keep the User token/data on localStorage
	const [data, setData] = useState(() => {
		const token = '';
		const	user = '';
	
		// If the User's token exists: It is authorizated
		if (token) {
			api.defaults.headers.authorization = `Bearer ${token}`;
			
			return { token, user: JSON.parse(user) };
		}

		return ;
	});
	// Here is the login response - set the token and get the email/password
	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post("/auth", {
			email,
			password
		});
		const { token, user } = response.data;
		if(typeof window !== "undefined"){
			localStorage.setItem("@Ame:token", token);
			localStorage.setItem("@Ame:user", JSON.stringify(user));
		}
	

		api.defaults.headers.authorization = `Bearer ${token}`;

		setData({ token, user });
	}, []);
	// Here is the logout response - the token will be removed
	const signOut = useCallback(() => {
		localStorage.removeItem("@Ame:token");
		localStorage.removeItem("@Ame:user");
	}, []);

	return { signIn, signOut, data };
};

export default AuthUser;
