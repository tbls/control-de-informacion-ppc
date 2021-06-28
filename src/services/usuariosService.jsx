import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/usuario`

const obtenerUsuario = async () => {
  try {
    let {data} = await axios.get(URL)
    return data
  } catch (error) {
    console.log(error)
  }
}

const obtenerUsuarioPorUsername = async (username) => {
  try {
    let {data} = await axios.get(`${URL}?username=${username}`)
    return data
  } catch (error) {
    console.log(error)
  }
}


export {
  obtenerUsuario,
  obtenerUsuarioPorUsername
}