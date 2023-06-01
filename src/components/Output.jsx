function Output(props) {
    return (
        <div className="  shadow-2xl flex flex-col ">
            <div className=" grow grid grid-rows-[min-content_1fr] gap-2 p-2">
                <p className="text-yellow-300 border-b-[1px] border-yellow-300 w-max p-2">
                    Output
                </p>
                <iframe
                    className="bg-black w-full h-full"
                    srcDoc={props.srcDoc}
                ></iframe>
            </div>
        </div>
    );
}

export default Output;
