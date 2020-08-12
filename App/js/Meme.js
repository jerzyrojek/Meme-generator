import React, {useEffect, useState} from "react";
import SingleMeme from "./SingleMeme";


const Meme = () => {
    const [memeTemplates, setMemeTemplates] = useState([]);
    const [chosenTemplate, setChosenTemplate] = useState(null);
    const [chosenMemeIndex, setChosenMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(response => response.json().then(response => {
            const memeEmptyTemplates = response.data.memes;
            setMemeTemplates(memeEmptyTemplates);
        }));
    }, []);

    useEffect(() => {
        if (memeTemplates.length) {
            setCaptions(Array(memeTemplates[chosenMemeIndex].box_count).fill(""));
        }
    }, [chosenMemeIndex, memeTemplates]);


    return (
        <>
            <h1 style={{textAlign: "center"}}>Choose a meme by clicking on it</h1>
            {chosenTemplate &&
            <>
                <SingleMeme templates={chosenTemplate}/>
                {
                        captions.map((caption, i) => (
                            <input key={i}/>
                        ))
                }
                <button onClick={() => (console.log("klik"))}>Generate</button>
                <button onClick={() => {
                    setChosenTemplate(null);
                }
                }>Back</button>
            </>
            }

            {!chosenTemplate && memeTemplates.map((memeTemplate, i) => {

                return (
                    <SingleMeme key={memeTemplate.id} templates={memeTemplate}
                                onClick={() => {
                                    setChosenMemeIndex(i);
                                    setChosenTemplate(memeTemplate);
                                }}/>
                )
            })}
        </>

    );
}


export default Meme;