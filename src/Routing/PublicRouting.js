
// import React, {useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
// import Cookies from 'universal-cookie';
export const PublicRoute = ({Component, ...props}) => {
	// const cookies = new Cookies();
	// const navigate = useNavigate();
	// const token = cookies.get('token');
	// useEffect(() => {
	// 	if (token) {
	// 		navigate(-1);
	// 	}
	// }, []);
	return (
		<div>
			<Component {...props} />
		</div>
	);
};
