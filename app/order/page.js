'use client' ;
import { useActionState } from 'react';
import { useFormState } from 'react-dom';


import Submit from "@/components/button/submit";
import { postOrderData } from "@/helpers/post";

export default function bla () {

    const [state , formAction] = useFormState(postOrderData,{msg:null}) ;

    return <div>
{state.msg && <p> {state.msg} </p>}
        <form className=" p-4 bg-slate-300" action={formAction}>

            <p className=" p-1 bg-slate-300 rounded">
                <label className="px-4" htmlFor="name">name</label>             
                <input className=" w-3/4 border border-gray-500 rounded-md" type="text" id="name" name="name"  />
            </p>

            <p className=" p-1 bg-slate-300 rounded">
                <label className="px-4" htmlFor="title">title</label>             
                <input className=" w-3/4 border border-gray-500 rounded-md" type="text" id="title" name="title"  />
            </p>

            <p className=" p-1 bg-slate-300 rounded">
                <label className="px-4" htmlFor="date">date</label>             
                <input className=" w-3/4 border border-gray-500 rounded-md" type="date" id="date" name="date"  />
            </p>

            <p className=" p-1 bg-slate-300 rounded">
                <label className="px-4" htmlFor="number">number</label>             
                <input className=" w-3/4 border border-gray-500 rounded-md" type="file" id="number" name="number"  />
            </p>
            

            <div className=" flex justify-end">
                <Submit />
            </div>

        </form>

    </div>
}