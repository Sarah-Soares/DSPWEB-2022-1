import { Toast, ToastContainer } from 'react-bootstrap'

const MyToast = ({ header, body, show, bg, color, setShowToast }) => {
	return (
		<ToastContainer position='top-center' style={{ marginTop: '5em' }}>
			<Toast
				onClose={() => setShowToast(false)}
				show={show}
				bg={bg}
				delay={4000}
				autohide>
				<Toast.Header>
					<strong className='me-auto'>{header}</strong>
				</Toast.Header>
				<Toast.Body>
					<span style={{ color, fontWeight: 'bold' }}>
						{body}
					</span>
				</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}

export default MyToast;
