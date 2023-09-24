'use client';
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCountUp } from 'react-countup';

dayjs.extend(duration);
dayjs.extend(customParseFormat);

const AgeCalculatorForm = () => {
    const defaultDate = { years: null, months: null, days: null };
    const [date, setDate] = useState(defaultDate);

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const { start: startYearsCounter } = useCountUp({
        ref: 'yearsCounter',
        start: 0,
        end: date.years || 0,
        duration: 5,
        delay: 0.1
    });
    const { start: startMonthsCounter } = useCountUp({
        ref: 'monthsCounter',
        start: 0,
        end: date.months || 0,
        duration: 5,
        delay: 0.1
    });
    const { start: startDaysCounter } = useCountUp({
        ref: 'daysCounter',
        start: 0,
        end: date.days || 0,
        duration: 5,
        delay: 0.1
    });

    const currentYear = dayjs().year();

    const calculateAge = (data) => {
        let dateInput = `${data.year}-${data.month.length === 1 ? `0${data.month}` : data.month}-${data.day}`;
        let validDate = dayjs(dateInput, 'YYYY-MM-DD', true).isValid();
        let futureDate = dayjs(dateInput).isAfter(dayjs());

        if(!validDate) {
            setError('day', {
                message: 'Must be a valid date'
            });
            setDate(defaultDate);
            
            return;
        }
        
        if(futureDate) {
            setError('year', {
                message: 'Must be in the past'
            });

            return;
        }
        
        let y = dayjs().year() - data.year;
        let m = (dayjs().month() + 1) - data.month;
        let d = dayjs().date() - data.day;

        setDate({ years: y, months: m, days: d });
        startYearsCounter();
        startMonthsCounter();
        startDaysCounter();
    }

    return (
        <div className="flex flex-col w-full">   
            <form name="age" onSubmit={handleSubmit(calculateAge)}>
                <div className="flex flex-col">
                    <div className="flex flex-row mx-7 lg:mx-16 mt-12 lg:mt-16 pb-16 lg:pb-14 gap-5 lg:gap-9 text-[#716f6f] border-b-2 border-b-neutral-300">
                        <div className="flex flex-col">
                            <p className={`text-sm lg:text-base font-semibold mb-3 ${errors.day && 'text-red-700'}`}> DAY </p>
                            <input className={`border-2 ${errors.day ? 'border-red-700' : 'border-gray-300'} w-24 lg:w-44 rounded-md p-3 lg:p-5 text-xl lg:text-3xl font-semibold text-black outline-none focus:border-1 focus:border-[#5a2ac0]`} type="number" placeholder="DD" 
                                {...register('day', { required: 'This field is required', min: { value: 1, message: 'Must be a valid day'}, max: { value: 31, message: 'Must be a valid day'} })}/>
                                {
                                    errors.day && <p className="text-red-700 italic mt-2">{errors.day.message}</p>
                                }
                        </div>
                        <div className="flex flex-col">
                            <p className={`text-sm lg:text-base font-semibold mb-3 ${errors.month && 'text-red-700'}`}> MONTH </p>
                            <input className={`border-2 ${errors.month ? 'border-red-700' : 'border-gray-300'} w-24 lg:w-44 rounded-md p-3 lg:p-5 text-xl lg:text-3xl font-semibold text-black outline-none focus:border-1 focus:border-[#5a2ac0]`} type="number" placeholder="MM" 
                                {...register('month', { required: 'This field is required', min: { value: 1, message: 'Must be a valid month'}, max: { value: 12, message: 'Must be a valid month'} })}/>
                                {
                                    errors.month && <p className="text-red-700 italic mt-2">{errors.month.message}</p>
                                }
                        </div>
                        <div className="flex flex-col">
                            <p className={`text-sm lg:text-base font-semibold mb-3 ${errors.year && 'text-red-700'}`}> YEAR </p>
                            <input className={`border-2 ${errors.year ? 'border-red-700' : 'border-gray-300'} w-24 lg:w-44 rounded-md p-3 lg:p-5 text-xl lg:text-3xl font-semibold text-black outline-none focus:border-1 focus:border-[#5a2ac0]`} type="number" placeholder="YYYY" 
                                {...register('year', { required: 'This field is required', min: { value: 1, message: 'Must be a valid year'}, max: { value: currentYear, message: 'Must be a valid year'} })}/>
                                {
                                    errors.year && <p className="text-red-700 italic mt-2">{errors.year.message}</p>
                                }
                        </div>                            
                    </div>     
                    <div className="relative">
                        <button className="absolute right-40 lg:right-12 top-[-30px] lg:top-[-50px] bg-[#854dff] w-16 lg:w-[6.5rem] h-16 lg:h-[6.5rem] rounded-full hover:bg-[#141414]">
                            <Image src={'/images/age-calculator/icon-arrow.svg'} className="mx-auto w-7 lg:w-12 h-7 lg:h-12" alt='icon' width={46} height={46} />
                        </button>
                    </div>
                </div>
            </form>
            
            <div className="flex flex-col mx-7 lg:mx-16 my-14 lg:my-12 text-[#141414] text-6xl lg:text-[7rem] font-extrabold leading-[1.10] italic">
                <div className="flex flex-row">
                    {
                        date.years != null ?
                        <p id="yearsCounter" className="text-[#854dff] mr-2">0</p>
                        :
                        <p className="text-[#854dff] mr-2"> -- </p>
                    }
                    <p> years </p>
                </div>
                <div className="flex flex-row">
                    {
                        date.months != null ?
                        <p id="monthsCounter" className="text-[#854dff] mr-2">0</p>
                        :
                        <p className="text-[#854dff] mr-2"> -- </p>
                    }
                    <p> months </p>
                </div>
                <div className="flex flex-row">
                    {
                        date.days != null ?
                        <p id="daysCounter" className="text-[#854dff] mr-2">0</p>
                        :
                        <p className="text-[#854dff] mr-2"> -- </p>
                    }
                    <p> days </p>
                </div>
            </div>
        </div>        
    )
}

export default AgeCalculatorForm;