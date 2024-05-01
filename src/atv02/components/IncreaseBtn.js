import './../styles/IncreaseBtn.css';
const btnIncrease = {
    nome: 'Aumentar',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/582/976/original/button-plus-icon-vector.jpg'
}

export default function IncreaseBtn( {increase} ) {
    return (
        <img
            className='increase'
            src={btnIncrease.imageUrl} 
            alt={btnIncrease.nome}
            onClick={increase} 
        />
    );
}