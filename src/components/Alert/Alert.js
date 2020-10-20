import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { BsFillExclamationTriangleFill as IconoPeligro } from 'react-icons/bs';

import './Alert.scss';

export default function Alerta() {
	const [ show, setShow ] = useState(true);
	if (show) {
		return (
			<Alert variant="danger" onClose={() => setShow(false)} dismissible className="alert">
				<p className="alert__para">
					<IconoPeligro className="alert__icon" />
					Conoce nuestro protocolo de Entrega CERO CONTACTO.
				</p>
				<p className="text-center">
					<Alert.Link href="#"> Ver más</Alert.Link>
				</p>
			</Alert>
		);
	} else return null;
}
