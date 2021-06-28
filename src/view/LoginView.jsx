import React , {useState} from 'react'
import { obtenerUsuarioPorUsername } from '../services/usuariosService'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'


function LoginView() {

  const [valor, setValor] = useState({
    username:'',
    password:''
  })

  const history = useHistory()


  const actualizarInput = (e) => {
    setValor({
      ...valor,
      [e.target.name]:e.target.value
    })
  } 
  
  const iniciarSesion = async (e) => {
  e.preventDefault()
  try {
    let usuarioObtenido = await obtenerUsuarioPorUsername(valor.username)
    console.log(usuarioObtenido)
    {
      if(usuarioObtenido.password = valor.password){
        Swal.fire({
          icon:'success',
          title:'INGRESO CORRECTO',
          text:'--------',
          showConfirmButton:false,
          timer:2000
        })
        history.push('/listarpendientes')
      }
      else{
        Swal.fire({
          icon:'error',
          title:'ERROR',
          text:'Usuario y/o Contraseña incorrecta',
          showConfirmButton:true,
        })
      }
    }
  } catch (error) {
    Swal.fire({
      icon:'error',
      title:'ERROR',
      text:'Usuario y/o Contraseña incorrecta',
      showConfirmButton:true,
    })
  }
  
  }

  // return (
  //   <div className="container m-5">
  //             <div className="row">
  //               <form onSubmit={(e)=>{iniciarSesion(e)}}>
  //                 <div className="row">
  //                   <label htmlFor='username'>Usuario</label>
  //                   <input
  //                     type="text" 
  //                     name="username" 
  //                     id="username"
  //                     value={valor.username}
  //                     onChange={(e)=>{actualizarInput(e)}}
  //                     className="form-control"
  //                   />
  //                 </div>
  //                 <div className="row">
  //                   <label htmlFor='password'>Password</label>
  //                   <input 
  //                     type="password" 
  //                     name="password" 
  //                     id="password" 
  //                     value={valor.password}
  //                     onChange={(e)=>{actualizarInput(e)}}
  //                     className="form-control" 
  //                   />
  //                 </div>
  //                 <div className="row">
  //                   <button type='submit'>Ingresar</button>
  //                 </div>
  //               </form>
  //             </div>
  //   </div>
  // )

  return (
    <body className=" container text-center col-lg-6">
        <main className="form-signin">
            <form on onSubmit={(e)=>{iniciarSesion(e)}}>
                <h1 className="h3 mb-3 fw-normal">Ingresar al sistema</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" 
                        placeholder="exampleUser"
                        name='username'
                        value={valor.username}
                        onChange={(e)=>{actualizarInput(e)}}  
                      />
                    <label for="floatingInput">Usuario</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control"
                    placeholder="Password"
                    name='password'
                    value={valor.password}
                    onChange={(e)=>{actualizarInput(e)}}  
                    />
                    <label for="floatingPassword">Contraseña</label>
                </div>
                {/* <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> 
                    Recuerdame
                    </label>
                </div> */}
                <button className="w-100 btn btn-lg btn-primary"
                  type="submit">Ingresar</button>
                  <p className="mt-5 mb-3 text-muted">© 2021–20XX</p>
            </form>
        </main>
    </body>
)
}







export default LoginView
