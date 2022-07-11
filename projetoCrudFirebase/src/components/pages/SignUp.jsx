import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import homeImg from '../img/home.jpg';
import styles from './Form.module.css'
import FirebaseContext from '../../utils/FirebaseContext'
import FirebaseUserService from '../../services/FirebaseUserService'

const SignUpPage = ({ setShowToast, setToast }) => {
	return (
		<FirebaseContext.Consumer>
			{(context) => (
				<SignUp
					firebase={context}
					setShowToast={setShowToast}
					setToast={setToast}
				/>
			)}
		</FirebaseContext.Consumer>
	)
}

const SignUp = ({ firebase, setShowToast, setToast }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmationPassword, setConfirmationPassword] = useState('')

	const [validate, setValidate] = useState({
		username: '',
		password: '',
		confirmationPassword: '',
	})

	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const validateFields = () => {
		let res = true
		setValidate({ username: '', password: '', confirmationPassword: '' })

		if (username === '' || password === '' || confirmationPassword === '') {
			setToast({
				header: 'Erro!',
				body: 'Preencha todos os campos para concluir login.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			res = false
			let validateObj = {
				username: '',
				password: '',
				confirmationPassword: '',
			}
			if (username === '') validateObj.username = 'is-invalid'
			if (password === '') validateObj.password = 'is-invalid'
			if (confirmationPassword === '')
				validateObj.confirmationPassword = 'is-invalid'
			setValidate(validateObj)
			return res
		}

		if (password.length < 6) {
			setToast({
				header: 'Erro!',
				body: 'A senha precisa ter no mínimo 6 caracteres.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			let validateObj = {
				password: '',
				confirmationPassword: '',
			}

			validateObj.password = 'is-invalid'
			if (confirmationPassword == password)
				validateObj.confirmationPassword = 'is-invalid'
			setValidate(validateObj)
			res = false
			return res
		}

		if (password != confirmationPassword) {
			setToast({
				header: 'Erro!',
				body: 'A confirmação da senha precisa ser igual á senha.',
				bg: 'danger',
				color: 'black',
			})
			setShowToast(true)
			setLoading(false)
			let validateObj = {
				username: '',
				password: '',
				confirmationPassword: '',
			}

			validateObj.confirmationPassword = 'is-invalid'
			setValidate(validateObj)

			res = false
		}

		return res
	}

	function handleChangeLogin(evt) {
		setUsername(evt.target.value)
	}

	function handleChangePassword(evt) {
		setPassword(evt.target.value)
	}

	function handleChangeConfirmationPassword(evt) {
		setConfirmationPassword(evt.target.value)
	}

	function handleSubmit(evt) {
		evt.preventDefault()
		setLoading(true)
		if (!validateFields()) return
		//console.log({ user: { username, password } });
		FirebaseUserService.signUp(
			firebase.getAuth(),
			username,
			password,
			(resp, content) => {
				if (resp) {
					firebase.setUser(content)
					navigate("/listStudents");
				} else {
					setLoading(false)
					if (content == 'auth/email-already-in-use') {
						setToast({
							header: 'Erro!',
							body: 'Uma conta já foi criada com esse email',
							bg: 'danger',
							color: 'black',
						})
						setShowToast(true)
						let validateObj = { username: '' }
						validateObj.username = 'is-invalid'
						validateObj.password = 'is-invalid'
						validateObj.confirmationPassword = 'is-invalid'
						setValidate(validateObj)
					} else {
						setToast({
							header: 'Erro!',
							body: content,
							bg: 'danger',
							color: 'black',
						})
						setShowToast(true)
						let validateObj = {
							username: '',
							password: '',
							confirmationPassword: '',
						}
						validateObj.username = 'is-invalid'
						validateObj.password = 'is-invalid'
						validateObj.confirmationPassword = 'is-invalid'
						setValidate(validateObj)
					}
				}
			},
		)
	}
	
	function renderSubmitButton() {
		if (loading == false) {
			return (
				<div
					className='form-group'
					style={{
						paddingTop: 20,
						paddingBottom: 20,
						display: 'flex',
						justifyContent: 'space-evenly',
					}}>
					<input
						type='submit'
						value='Registrar-se'
						className='btn btn-primary text-light '
						style={{ padding: '5px 5px' }}
					/>
				</div>
			)
		} else {
			return (
				<div
					className='form-group'
					style={{
						paddingTop: 20,
						paddingBottom: 20,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<button
						className='btn btn-light'
						type='button'
						disabled
						style={{
							padding: '5px 5px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<span
							className='spinner-border spinner-border-sm m-1'
							role='status'
							aria-hidden='true'></span>
						Carregando...
					</button>
				</div>
			)
		}
	}

	return (
		<div className={`${styles.container}`}>
			<main style={{ width: '60%' }}>
				<h1>Registrar-se</h1>
				<form onSubmit={handleSubmit} style={{ width: '100%' }}>
					<div className='form-group'>
						<label htmlFor=''>Email</label>
						<input
							type='username'
							value={
								username === null || username === undefined
									? ''
									: username
							}
							placeholder='Digite seu email'
							name='username'
							autoComplete='username'
							onChange={handleChangeLogin}
							className={`form-control ${validate.username}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Senha</label>
						<input
							type='password'
							value={password ?? ''}
							placeholder='Digite a sua senha'
							name='password'
							onChange={handleChangePassword}
							className={`form-control ${validate.password}`}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor=''>Confirmar Senha</label>
						<input
							type='password'
							value={confirmationPassword ?? ''}
							placeholder='Digite a sua senha'
							autoComplete='new-password'
							name='confirmPassword'
							onChange={handleChangeConfirmationPassword}
							className={`form-control ${validate.confirmationPassword}`}
						/>
					</div>
					{renderSubmitButton()}
				</form>
			</main>
		</div>
	)
}
export default SignUpPage

/*
<h5 style={{ textAlign: 'center' }}>
                Sejam bem-vindos ao sistema de gerenciamento da UFC Quixadá
            </h5>
            <img
                src={homeImg}
                alt="Foto com o cenário da universidade federal campus quixadá"
                style={{
                    maxHeight: 500,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
*/
