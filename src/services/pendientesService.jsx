import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/pendiente`

const obtenerPendientes = async () => {
  try {
    let {data} = await axios.get(URL)
    return data
  } catch (error) {
    console.log(error)
  }
}

const crearPendiente = async (nuevoPrendiente) => {
  try {
    let headers = {
      'Content-Type':'application/json'
    }
    let {data}= await axios.post(URL,nuevoPrendiente,{headers})
    return data
  } catch (error) {
    console.log(error)
  }
}

const editarPendiente = async (pendienteEditado,id) => {
  try {
    let headers = {
      'Content-Type':'application/json'
    }
    let {data}= await axios.put(`${URL}/${id}`,pendienteEditado,{headers})
    return data
  } catch (error) {
    console.log(error)
  }
}

const obtenerPendientePorId = async (id) => {
  try {
    let {data} = await axios.get(`${URL}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

const eliminarPendiente = async (id) => {
  try {
    
  } catch (error) {
    
  }
}


export {
  obtenerPendientes,
  crearPendiente,
  editarPendiente,
  obtenerPendientePorId
}