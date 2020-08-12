import React from "react";

const SingleMeme = ({templates, onClick}) => {
    return (
        <img style={{
            border: "1px solid black",
            maxWidth: 500,
            maxHeight: 500,
            margin: "auto",
            marginTop: 50,
            display: "block",
            boxShadow: "0 0 10px black"
        }}
             key={templates.id}
             alt={templates.name}
             src={templates.url}
             onClick={onClick}
        />
    )
}

export default SingleMeme;