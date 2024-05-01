import './../styles/Men.css';
import IncreaseBtn from "./IncreaseBtn";
import DecreaseBtn from "./DecreaseBtn";

export default function Men( {countMen, increaseMen, decreaseMen} ) {
    const imageMan = {
        name: 'Man',
        imageUrl: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png'
    }
    
    return (
        <div className='men-container'>
            <img 
                className='men-img'
                src={imageMan.imageUrl}
                alt={imageMan.name} 
            />
            <div className='btn-container'>
                <IncreaseBtn increase={increaseMen} />
                <DecreaseBtn decrease={decreaseMen} />
            </div>
            <h2>Homens</h2>
            <div className='count-container'>
                { countMen }
            </div>
        </div>
    );
}