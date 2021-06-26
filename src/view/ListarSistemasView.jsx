import React, {useState, useEffect} from 'react'
import {obtenerSistemas, obtenersistemas} from '../services/sistemaService'
import { Link } from 'react-router-dom';

function ListarSistemasVIew() {
  const [sistemas, setSistemas] = useState([]);

  const getSistemas = async () => {
    try {
      const sistemasObtenidos = await obtenerSistemas()
      setSistemas(sistemasObtenidos)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getSistemas()
  }, [])


  return (
    <div>
      <h1>Lista de Sistemas</h1>
      <Link className="btn btn-primary btn-lg my-2" to="/crearsistema">
        Agregar Sistema
      </Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {sistemas.map((sist,i) => (
            <tr key={i}>
              <td>{sist.nombre}</td> 
              <td>

                {/* <Link className="btn btn-warning btn-sm" to={`/editarsistema/${pend.id}`}>Editar</Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListarSistemasVIew
