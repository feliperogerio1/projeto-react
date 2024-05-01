import './../styles/DecreaseBtn.css';
const btnDecrease = {
    nome: 'Diminuir',
    imageUrl: 'https://static.thenounproject.com/png/261368-200.png'
}

export default function DecreaseBtn( {decrease} ) {
    return (
        <img
            className='decrease'
            src={btnDecrease.imageUrl}
            alt={btnDecrease.nome}    
            onClick={decrease} 
        />
    );
}