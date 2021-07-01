import React, {useState, useEffect} from 'react'
import {obtenerPendientes} from '../services/pendientesService'
import { Link } from 'react-router-dom';

function ListaPendientesVIew() {

  const [pendientes, setPendientes] = useState([]);

  const getPendientes = async () => {
    try {
      const pendientesObtenidos = await obtenerPendientes()
      setPendientes(pendientesObtenidos)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getPendientes()
  }, [])


  return (
  
    <div>
      <h1 className='mt-2'>Lista de Pendientes</h1>
      <div className='d-flex justify-content-between'>
      <Link className="btn btn-primary btn-lg my-2" to="/crearpendiente">
        Agregar Pendiente
      </Link>
      <Link className="btn btn-secondary btn-lg my-2" to="/listarsistemas">
        Ver Sistemas
      </Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Sistema</th>
            <th>Equipo / Intrumento</th>
            <th>Motivo / Descripción</th>
            <th>Método de Intervención</th>
            <th>Criticidad</th>
            <th>Especialidad</th>
            <th>Fecha de Detección</th>
            <th>Número de Aviso</th>
            <th>Estado</th>
            <th>Comentarios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pendientes.map((pend,i) => (
            <tr key={i}>
              <td>{pend.sistema_nombre}</td> 
              <td>{pend.equipo_instrumento}</td> 
              <td>{pend.motivo_descripcion}</td> 
              <td>{pend.metodo_de_intervencion}</td> 
              <td>{pend.criticidad}</td> 
              <td>{pend.especialidad}</td> 
              <td>{pend.fecha_de_deteccion}</td> 
              <td>{pend.numero_de_aviso}</td> 
              <td>{pend.estado}</td> 
              <td>{pend.comentarios}</td>
              <td>
                <Link className="btn btn-warning btn-sm" to={`/editarpendiente/${pend.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPendientesVIew
