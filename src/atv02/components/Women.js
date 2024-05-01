import './../styles/Women.css';
import IncreaseBtn from "./IncreaseBtn";
import DecreaseBtn from "./DecreaseBtn";

export default function Women( {countWomen, increaseWomen, decreaseWomen} ) {
    const imageWoman = {
        name: 'Woman',
        imageUrl: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
    }
    
    return (
        <div className='women-container'>
            <img 
                className='women-img'
                src={imageWoman.imageUrl}
                alt={imageWoman.name} 
            />
            <div className='btn-container'>
                <IncreaseBtn increase={increaseWomen} />
                <DecreaseBtn decrease={decreaseWomen} />
            </div>
            <h2>Mulheres</h2>
            <div className='count-container'>
                { countWomen }
            </div>
        </div>
    );
}