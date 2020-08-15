import React, {useEffect, useState} from "react";
import SingleMeme from "./SingleMeme";
import { useHistory } from "react-router-dom";

const Meme = () => {
    const [memeTemplates, setMemeTemplates] = useState([]);
    const [chosenTemplate, setChosenTemplate] = useState(null);
    const [chosenMemeIndex, setChosenMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);

    const history = useHistory();

    const updateCaption = (e, i) => {
        const input = e.target.value || "";
        setCaptions(
            captions.map((caption, index) => {
                if (i === index) {
                    return input;
                } else {
                    return caption;
                }
            })
        )
    }

    const generateMeme = () => {
        const currentMeme = memeTemplates[chosenMemeIndex];
        const formData = new FormData();
        formData.append("username", "memesreactapp");
        formData.append("password", "gh9TTbnPN#^f72yF");
        formData.append("template_id", currentMeme.id);
        captions.forEach((caption, index) => formData.append(`boxes[${index}][text]`, caption))

        fetch("https://api.imgflip.com/caption_image", {
            method: "POST",
            body: formData
        }).then(response => {
            response.json().then(response => {
                history.push(`/generated?url=${response.data.url}`)
            })
        })
    };

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
                        <input onChange={(e) => updateCaption(e, i)} key={i}/>
                    ))
                }
                <button onClick={generateMeme}>Generate</button>
                <button onClick={() => {
                    setChosenTemplate(null);
                }
                }>Back
                </button>
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