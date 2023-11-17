import {Outlet} from 'react-router-dom';

const LoginLayout = () =>{
    return(
        <div className="login-wrapper">
            <Outlet />
        </div>
    )
 }

 export default LoginLayout