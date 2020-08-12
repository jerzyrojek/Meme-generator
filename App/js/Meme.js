import React, {useEffect, useState} from "react";
import SingleMeme from "./SingleMeme";


const Meme = () => {
    const [memeTemplates, setMemeTemplates] = useState([]);
    const [chosenTemplate, setChosenTemplate] = useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(response => response.json().then(response => {
            const memeEmptyTemplates = response.data.memes;
            setMemeTemplates(memeEmptyTemplates);
        }));
    }, []);

    return (
        <>
            {chosenTemplate && <SingleMeme templates={chosenTemplate}/>}
            {!chosenTemplate && memeTemplates.map((memeTemplate) => {
                return (
                   <SingleMeme key={memeTemplate.id} templates = {memeTemplate}
                         onClick={() => {
                             setChosenTemplate(memeTemplate);
                         }}
                         />
                )
            })}
        </>

    );
}


export default Meme;