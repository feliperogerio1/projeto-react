import './../styles/Total.css';

export default function Total( { total, reset }) {
    const resetBtn = {
        nome: 'reset',
        imageUrl: 'https://cdn-icons-png.freepik.com/512/2618/2618245.png'
    }

    return (
        <>
            <div className='inner-container'>
                <h1>Total</h1>
                <div className='count-total-container'> 
                    { total } 
                </div>
            </div>
            <img 
                className='reset-btn'
                src={resetBtn.imageUrl}
                alt={resetBtn.nome}
                onClick={reset}
            />
        </>
    );
    
}