import React, { useEffect, useState} from "react";


const Meme = () => {
    const [memeTemplates, setMemeTemplates] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(response => response.json().then(response => {
            const memeEmptyTemplates = response.data.memes;
            setMemeTemplates(memeEmptyTemplates);
        }));
    }, []);

    return(
        <>
            {memeTemplates.map((memeTemplate) => {
                return (
                    <img style={{border:"1px solid black", maxWidth:500,maxHeight:500, margin:"auto", marginTop:50, display:"block", boxShadow:"10 0 10 black"}} key={memeTemplate.id} alt={memeTemplate.name} src={memeTemplate.url}/>
                )
            })}
            </>
    )
}


export default Meme;