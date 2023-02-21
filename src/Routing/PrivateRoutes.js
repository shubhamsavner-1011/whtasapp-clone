// import React, {useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
// import Cookies from 'universal-cookie';
export const PrivateRoutes = ({Component, ...props}) => {
	// const cookies = new Cookies();
	// const token = cookies.get('token');
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!token) {
	// 		navigate(PATH.LOGIN_PAGE);
	// 	}
	// }, []);
	return <Component {...props} />;
};
