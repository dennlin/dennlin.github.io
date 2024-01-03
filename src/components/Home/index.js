import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/letter-d (512px).png';
import sLogotTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'n', 'n', 'i', 's', ',']
    const jobArray = ['o', 'f', 't', 'w', 'a', 'r', 'e', ' ','e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);  // Clear the timeout
    }, []);

    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m</span>
                    <img src={LogoTitle} alt="developer" className="logo-title" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={17} />
                    <br />
                    <span className={`${letterClass} _23`}>a</span>
                    <img src={sLogotTitle} alt="Sdeveloper" className="s-logo-title" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={24} />
                    </h1>
                    <h2>IOT and Game Developer / Gamer / Cosplayer</h2>
                    <Link to="/connect" className='flat-button'>CONNECT</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Home