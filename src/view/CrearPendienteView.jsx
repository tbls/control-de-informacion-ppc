import React,{useState, useEffect} from 'react'
import FormPendiente from '../components/FormPendiente'
import {crearPendiente} from '../services/pendientesService'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'
import{obtenerSistemas} from '../services/sistemaService'

function CrearPendienteView() {

  const [valor, setValor] = useState({
    sistema_id:1,
    equipo_instrumento:'',
    motivo_descripcion:'',
    metodo_de_intervencion:'',
    criticidad:'',
    especialidad:'',
    fecha_de_deteccion:'',
    reportado_por:'',
    numero_de_aviso:'',
    estado:'',
    comentarios:'',
    fecha_de_registro:''
  })

  const [sistemas,setSistemas] = useState([])

  const history = useHistory()

  const actualizarInput = (e) => {
    setValor({
      ...valor,
      [e.target.name]:e.target.value
    })
  }

  const getSistemas = async () => {
    try {
      let sistemasObtenidos = await obtenerSistemas()
      setSistemas([...sistemasObtenidos])
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getSistemas()
    {valor.estado = "pendiente"}
  },[])

  const manejarSubmit = async (e) => {
    e.preventDefault()
    try {
      await crearPendiente({...valor})
  
      await Swal.fire({
        icon:'success',
        title:'Pendiente agregado correctamente',
        showConfirmButton:false,
        timer:2000
      })
      history.push('/listarpendientes')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Crear Pendiente</h1>
      <FormPendiente
        valor={valor} 
        actualizarInput={actualizarInput}
        setValor={setValor}
        manejarSubmit={manejarSubmit}
        sistemas={sistemas}
      />
    </div>
  )
}

export default CrearPendienteView
