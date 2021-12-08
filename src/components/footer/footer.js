import React from 'react'

import TitleSection from './../utils/titleSection'
import Icons from './components/Icons'
import Greetings from './components/greetings'

import './footer.scss'

const Footer = () => {
	return (
		<footer className="network">
			<TitleSection title="social-media-title-white" tipoTitle="social-media-title-green"/>
			<Icons />
			<Greetings />
		</footer>
	)
}

export default Footer
