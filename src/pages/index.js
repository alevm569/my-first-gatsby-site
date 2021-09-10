//Paso 1: importo react, permitiendo usar JSX en .js
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
/*Paso 2: Definir el componente, que debe iniciar con mayúsculas*/
const MyComponent = () => {
  return (
    <main>
      <h1>Hi, welcome to my site!</h1>
      <p>Ejemplo</p>
      <div class="container">
        <div class="row ">
          <div className="align-content-baseline color1">Título</div>
          <div className="col align-content-center color2">Descripción</div>
          <div className="color3 align-content-end"><a href="https://www.google.com/" className="btn btn-ttc">Link</a></div>
          <div className="col color4">Column</div>
        </div>
      </div>
    </main>
    
  )
}

/*Paso 3: Exportar el componente para que pueda ser usador por 
otras partes de la app */
export default MyComponent