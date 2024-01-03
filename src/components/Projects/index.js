import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);  // Clear the timeout
    }, []);

    return (
        <>
            <div className='container connect-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects