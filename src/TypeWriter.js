import React, { useState, useEffect } from "react";

function Typewriter() {
    const text = "Conheça a Fatec";
    const [displayedText, updateDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        let isTyping = true;
        let timeoutId;

        function typeOrEraseText() {
            if (isTyping) {
                if (index <= text.length) {
                    updateDisplayedText(text.slice(0, index));
                    index++;
                    timeoutId = setTimeout(typeOrEraseText, 250);
                } else {
                    isTyping = false;
                    index--;
                    timeoutId = setTimeout(typeOrEraseText, 50);
                }
            } else {
                if (index >= 0) {
                    updateDisplayedText(text.slice(0, index));
                    index--;
                    timeoutId = setTimeout(typeOrEraseText, 50);
                } else {
                    isTyping = true;
                    index = 0;
                    timeoutId = setTimeout(typeOrEraseText, 250);
                }
            }
        }

        timeoutId = setTimeout(typeOrEraseText, 250);

        return () => clearTimeout(timeoutId);
    }, []);

    return <h1>{displayedText}</h1>;
}

export default Typewriter;