import React, { useState } from 'react'

const MultiFieldFormHandling = () => {

    const [form, setForm]  = useState({
        name:"",
        email:"",
        password:"",
        phone:""
    });


    const handleType = (e) =>{
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]:value
        })

    

    }

    const handleSubmit = () =>{


        console.log(form)

        setForm({
            name:"",
            email:"",
            phone:"",
            password:""
        })
    }


    return (
        <>



            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    <div>
                        <label for="email" className="block text-sm/6 font-medium text-gray-100">Name </label>
                        <div className="mt-2">
                            <input id="email" onChange={(e) => handleType(e)} type="name" name="name" value={form.name} required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="block text-sm/6 font-medium text-gray-100">Phone Number</label>
                        <div className="mt-2">
                            <input id="email" onChange={(e) => handleType(e)} type="number" name="phone" value={form.phone} required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
                        <div className="mt-2">
                            <input id="email" onChange={(e) => handleType(e)} type="email" name="email" value={form.email} required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" onChange={(e) => handleType(e)} value={form.password} type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
                    </div>


                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Not a member?
                        <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>




        </>
    )
}

export default MultiFieldFormHandling;