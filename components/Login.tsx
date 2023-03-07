'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#4ca083] h-screen flex flex-col items-center justify-center text-center">
        <Image
            src="https://firebasestorage.googleapis.com/v0/b/chatgpt-clone-767f1.appspot.com/o/chatgptLogo.jpg?alt=media&token=8c6c4aec-cd9f-4afc-946f-7d0910d12e5f"
            width={300}
            height={300}
            alt="logo"
        />
        <button onClick={() => signIn('google')} className="text-white font-bold text-3xl animate-pulse">Sign in to use ChatGPT</button>

    </div>
  )
}

export default Login