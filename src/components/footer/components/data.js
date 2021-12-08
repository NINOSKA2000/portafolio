import cv from './../../../assets/Documents/HV_ChristianAndres_Desarrollador.pdf'

import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faItunesNote } from '@fortawesome/free-brands-svg-icons'

export const socialMedia = [
	{
		id: 1,
		icon: faEnvelopeOpenText,
		link: "link",
		name: "email",
		url: "mailto:christianmorenoti@gmail.com?Subject=Quiero%saber%mas"
	},
	{
		id: 2,
		icon: faPhone,
		link: "link",
		name: "phone",
		url: "tel: +573202269163"
	},
	{
		id: 3,
		icon: faAddressCard,
		link: "link",
		name: "CV",
		url: cv
	},
	{
		id: 4,
		icon: faTwitter,
		link: "link",
		name: "twitter",
		url: "https://twitter.com/chrisceba"
	},
	{
		id: 1,
		icon: faItunesNote,
		link: "link",
		name: "notion",
		url: "https://www.notion.so/Welcome-to-my-Notes-1b38d0321763440dba30bdeddd847b57"
	},
]