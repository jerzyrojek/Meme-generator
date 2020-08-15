import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { useClipboard} from "use-clipboard-copy";

export const UserGeneratedMeme = () => {

    const [copied, setCopied] = useState(false);
    const clipboard = useClipboard();
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get("url");

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    }

    return (
        <div>
            {url && <img src={url}/>}
            <button onClick={copyLink}>{copied ? "Link copied!" : "Copy Link"}</button>
            <button onClick={() => history.push("/")}>Choose another meme</button>
        </div>
    )
}