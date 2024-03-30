import React from 'react'
import { Link } from 'react-router-dom'
import SocialAuthentication from '../SocialAuthentication/SocialAuthentication'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

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
              <Button text="Login"/>
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
