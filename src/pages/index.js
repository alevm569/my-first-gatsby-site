//Paso 1: importo react, permitiendo usar JSX en .js
import * as React from 'react'
import Header from '../components/Header';
import NewStack from '../components/Content/stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Footer from '../components/Footer/footer';

/*Paso 2: Definir el componente, que debe iniciar con mayúsculas*/
const MyComponent = () => {
  return (
    <main>
      <Header/>
      <NewStack/>
      <Footer/>
    </main>
    
  )
}
/*Paso 3: Exportar el componente para que pueda ser usador por 
  otras partes de la app */
export default MyComponent



