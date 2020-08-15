import React from "react";

const SingleMeme = ({templates, onClick}) => {
    return (
        <img
             key={templates.id}
             alt={templates.name}
             src={templates.url}
             onClick={onClick}
        />
    )
}

export default SingleMeme;