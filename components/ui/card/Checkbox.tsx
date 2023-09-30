// Checkbox.tsx
import React from 'react'
import Image from 'next/image'

interface CheckboxProps {
  value: string
  price: number
  icon?: string
  label: string
  isChecked: boolean
  description: string
  onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  isChecked,
  onChange,
  price,
  description,
  icon
}) => {
  return isChecked ? (
    <div className=' border-3 border-primary-color flex flex-col w-full h-auto bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center'>
      <div>
        <label>
          <input
            className='h-8 w-8 accent-primary-color text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            type='checkbox'
            value={value}
            checked={isChecked}
            onChange={onChange}
          />
        </label>
        <Image
          className=' w-[150px] md:w-40 min-w-full'
          src='/uplerlogo.png'
          alt='global Logo'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className='text-2xl pb-5'>{label}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  ) : (
    <div className='flex flex-col w-full h-auto bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center'>
      <div className=''>
        <label>
          <input
            className='h-8 w-8 accent-primary-color'
            type='checkbox'
            value={value}
            checked={isChecked}
            onChange={onChange}
          />
        </label>
        <Image
          className=' w-[150px] md:w-40 min-w-full'
          src='/uplerlogo.png'
          alt='global Logo'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className='text-2xl pb-5'>{label}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Checkbox
