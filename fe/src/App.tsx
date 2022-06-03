import React from 'react';
import { Container } from 'react-bootstrap';
import { LoginComponent } from './components/LoginComponent';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './actions/logout';
import "bootstrap/dist/css/bootstrap.min.css"
import { FormProd } from './components/formProd';

function App() {
  const isLogged = useSelector((state: {isLogged: boolean}) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Container>
    
    {isLogged ? (<FormProd />) : (<LoginComponent />)}

      
    </Container>
  );
}

export default App;
