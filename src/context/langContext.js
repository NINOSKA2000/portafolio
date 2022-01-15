import React, { useState } from 'react';
import MensajesIngles from '../lang/en-US.json';
import MensajesEspañol from '../lang/esp.json';

import { IntlProvider } from 'react-intl'

const langContext = React.createContext();

const LangProvider = ({children}) => {
	
	const [mensaje, establecerMensaje] = useState(MensajesIngles);
	const [locale, establecerLocale] = useState('en-US');
	
	const establecerLenjuage = (lenguaje) => {
		switch (lenguaje) {
			case 'es-MX':
				establecerMensaje(MensajesEspañol)
				establecerLocale('es-MX')
				break;
			case 'en.US':
				establecerMensaje(MensajesIngles)
				establecerLocale('en-US')
				break;
			default:
				establecerMensaje(MensajesIngles)
				establecerLocale('en-US')
		}
	}



	return ( 
		<langContext.Provider value={{establecerLenjuage: establecerLenjuage}}>
			<IntlProvider locale={locale} messages={mensaje}>
				{children}
			</IntlProvider>
			
		</langContext.Provider>
	);
}

export {LangProvider, langContext}