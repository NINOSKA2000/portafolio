import React from 'react'
import { Link } from 'react-scroll';
import n from '../../../assets/portafolio/n.PNG'


const HeaderTitle = () => {
	return (
		<>
			<div className="header-logo">
				<Link key="natalia" to="home" smooth={true} duration={3000} spy={true}>
					<img clasName="logoN" src={n} alt="N"/> <span>atalia</span>
				</Link>
			</div>
		</>
	)
}

export default HeaderTitle
