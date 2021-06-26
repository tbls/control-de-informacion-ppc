import React from 'react'

function FormSistema({valor, actualizarInput,manejarSubmit}) {
  return (
    <div>
      <form onSubmit={(e)=>{manejarSubmit(e)}}>
      <div className="mb-3">
          <label className="form-label" >Nombre del Sistema</label>
          <input
            type="text" 
            className="form-control" 
            name="nombre"
            value={valor.nombre } 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg mt-2">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default FormSistema
