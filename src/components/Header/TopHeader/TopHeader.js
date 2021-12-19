import React from 'react';
import topHeaderImg from '../../../images/top.png'

const TopHeader = () => {
    return (
        <div className='bg-dark'>
            <img className='img-fluid' src={topHeaderImg} alt="" />
        </div>
    );
};

export default TopHeader;