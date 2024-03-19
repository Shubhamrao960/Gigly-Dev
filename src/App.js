// import './App.css';
import './app/assets/css/signup.css'
import { BrowserRouter } from "react-router-dom";
import Router from './routes';

function App() {
  return (
    <>
     {/* <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}> */}
         <BrowserRouter>
           <Router />
         </BrowserRouter>
       {/* </PersistGate>
     </Provider> */}
    </>
  );
}

export default App;
