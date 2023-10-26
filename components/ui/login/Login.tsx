"use client";
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import GoogleButton from '../googlebutton/GoogleButton'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/rules'
import { ErrorMessage } from '@hookform/error-message';
import Typography from "@mui/material/Typography";

interface FormData {
  username: string
  password: string

}

export const Login = () => {
  const { data: session } = useSession()
  const [errorsApi, setErrorsApi] = useState<string>()
  const router = useRouter()

  useEffect(() => {
    // Redirect to '/' if the user is signed in and on a different page
    if (session && session.user && router.pathname == '/login') {
      router.push('/')
    }
  }, [session, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm<FormData>({resolver: yupResolver(login),reValidateMode:"onChange"})

  const onSubmit = async (data: FormData) => {
    const { username, password } = data
    // Handle login submission here
    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if(!responseNextAuth?.ok){
      setErrorsApi("Username or Password incorrect")
    }
  }

  return (
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
      <div className=' flex justify-center items-center w-full min-h-screen gap-24'>
        <div className='flex flex-col w-[90%] rounded-lg md:w-[40%] pb-10 gap-5'>
          <Link href='./'>
            <div className='py-4'>
              <Image src='/uplerlogo.png' alt={''} width={200} height={50} />
            </div>
          </Link>
          <form onSubmit={handleSubmit(onSubmit)} className='drop-shadow-md flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 xl:w-[80%] justify-center items-center'>
            <div className='flex flex-col px-8 pt-8 w-[100%]'>
              <h1 className='text-3xl  pb-6  md:font-medium'>Welcome !</h1>
              <h1 className='text-4xl  pb-6 font-bold md:font-semibold'>
                Log In
              </h1>
              <label
                htmlFor='username'
                className='text-xl py-4 font-semibold'
              >
                Email or Username
              </label>
              <input
                {...register('username')}
                type='text'
                placeholder='johndoe@example.com'
                name='username'
                className='py-3 px-3 border-2 rounded-md  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
              <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="username" />
              </Typography>
              <label htmlFor='password' className='text-xl py-4 font-semibold'>
                Password
              </label>
              <input
                {...register('password')}
                type='password'
                placeholder='Enter your password'
                name='password'
                className='py-3 px-3 border-2 mb-4 rounded-md  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
              <Typography variant="caption" color="red">
                <ErrorMessage errors={errors} name="password" />
              </Typography>
            </div>
            <div className='flex flex-col justify-center items-center px-8 mt-4 w-full pb-10 gap-4'>
              {/* <div className='flex items-center justify-between pb-6 w-full gap-2'>
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    {...register('rememberMe')}
                    className='accent-primary-color text-primary-color ml-1 hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                  Remember Me
                </label>
                <a
                  href='/forgot-password'
                  className='text-primary-color hover:underline'
                >
                  Forgot Password?
                </a>
              </div> */}

              <button
                type='submit'
                className='bg-primary-color h-14 w-full rounded-md text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
              >
                Login
              </button>
              {errorsApi && 
                <Typography variant="caption" color="red">
                  {errorsApi}
                </Typography>
              }
              <h3 className=' text-neutral-400'>or continue with</h3>
              <GoogleButton />
              <div className='mt-4'>
                <p className=''>
                  Don&apos;t have an account yet?{'  '}
                  <Link
                    href='/register'
                    className='text-primary-color hover:underline'
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>

          </form>
        </div>
        <div className='hidden md:flex'>
          <Image src='/globo1.png' alt={''} width={400} height={400} />
        </div>
      </div>
    </div>
  )
}
