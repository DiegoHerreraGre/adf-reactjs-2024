import { useState, useEffect } from 'react';
import '../App.css';

function Filter() {
    const [clickNumber, setClickNumber] = useState(0);

    const filterBtn = () => {
        const btn = document.querySelector('.btn-filter');
        if (clickNumber > 0) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
        setClickNumber(prevClickNumber => prevClickNumber + 1);
    }

    useEffect(() => {
        let selectedFilter = document.getElementById('select-filter');
        const handleChange = () => {
            let selectedValue = selectedFilter.options[selectedFilter.selectedIndex].value;
            console.log(selectedValue);
        };
        selectedFilter.addEventListener('change', handleChange);
        return () => {
            selectedFilter.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <button className='btn-filter' onClick={filterBtn}>Filtrar</button>
            <select id='select-filter' name='filter' className='btn-filter'>
                <option value='price'>Precio</option>
                <option value='year'>Año</option>
                <option value='editorial'>Editorial</option>
            </select>
        </div>
    )
};

export default Filter;