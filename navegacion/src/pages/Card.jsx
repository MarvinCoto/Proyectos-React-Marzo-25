const Card = ({nombre, fechaNacimiento, edad, carrera, descripcion}) => {

    
    return (

        <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="src/img/foto.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{nombre}</h5>
        <p class="card-text">Fecha de nacimiento: {fechaNacimiento}</p>
        <p class="card-text">Edad: {edad}</p>
        <p class="card-text">Carrera: {carrera}</p>
        <p class="card-text">Descripción: {descripcion}</p>
        <p class="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Card;