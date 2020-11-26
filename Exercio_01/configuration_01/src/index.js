import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


cons App = () => {

    return (
        <div className="App">
            Hello World
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<app />, rootElement)