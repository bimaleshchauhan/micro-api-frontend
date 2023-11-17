import React, { useEffect } from 'react';
import Route from './routes';
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile, Action  } from './store/actions/index.js'
import './App.css';

function App() {
  const token = localStorage.getItem('token');
  const { haveAccount, user, profile } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      if(token){
          dispatch(onViewProfile())
          dispatch({ type:  Action.TOKEN, payload: token })
      }
  },[token])
  return (
    <>
       <Route isAuth = {token} />
    </>
  )
  // return <Router>           
  //           <div>
  //             <Header />
  //             <Switch>
  //               <Route path="/details/:id">
  //                 <ProductDetails />
  //               </Route>
  //               <Route path="/login">
  //                 <Login />
  //               </Route>
  //               <Route path="/">
  //                 <Home />
  //               </Route>
  //             </Switch>
  //           </div>
  //       </Router>
   
}

export default App;