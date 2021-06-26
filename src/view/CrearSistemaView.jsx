import React,{useState} from 'react'
import FormSistema from '../components/FormSistema'
import {crearSistema} from '../services/sistemaService'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'

function CrearSistemaView() {

  const [valor, setValor] = useState({
    area_id:0,
    nombre:''
  })

  const history = useHistory()

  const actualizarInput = (e) => {
    setValor({
      ...valor,
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()
    try {
      await crearSistema({...valor})
      await Swal.fire({
        icon:'success',
        title:'Sistema agregado correctamente',
        showConfirmButton:false,
        timer:2000
      })
      history.push('/listarsistemas')
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon:'error',
        title:'Sucecidio un error inesperado',
        text:`${error}`,
        showConfirmButton:true,
      })
    }
  }

  return (
    <div>
      <h1>Crear Sistema</h1>
      <FormSistema
        valor={valor} 
        actualizarInput={actualizarInput}
        setValor={setValor}
        manejarSubmit={manejarSubmit}
      />
    </div>
  )
}

export default CrearSistemaView
