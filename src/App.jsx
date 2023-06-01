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
            margin:0px}`,
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
        <div className="p-8 bg-black h-screen grid  grid-rows-[min-content_1fr] gap-12">
            <h1 className="text-4xl font-bold mb-8 text-yellow-300 title">
                Frontend Builder.
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
