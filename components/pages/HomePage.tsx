import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Certifications from '../sections/Certifications';
import Career from '../sections/Career';
import Projects from '../sections/Projects';
import Photography from '../sections/Photography';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Certifications />
            <Career />
            <Projects />
            <Photography />
        </>
    );
};

export default HomePage;
