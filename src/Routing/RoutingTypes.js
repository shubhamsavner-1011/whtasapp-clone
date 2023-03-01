import { URL } from '../constant';
import { LoginForm } from '../containers/LoginForm/lndex';
import { Home, Login, Register } from '../pages';



export const publicRoutes = [{path: URL.HOME_PAGE, Component: Home},];
export const privateRoutes = [
	{path: URL.LOGIN_PAGE, Component: Login},
	{path: URL.REGISTER_PAGE, Component: Register},
	{path: URL.LOGIN_FORM, Component: LoginForm},
];
