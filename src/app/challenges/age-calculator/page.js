import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Poppins } from 'next/font/google';
import AgeCalculatorForm from "@/app/components/age-calculator-form";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '800'] });

const AgeCalculator = () => { 
   

    return (
        <div className={`min-h-screen flex flex-col place-items-center p-5 ${poppins.className}`}>
            <Link href={'/'} className="flex flex-row self-start items-center">
                <IoMdArrowRoundBack className="text-xl"/>
                <p className="text-xl ml-2"> Volver </p>
            </Link>

            <div className="flex place-content-center lg:bg-slate-100 lg:rounded-xl lg:p-16 lg:shadow-xl my-auto">
                <div className="lg:w-[940px] lg:min-h-[710px] lg:h-fit w-[380px] min-h-[480px] flex lg:flex-row flex-col rounded-3xl lg:rounded-3xl rounded-br-[100px] lg:rounded-br-[200px] bg-[#ffffff] shadow-xl">
                    <AgeCalculatorForm />
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator;