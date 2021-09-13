import * as React from 'react'
import { Container } from '../Content/style'

const NewStack = ()=>{
    return(
      <main>
        <p>Ejemplo</p>
        <Container>
          <div class="row ">
            <div className="align-content-baseline color1">Título</div>
            <div className="col align-content-center color2">Descripción</div>
            <div className="color3 align-content-end"><a href="https://www.google.com/" className="btn btn-ttc">Link</a></div>
            <div className="col color4">Column</div>
          </div>
        </Container>
      </main>
    )
  }
    export default NewStack