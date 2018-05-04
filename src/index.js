import React from "react";
import { render } from "react-dom";

import { default as HelloWorld1 } from "./Task1/js/HelloWorld_Element";
import HelloWorld2 from "./Task1/js/HelloWorld_Component";
import HelloWorld3 from "./Task1/js/HelloWorld_Functional";
import HelloWorld4 from "./Task1/js/HelloWorld_PureComponent";

const styles = {
    textAlign: "center"
};

const App = () => (
    <div style={styles}>
        {HelloWorld1}
        <HelloWorld2 name="world 2" />
        <HelloWorld3 name="world 3" />
        <HelloWorld4 name="world 4" />
    </div>
);

render(<App />, document.getElementById("root"));
