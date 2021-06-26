import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/sistema`

const crearSistema = async (nuevoSistema) => {
  try {
    let headers = {
      'Content-type':'application/json'
    }
    let {data} = await axios.post(URL,nuevoSistema,{headers})
    return data
  } catch (error) {
    console.log(error)
  }
}

const obtenerSistemas = async () => {
  try {
    let {data} = await axios.get(URL)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  crearSistema,
  obtenerSistemas
}