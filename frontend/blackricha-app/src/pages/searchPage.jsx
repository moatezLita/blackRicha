import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/header/Header';
import SearchAlbum from '../components/search/searchAlbum';

const SearchPage = () => {
    return (
        <>
            <Header/>
                <div><SearchAlbum/></div>
            <Footer />
        </>
    );
}

export default SearchPage;