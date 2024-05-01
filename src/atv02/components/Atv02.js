import { useState } from "react";
import { Link } from 'react-router-dom';
import './../styles/Atv02.css';
import Total from "./Total";
import Men from './Men';
import Women from "./Women";

export default function Atv02() {
    const [countMen, setCountMen] = useState(0);
    const [countWomen, setCountWomen] = useState(0);
    const total = countMen + countWomen;

    function increaseMen() {
        setCountMen(countMen + 1);
    }
    function decreaseMen() {
        if (countMen > 0) {
            setCountMen(countMen - 1);
        }
    }
    function increaseWomen() {
        setCountWomen(countWomen + 1);
    }
    function decreaseWomen() {
        if (countWomen > 0) {
            setCountWomen(countWomen - 1);
        }
    }
    function reset(){
        setCountMen(0);
        setCountWomen(0);
    }
    
    return (
        <>
            <Link to="/">Retornar a página inicial</Link>
            <div className='container'>
                <div className='main-container'>
                    <div className='first-container'>
                        <Total
                            total={total}
                            reset={reset} 
                        />
                    </div>
                    <div className='container-both'>
                        <Men 
                            countMen={countMen}
                            increaseMen={increaseMen}
                            decreaseMen={decreaseMen} 
                        />
                        <Women
                            countWomen={countWomen}
                            increaseWomen={increaseWomen}
                            decreaseWomen={decreaseWomen} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}