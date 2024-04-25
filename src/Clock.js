import { useState, useEffect } from "react";

function Clock() {
    const [clock, updateClock] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            updateClock((clock) => clock = new Date());
        }, 1000);
    });

    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }

    return (
        <div>
            <h1> 
                Hoje é {currentDate.toLocaleDateString('pt-BR', options)}. 
            </h1>
            <h1>
                Agora são {clock.toLocaleTimeString()}.
            </h1>
        </div>);
}

export default Clock;