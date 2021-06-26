import React from 'react'

function FormPendiente({valor, actualizarInput,manejarSubmit,sistemas}) {
  return (
    <div>
      <form onSubmit={(e)=>{manejarSubmit(e)}}>

      <div className="row justify-content-center">

        <div className="mb-3 col-5">
        <label className="form-label" >Sistema</label>
          <select 
            className="form-control"
            name="sistema_id"
            value={valor.sistema_nombre}
            onChange={(e)=>{actualizarInput(e)}}
          >
            {sistemas.map((sist,i)=>(
              <option key={i}>{sist.nombre}</option>  
            ))}
          </select>
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Equipo / Instrumento</label>
          <input 
            type="text" 
            className="form-control" 
            name="equipo_instrumento" 
            value={valor.equipo_instrumento} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3 col-10">
          <label className="form-label" >Motivo / Descripción</label>
          <input
            type="text" 
            className="form-control" 
            name="motivo_descripcion"
            value={valor.motivo_descripcion} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
      
       

        <div className="mb-3 col-5">
          <label className="form-label" >Método de Intervención</label>
          <select 
            className="form-control" 
            name="metodo_de_intervencion"
            value={valor.metodo_de_intervencion} 
            onChange={(e)=>{actualizarInput(e)}}
          >
            <option>En operación</option> 
            <option>Paro de equipo</option> 
            <option>Paro de unidad</option> 
            <option>Paro de planta</option> 
            <option>Paro total de planta</option> 
          </select>
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Criticidad</label>
          <select 
            className="form-control" 
            name="criticidad"
            value={valor.criticidad} 
            onChange={(e)=>{actualizarInput(e)}}
          >
            <option>Bajo</option> 
            <option>Medio</option> 
            <option>Alto</option> 
          </select>
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Especialidad</label>
          <select 
            className="form-control" 
            name="especialidad"
            value={valor.especialidad} 
            onChange={(e)=>{actualizarInput(e)}}
          >
            <option>Electricidad</option> 
            <option>Instrumentación</option> 
            <option>Mecánica</option> 
            <option>SSGG</option> 
          </select>
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Fecha de Detección</label>
          <input 
            type="date" 
            className="form-control" 
            name="fecha_de_deteccion"
            value={valor.fecha_de_deteccion} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Reportadoo por</label>
          <input 
            type="text" 
            className="form-control" 
            name="reportado_por"
            value={valor.reportado_por} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3 col-5">
          <label className="form-label" >Número de Aviso</label>
          <input
            type="text" 
            className="form-control"
            name="numero_de_aviso"
            value={valor.numero_de_aviso} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3 col-10">
          <label className="form-label" >Comentarios</label>
          <input 
            type="text" 
            className="form-control" 
            name="comentarios"
            value={valor.comentarios} 
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

   

        <div className="d-grid  col-6">
          <button type="submit" className="btn btn-primary mt-2">
            Guardar
          </button>
        </div>
      </div>

      </form>
    </div>
  )
}

export default FormPendiente
