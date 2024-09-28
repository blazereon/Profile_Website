const dynamicText = document.querySelector("p span")
const wordArray = ["a Person", "a Designer", "a 2D Animator", "a Developer", "an Editor", "[REDACTED]"];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const TypingFunction = () => {
    const currentWord = wordArray[wordIndex];
    const currentCharacter = currentWord.substring(0, characterIndex);
    dynamicText.textContent = currentCharacter;
    dynamicText.classList.add("stay");
 
    if(!isDeleting && (characterIndex < currentWord.length)){
        characterIndex++;
        setTimeout(TypingFunction, 200);
    }
    else if (isDeleting && (characterIndex > 0)){
        characterIndex--;
        setTimeout(TypingFunction, 100);
    }
    else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stay");
        wordIndex = !isDeleting ? (wordIndex + 1) % wordArray.length : wordIndex;
        setTimeout(TypingFunction, 1200);
    }

}

TypingFunction();