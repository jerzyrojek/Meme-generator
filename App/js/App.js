import React from "react";
import Meme from "./Meme";
import {Switch, Route} from "react-router-dom";
import {UserGeneratedMeme} from "./UserGeneratedMeme";

const App = () => {
    return (
        <Switch>
            <Route exact path = "/">
                <Meme/>
            </Route>
            <Route path="/generated">
                <UserGeneratedMeme/>
            </Route>
        </Switch>
    )
}

export default App;