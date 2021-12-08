import React from 'react'

import { FormattedMessage } from "react-intl";
const Greetings = () => {
	return (
		<div className="grettings">
			<p>
				<FormattedMessage 
					id="gretings"
					defaultMessage="gretings"
				/>
				</p>
		</div>
	)
}

export default Greetings
