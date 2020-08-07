import React, { useEffect, useState } from 'react'
import { axios } from '../../config';

const Clients = () => {

	const [clientes, setClientes] = useState([])

	useEffect(()=>{
		axios.get('/api/misClientes')
		.then(r=>{
			console.log(r.data)
			setClientes(r.data)
		})
		.catch(r=>alert(r))
	},[])

	return(
		<div className='card-panel'>
			<h4>Mis Clientes</h4>
			<div className='row'>
				<table>
					<thead>
						<tr>
							<th>#idCliente</th>
							<th>Nombre</th>
							<th>RFC</th>
							<th>Correo</th>
							<th>Web</th>
							<th>Fecha Registro</th>
						</tr>
					</thead>

					<tbody>
					{clientes.map((c,i)=>
						<tr key={i} style={{cursor: 'pointer'}}>
							<td>{c.id}</td>
							<td>{c.nombre}</td>
							<td>{c.rfc}</td>
							<td>{c.correo}</td>
							<td><a href={`${c.web}`} target='_blanck'>{c.web}</a></td>
							<td>{c.created_at}</td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Clients
