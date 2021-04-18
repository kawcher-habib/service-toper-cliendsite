import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Contact from '../MainSection/Contact/Contact';
import ReviewSection from '../MainSection/ReviewSection/ReviewSection';
import Services from '../MainSection/Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
                <Services />
                <ReviewSection />
                <Contact />
            <Footer />
        </div>
    );
};

export default Home;