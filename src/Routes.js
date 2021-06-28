import React from 'react'
import {Route} from 'react-router-dom'
import LoginView from './view/LoginView'
import CrearPendienteView from './view/CrearPendienteView'
import ListarPendientesVIew from './view/ListarPendientesView'
import EditarPendienteView from './view/EditarPendienteView'
import CrearSistemaView from './view/CrearSistemaView'
import ListarSistemasVIew from './view/ListarSistemasView'

function Routes() {
  return (
    <div>
      <Route exact path='/' component={LoginView}/>
      <Route exact path='/listarPendientes' component={ListarPendientesVIew}/>
      <Route exact path='/crearpendiente' component={CrearPendienteView}/>
      <Route exact path='/editarpendiente/:id' component={EditarPendienteView}/>
      <Route exact path='/crearsistema' component={CrearSistemaView}/>
      <Route exact path='/listarsistemas' component={ListarSistemasVIew}/>
      

    </div>
  )
}

export default Routes
