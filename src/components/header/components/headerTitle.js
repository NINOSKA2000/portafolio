import React from 'react'
import { Link } from 'react-scroll'


const HeaderTitle = () => {
	return (
		<>
			<div className="header-logo">
				<Link key="natalia" to="home" smooth={true} duration={3000} spy={true}>
					Natalia
				</Link>
			</div>
		</>
	)
}

export default HeaderTitle
