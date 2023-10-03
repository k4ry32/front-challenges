import Link from "next/link";
import Image from "next/image";
import { Epilogue } from 'next/font/google';
import { IoMdArrowRoundBack } from 'react-icons/io';

const epilogue = Epilogue({ subsets: ['latin'], weight: ['500', '700'] });

const IntroPage = () => {
    
    return(
        <div className={`min-h-screen flex flex-col place-items-center p-5 ${epilogue.className} text-black`}>
            <Link href={'/'} className="flex flex-row self-start items-center text-white">
                <IoMdArrowRoundBack className="text-xl"/>
                <p className="text-xl ml-2"> Volver </p>
            </Link>

            <div className="flex flex-col w-[1440px] bg-[#fafafa] shadow-xl my-auto">
                <div className="flex flex-row m-7 justify-between text-[#696969] text-sm">
                    <div className="flex flex-row gap-10">
                        <div className="flex items-center mr-10">
                            <Image src="/images/intro-section-page/logo.svg" width={82} height={20} alt="logo" />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <p>Features</p>
                            <Image src="/images/intro-section-page/icon-arrow-down.svg" width={10} height={10} alt="arrow" />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <p>Company</p>
                            <Image src="/images/intro-section-page/icon-arrow-down.svg" width={10} height={10} alt="arrow" />
                        </div>
                        <div className="flex items-center">
                            <p>Careers</p>
                        </div>
                        <div className="flex items-center">
                            <p>About</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-10">
                        <div className="flex items-center">
                            <p>Login</p>
                        </div>
                        <div className="border-2 border-[#696969] rounded-2xl px-5 py-2">
                            <p>Register</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-[78%] mx-auto my-10 justify-between">
                    <div className="py-20">
                        <p className="text-[5rem] leading-none font-bold w-[530px]">Make remote work</p>
                        <p className="text-lg mt-12 text-[#696969] w-[450px]">
                            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. 
                        </p>
                        <button className="bg-[#141414] text-lg text-white px-7 py-4 rounded-2xl mt-12">Learn more</button>

                        <div className="flex flex-row mt-28 w-full gap-10 items-center">
                            <Image src="/images/intro-section-page/client-databiz.svg" className="w-28 h-5" width={100} height={20} alt="illustration" />
                            <Image src="/images/intro-section-page/client-audiophile.svg" className="w-20 h-9" width={100} height={20} alt="illustration" />
                            <Image src="/images/intro-section-page/client-meet.svg" className="w-24 h-5" width={100} height={20} alt="illustration" />
                            <Image src="/images/intro-section-page/client-maker.svg" className="w-20 h-6" width={100} height={20} alt="illustration" />
                        </div>
                    </div>
                    <div>
                        <Image src="/images/intro-section-page/image-hero-desktop.png" className="hidden lg:block" width={480} height={500} alt="illustration" />
                        <Image src="/images/intro-section-page/image-hero-mobile.png" className="block lg:hidden" width={500} height={500} alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage;