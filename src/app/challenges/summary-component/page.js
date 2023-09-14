const SummaryComponent = () => {
    return (
        <div className="min-h-screen flex place-content-center place-items-center p-20">
            <div className="w-5/6 h-3/4 flex place-content-center bg-slate-200 rounded-xl p-4 shadow-xl">
                <div className="w-3/5 h-full flex lg:flex-row sm:flex-col m-2 rounded-3xl bg-[#ffffff]">
                    <div className="flex flex-col items-center w-1/2 bg-gradient-to-b from-[#7857ff] to-[#2e2be9] rounded-3xl text-center">
                        <p className="text-xl mt-8 mb-5"> Your Result </p>
                        <div className="w-32 h-32 p-7 rounded-full bg-gradient-to-b from-[#2e2be9] to-[#7857ff] text-center"
                            style={{background: "linear-gradient(180deg, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0) 90%);"}}
                        >
                            <p className="text-5xl"> 76 </p>
                            <p> of 100 </p>
                        </div>
                        <p className="mt-6"> Great </p>
                        <p className="mb-10 mt-3 mx-14">
                            You scored higher than 65% of the people who have
                            taken these test
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SummaryComponent;
