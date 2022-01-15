import React from 'react';
import './footer.scss';

import { FormattedMessage } from "react-intl";


const Footer = () => {
	return (
		<footer className="network">
					<div className="grettings">
			<p>
				<FormattedMessage 
					id="gretings"
					defaultMessage="gretings"
				/>
				</p>
		</div>
		</footer>
	)
}

export default Footer
