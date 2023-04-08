import { useState } from "react";

function NewActiveLanguage(props) {
    const [displayContent, setDisplayContent] = useState(
        props.contentInside[props.active.toLowerCase()]
    );
    let placeHolder = props.active + " code goes here";
    Array.from(document.querySelectorAll("button")).forEach((button) => {
        button.innerHTML == props.active
            ? (button.className =
                  "text-yellow-300 p-2 pb-0 w-14 bg-[rgb(20,20,20)] border-[1px] border-b-0 border-yellow-300 border-dashed")
            : (button.className =
                  "text-yellow-300 p-2 pb-0 w-14 border-b-[1px] border-yellow-300 border-dashed");
    });
    const manageUpdatingContent = (e) => {
        setDisplayContent(e.target.value);
        let newContent = props.contentInside;
        newContent[props.active.toLowerCase()] = e.target.value;
        props.updateContent(newContent);
        props.updateOutputProp();
    };

    return (
        <div className="flex">
            <div className="grid grid-rows-[min-content_1fr] grow bg-[rgb(25,25,25)] p-2">
                <div className="flex">
                    <button
                        onClick={() => {
                            props.changeLanguage("HTML");
                            setDisplayContent(props.contentInside.html);
                        }}
                    >
                        HTML
                    </button>
                    <button
                        onClick={() => {
                            props.changeLanguage("CSS");
                            setDisplayContent(props.contentInside.css);
                        }}
                    >
                        CSS
                    </button>
                    <button
                        onClick={() => {
                            props.changeLanguage("Js");
                            setDisplayContent(props.contentInside.js);
                        }}
                    >
                        Js
                    </button>
                    <div className="grow border-b-[1px] border-yellow-300 border-dashed"></div>
                </div>
                <textarea
                    className="bg-[rgb(20,20,20)] p-2 pt-1 border-[1px] border-t-0 border-yellow-300 border-dashed text-yellow-300 outline-none"
                    placeholder={placeHolder}
                    value={displayContent}
                    onChange={manageUpdatingContent}
                ></textarea>
            </div>
        </div>
    );
}

export default NewActiveLanguage;
