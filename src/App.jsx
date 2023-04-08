import { useState, useEffect } from "react";
import Output from "./components/Output";
import CodeEditor from "./components/CodeEditor";

function App() {
    const [activeLanguage, setActiveLanguage] = useState(
        JSON.parse(localStorage.getItem("lastLanguage")) || "HTML"
    );
    const [content, setContent] = useState(
        JSON.parse(localStorage.getItem("lastCode")) || {
            html: "Hello World",
            css: `*{color:rgb(253 224 71);
    font-family: Gilroy;}`,
            js: "",
        }
    );
    const [srcDoc, setSrcDoc] = useState("");
    const updateOutput = () => {
        setSrcDoc(`<html>
        <body>${content.html}</body>
        <style>${content.css}</style>
        <script>${content.js}</script>
    </html>`);
        localStorage.setItem("lastCode", JSON.stringify(content));
        localStorage.setItem("lastLanguage", JSON.stringify(activeLanguage));
    };
    useEffect(() => {
        setSrcDoc(`<html>
        <body>${content.html}</body>
        <style>${content.css}</style>
        <script>${content.js}</script>
    </html>`);
    }, []);
    useEffect(() => {
        localStorage.setItem("lastLanguage", JSON.stringify(activeLanguage));
    }, [activeLanguage]);

    return (
        <div className="p-8 bg-[rgb(20,20,20)] h-screen grid  grid-rows-[min-content_1fr]">
            <h1 className="text-4xl font-bold mb-8 text-yellow-300 title">
                Frontend Builder
            </h1>
            <div className="grid grid-cols-2 gap-4">
                {/* <ActiveLanguage
                    active={activeLanguage}
                    changeLanguage={setActiveLanguage}
                    contentinside={content}
                    updateContent={setContent}
                    upOutput={updateOutput}
                /> */}
                <CodeEditor
                    active={activeLanguage}
                    changeLanguage={setActiveLanguage}
                    contentInside={content}
                    updateContent={setContent}
                    updateOutputProp={updateOutput}
                />

                <Output srcDoc={srcDoc} />
            </div>
        </div>
    );
}

export default App;
