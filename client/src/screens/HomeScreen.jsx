import React from "react";
import { useParams } from "react-router-dom";
import Home from "../components/Home/Home";
import Problems from "../components/Problems/Problems";

function HomeScreen() {
    const { type } = useParams();
    let Component = <Home />;
    if (type == "problems") Component = <Problems />;
    // else if (type == "contests") Component = <Contests />;
    // else if (type == "profile") Component = <Profile />;

    return <div className="w-full h-3/4">{Component}</div>;
}

export default HomeScreen;
