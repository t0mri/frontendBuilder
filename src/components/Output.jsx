function Output(props) {
    return (
        <div className="  shadow-2xl flex flex-col ">
            <div className=" grow grid grid-rows-[min-content_1fr] gap-2 p-2  bg-[rgb(25,25,25)]">
                <p className="text-yellow-300">Output</p>
                <iframe
                    className="bg-[rgb(20,20,20)] w-full h-full"
                    srcDoc={props.srcDoc}
                ></iframe>
            </div>
        </div>
    );
}

export default Output;
