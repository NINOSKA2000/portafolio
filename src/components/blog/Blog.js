import React from 'react'

import './blog.scss';

import TitleSection from './../utils/titleSection'
import CajaBlog from './components/cajaBlog'

const Blog = () => {
	return (
		<>
		<section className="blog">
			<TitleSection title="blog-title" tipoTitle="global.title.plural"/>
			<CajaBlog/>
		</section>
			
		</>
	)
}

export default Blog
