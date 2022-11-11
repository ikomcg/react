import React from 'react'
import AboutPage from './about/about'
import Certificates from './about/certificates'
import Experience from './about/experience'
import SideCard from './components/sideCard'

function About() {
    return (
        <section className='flex flex-col '>
            <SideCard/>
            <Experience/>
            <Certificates/>
        </section>
    )
}

export default About
