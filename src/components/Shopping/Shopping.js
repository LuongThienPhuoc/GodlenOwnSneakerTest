import React, { useState, useEffect, useMemo } from 'react';
import './Shopping.css'
import OurProduct from '../OurProduct/OurProduct';
import YourCard from '../YourCard/YourCard';
function Shopping(props) {
    return (
        <div className='shopping'>
            <OurProduct></OurProduct>
            <YourCard></YourCard>
        </div>
    );
}

export default Shopping;