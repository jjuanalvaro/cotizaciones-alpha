import React,{ useState, useContext, useEffect } from 'react' 
import { axios } from '../../config'
import { UserContext } from '../../UserContext';
import Admin from '../dashboard'

const Login=props=>{

	const [data,setData] = useState({})
	const { setUser, auth, setAuth }=useContext(UserContext);
	const [loader, setLoader]=useState(true)

	useEffect(()=>{
		axios.get('/api/user').then(response=>{
			setUser(response.data)
			setLoader(false)
			setAuth(true)
		}).catch(e=>{
			setLoader(false)
		})
	},[setAuth, setUser])

	const _logan=()=>{
		console.log(data)
		axios.post('/api/login',data).then(r=>{
			console.log(r.data)
			setUser(r.data.user)
			localStorage.setItem('access_token', 'Bearer '+r.data.access_token);
			axios.defaults.headers.common['Authorization'] = 'Bearer '+r.data.access_token
			setAuth(true)
			setData({})
		}).catch(r=>alert(r))
	}
	
	const handleKeyPress = event => {
		if(event.key === 'Enter'){
			_logan()
		}
	}


	if(loader)return(
			<div style={{position: 'absolute',top: '50%',left: '50%'}}>
				Cargando...
			</div>
		)

	return auth?<Admin />:
	(
		<div className="row center">
			<div className="col s6 m3" style={{width: '300px',height: '100px',padding: '20px',position: 'absolute',top: '30%',left: '50%',margin: '-70px 0 0 -170px'}}>
				<div className="card">
					<div className="card-content black-text">
						<span className="card-title">Alpha</span>
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">account_circle</i>
										<input onChange={(e)=>setData({...data,email:e.target.value})} value={data.email||''} id="icon_prefix" type="text" className="validate"/>
										<label htmlFor="icon_prefix">Correo</label>
									</div>
									<div className="input-field col s12">
										<i className="material-icons prefix">lock</i>
										<input onChange={(e)=>setData({...data,password:e.target.value})} value={data.password||''} onKeyPress={handleKeyPress} id="password" type="password" className="validate"/>
										<label htmlFor="password">Contraseña</label>
									</div>
								</div>
							</form>
						<button onClick={_logan} className="btn waves-effect waves-light grey lighten-1" type="submit" name="action">Entrar<i className="material-icons right">send</i></button>
						</div>
					</div>
					{/*<div className="card-action">
						<Link to="/create/">Crear Cuenta</Link>
					</div>
					*/}
				</div>
			</div>
		</div>
		)
}
export default Login
