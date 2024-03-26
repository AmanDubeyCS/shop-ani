import React from 'react'
import { Link } from 'react-router-dom'
import SocialAuthentication from '../SocialAuthentication/SocialAuthentication'
import TextInput from '../TextInput/TextInput'

const UserLogin = () => {
  return (
    <div className="container w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
      <div className="w-full md:w-[50%] relative z-0 flex flex-col min-w-0 break-words ">
        <div className="p-6 mb-0 text-center font-semibold text-lg bg-white border-b-0 rounded-t-2xl">
          <h5>Login</h5>
        </div>
        <SocialAuthentication Auth="Sign In" />
        <div className="flex-auto p-6">
          <form role="form text-left ">
            <div className="mb-4 flex flex-col gap-4">
            <TextInput name="Email" placeholder="Email" type="email" />
            <TextInput name="password" placeholder="Password" type="password" />
            </div>

            <div className="text-center">
              <button
                className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-red-400 to-red-500  hover:text-white"
                type="button"
              >
                Login
              </button>
            </div>
            <p className="mt-4 mb-0 leading-normal text-sm">
              Don't have an account?{" "}
              <Link to={"/registration"}><span className="font-bold text-slate-700">Register</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    )
}

export default UserLogin
