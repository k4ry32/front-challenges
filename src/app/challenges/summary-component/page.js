import Image from "next/image";
import Link from "next/link";
import { Hanken_Grotesk } from 'next/font/google';
import { data } from './data.json';
import { IoMdArrowRoundBack } from 'react-icons/io';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

const SummaryComponent = () => {

    const colors = [
        { bg: 'flex flex-row w-full p-3.5 rounded-xl mb-4 bg-[#ffebeb] justify-between', text: 'ml-2 lg:text-lg text-base font-semibold text-[#ff5757]' },
        { bg: 'flex flex-row w-full p-3.5 rounded-xl mb-4 bg-[#fff4e0] justify-between', text: 'ml-2 lg:text-lg text-base font-semibold text-[#ffb01f]' },
        { bg: 'flex flex-row w-full p-3.5 rounded-xl mb-4 bg-[#e0faf4] justify-between', text: 'ml-2 lg:text-lg text-base font-semibold text-[#00bd91]' },
        { bg: 'flex flex-row w-full p-3.5 rounded-xl mb-4 bg-[#e5e7fb] justify-between', text: 'ml-2 lg:text-lg text-base font-semibold text-[#1125d4]' },
    ]

    return (
        <div className={`min-h-screen flex flex-col place-items-center p-5 ${hankenGrotesk.className}`}>
            <Link href={'/'} className="flex flex-row self-start items-center">
                <IoMdArrowRoundBack className="text-xl"/>
                <p className="text-xl ml-2"> Volver </p>
            </Link>
            <div className="flex place-content-center bg-slate-100 sm:rounded-xl sm:p-16 shadow-xl my-auto">
                <div className="lg:w-[740px] lg:h-[510px] w-[380px] h-[800px] flex lg:flex-row flex-col lg:rounded-3xl bg-[#ffffff] shadow-xl">
                    <div className="flex flex-col items-center lg:w-1/2 w-full bg-gradient-to-b from-[#7857ff] to-[#2e2be9] lg:rounded-3xl rounded-b-3xl text-center">
                        <p className="lg:text-2xl text-lg font-bold lg:mt-8 lg:mb-10 mt-6 mb-6 text-[#c8c7ff]"> Your Result </p>
                        <div className="flex flex-col place-content-center lg:w-48 lg:h-48 w-[8.5rem] h-[8.5rem] rounded-full bg-gradient-to-b from-[#2e2be9] to-[#7857ff] text-center"
                            style={{background: "linear-gradient(180deg, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0) 100%);"}}
                        >
                            <p className="lg:text-7xl text-[3.5rem] font-bold leading-tight"> 76 </p>
                            <p className='lg:text-lg text-base lg:my-2 font-semibold text-slate-400'> of 100 </p>
                        </div>
                        <p className="mt-6 lg:text-3xl text-2xl font-semibold"> Great </p>
                        <p className="lg:mb-10 lg:mt-3 mb-9 mt-2 lg:mx-16 mx-12 lg:text-lg text-base text-[#c8c7ff]">
                            You scored higher than 65% of the people who have
                            taken these test
                        </p>
                    </div>

                    <div className='px-10 lg:w-1/2 w-full'>
                        <p className="lg:text-2xl text-lg font-bold lg:mt-8 lg:mb-8 mt-6 mb-5 text-slate-900">Summary</p>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className={colors[index].bg}>
                                    <div className="flex flex-row">
                                        <Image src={item.icon} alt='icon' width={20} height={20} />
                                        <p className={colors[index].text}> {item.category} </p>
                                    </div>  
                                    <div className="flex flex-row">
                                        <p className="ml-2 lg:text-lg text-base font-bold text-[#303b5a]"> {item.score} </p>      
                                        <p className="ml-2 lg:text-lg text-base font-bold text-slate-400"> / 100 </p>  
                                    </div>                                                                    
                                </div>
                            )
                        })}
                        <button className="bg-[#303b5a] hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] rounded-full w-full text-lg font-bold lg:mt-6 lg:mb-5 mt-2 lg:p-4 p-3.5 text-[#ebf1ff]">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryComponent;
