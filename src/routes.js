import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import LoginLayout from './layout/LoginLayout'

import Auth from './pages/auth';
import { Home } from './pages/Home';
import { Header} from './components'
import { ProductDetails } from './pages/ProductDetail';
import { Profile } from './pages/Profile'
// import NotFound from './pages/404'

const Routers = ({isAuth}) =>{
    console.log("isAuth ddd", isAuth)
    return (
    <Router>
        <Routes>
            <Route path='/login' element={<LoginLayout/>}>
                <Route index element={<Auth />} />
            </Route>
            <Route path="/" element={isAuth ? <MainLayout /> : <Navigate to="/login" />} >
                <Route index element={ <Home />} />
                <Route path="/details/:id" element={ <ProductDetails />} />  
                <Route path="/profile" element={ <Profile />} />  
            </Route>
            {/* <Route path="/" element={<PageLayout />} >
                <Route path="contactus" element={<Contactus />} />
            </Route> */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
)}

export default Routers;