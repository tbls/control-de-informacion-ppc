import React, {useState, useEffect} from 'react'
import FormPendiente from '../components/FormPendiente'
import {editarPendiente, obtenerPendientePorId} from '../services/pendientesService'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'
import{obtenerSistemas} from '../services/sistemaService'

function EditarProductoView() {

  let {id} = useParams()
  
  const [valor, setValor] = useState({
    sistema_nombre:'',
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
    e.preventDefault()
    setValor({
      ...valor,
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()
    try {
      await editarPendiente(valor,id)
      await Swal.fire({
        icon:'success',
        title:'Pendiente editado correctamente',
        showConfirmButton:false,
        timer:2000
      })
      history.push('/listarpendientes')
    } catch (error) {
      console.log(error)
    }
  }

  const getPendiente = async () => {
    try {
      let pendienteObtenido = await obtenerPendientePorId(id)
      setValor({...pendienteObtenido})
    } catch (error) {
      console.log(error)
    }
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
  },[])


  useEffect (() =>{
    getPendiente()
  },[])

  return (
    <div>
      <h1>Editar Pendiente</h1>
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

export default EditarProductoView
