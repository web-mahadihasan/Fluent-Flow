import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const VocabularyCard = ({vocabulary = {}, handleWhenToSay}) => {
    const {word, pronunciation, meaning, part_of_speech, difficulty, lesson_no } = vocabulary || {}
    const [cardColor, setCardColor] = useState("")

    useEffect(() =>{
        if(difficulty === "easy"){
            setCardColor("bg-[#8FD985] text-black")
        } else if(difficulty === "medium"){
            setCardColor("bg-[#D6EEFF] text-black")
        } else if(difficulty === "difficult"){
            setCardColor("bg-[#FFD9C2] text-black")
        }
    },[])

    const speakWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de';
        window.speechSynthesis.speak(utterance);
    }
    return (
        <div data-aos="fade-up" data-aos-duration="1000" onClick={()=> speakWord(word)} className={`border p-4 rounded-lg shadow-lg flex flex-col cursor-pointer ${cardColor}`}>
            <h4 className="text-lg font-medium p-2 rounded bg-[#a38ffd]/20">Word: {word}</h4>
            <div className="divider my-1"></div>
            <div className="ml-4 space-y-1 text-black/75 my-2 flex-1">
                <p className="font-medium text-lg">Meaning: <span className="font-normal">{meaning}</span></p>
                <p className="font-medium text-lg">Pronunciation: <span className="font-normal">{pronunciation}</span></p>
                <p className="font-medium text-lg">Part of speech: <span className="font-normal">{part_of_speech}</span></p>
                <p className="font-medium text-lg">Lesson: <span className="font-normal">{lesson_no}</span></p>
            </div>
            <Button onClick={()=>handleWhenToSay(vocabulary)} variant="filled" className="bg-[#a38ffd] ">When to say</Button>
        </div>
    );
};

export default VocabularyCard;

