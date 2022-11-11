import React from 'react'
import TopLeft from './home/mainleft'
import TopRight from './home/mainright'
import Projects from './home/projects/projects'
import Forms from './contact/contact'
function Home() {
    return (
        <div>
            <main className='main-home flex justify-between items-center mb-32'>
                <TopLeft/>
                <TopRight/>
            </main>
            <Projects/>
            <Forms/>
        </div>
        
    )
}

export default Home
