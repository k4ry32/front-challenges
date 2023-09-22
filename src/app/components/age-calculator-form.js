'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";


const AgeCalculatorForm = () => {
    const [birthdate, setBirthdate] = useState(null);
    const [years, setYears] = useState(null);
    const [months, setMonths] = useState(null);
    const [days, setDays] = useState(null);

    const { register, handleSubmit } = useForm();

    const validateForm = () => {
        
    }

    useEffect(() => {
        
    }, [birthdate]);

    return (
        <div className="flex flex-col w-full">           
                <form name="age" onSubmit={handleSubmit(validateForm)}>
                    <div className="flex flex-col relative">
                        <div className="flex flex-row mx-16 mt-16 pb-14 gap-9 text-gray-600 border-b-2 border-b-neutral-300">
                            <div className="flex flex-col">
                                <p className="text-base font-semibold mb-3"> DAY </p>
                                <input className="border-2 border-gray-300 w-44 rounded-md p-5 text-3xl font-semibold text-[#5427b4] outline-none focus:border-1 focus:border-[#5a2ac0]" type="number" placeholder="DD" 
                                    {...register('day', { required: true, validate: (value) => value > 0 && value < 32 })}/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-base font-semibold mb-3"> MONTH </p>
                                <input className="border-2 border-gray-300 w-44 rounded-md p-5 text-3xl font-semibold text-[#141414] outline-none focus:border-1 focus:border-[#5a2ac0]" type="number" placeholder="MM" 
                                    {...register('month', { required: true, validate: (value) => value > 0 && value < 13 })}/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-base font-semibold mb-3"> YEAR </p>
                                <input className="border-2 border-gray-300 w-44 rounded-md p-5 text-3xl font-semibold text-[#141414] outline-none focus:border-1 focus:border-[#5a2ac0]" type="number" placeholder="YYYY" 
                                    {...register('year', { required: true, validate: (value) => value > 1900 && value < 2023 })}/>
                            </div>
                        </div>
                        <button className="absolute right-12 top-44 bg-[#854dff] w-28 h-28 rounded-full p-7 hover:bg-[#141414]"><Image src={'/images/age-calculator/icon-arrow.svg'} alt='icon' width={50} height={50} /></button>
                    </div>
                </form>
            
            <div className="flex flex-col mx-16 my-12 text-[#141414] text-[7rem] font-extrabold leading-[1.10] italic">
                <div className="flex flex-row">
                    <p className="text-[#854dff] mr-1"> {years?? '--'} </p>
                    <p> years </p>
                </div>
                <div className="flex flex-row">
                    <p className="text-[#854dff] mr-1"> {months?? '--'} </p>
                    <p> months </p>
                </div>
                <div className="flex flex-row">
                    <p className="text-[#854dff] mr-1"> {days?? '--'} </p>
                    <p> days </p>
                </div>
            </div>
        </div>        
    )
}

export default AgeCalculatorForm;