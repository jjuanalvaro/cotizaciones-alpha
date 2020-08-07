import React, { useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { axios } from '../config';
import { Route, Link } from "react-router-dom";
import M from 'materialize-css'

const Dashboard = () => {

	const {user,setAuth}=useContext(UserContext);

	useEffect(()=>{
		M.AutoInit()
	},[])
	
	const _salir=()=>{
		axios.get('/api/logout')
		.then(r=>{
			console.log(r.data)
			setAuth(false)
		})
	}
	
	const hola=()=>{
		return (
			<div className="row">
			<div className="card-panel">
				<h4>WELCOME {user.name.toUpperCase()}</h4>
			</div>
			</div>
		)
	}

	return (
		<div className="row">
			<div className="col s12 m4 l3" style={{width: '300px'}}>
				<ul id="slide-out" className="sidenav collapsible">
					<li>
						<div style={{position:'relative', background: "url('/alpha300.png') no-repeat center", height: 180 }}>
							<div className='black-text' style={{fontSize:22,position: 'absolute', bottom:10, textAlignLast:'center' }}>
								{user.email}
							</div>
						</div>
					</li>
					<li><Link to="/" className="waves-effect"><i className='material-icons'>face</i>Mis Clientes</Link></li>
					<li><a href="#!" className="subheader">Configuración</a></li>
					<li><a href="#!" onClick={_salir} className="waves-effect"><i className="material-icons">exit_to_app</i>Salir</a></li>
				</ul>
				<a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</div>
			<div className="col s12 m8 l9">
				<Route path="/" exact component={hola} />
			</div>
		</div>
	)
}

export default Dashboard
