import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const toggleMode = () => {

        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success")
        } else {
            setMode('dark');
            document.body.style.backgroundColor = "#434b51";

            showAlert("dark mode has been enabled", "danger")
        }
    }
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert(
            {
                msg: message,
                type: type
            })
    }
    setTimeout(() => {
        setAlert(null);
    }, 2000)
    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="containe my-3">
                    <Switch>
                        <Route exact path="/">
                            <TextForm heading="Enter the text to analyze bellow" alert={showAlert} mode={mode} />
                        </Route>
                        <Route exact path="/about">
                            <About mode={mode} />
                        </Route>


                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
