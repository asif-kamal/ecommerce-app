import React, { useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css' // Add this import
import './PriceFilter.css'

const PriceFilter = () => {
  const [value, setValue] = useState([0, 150]) // Example min/max values

  return (
    <div>
      <p className='text-[16px] text-black mt-5'>Price</p>
      <RangeSlider
        className={'custom-range-slider'}
        min={0}
        max={2000}
        value={value}
        onInput={setValue}
      />
      <div className="mt-2 text-sm">
        ${value[0]} - ${value[1]}
      </div>
      <div className='flex justify-between'>
        <input type='text' value={`$ ${value[0]}`} className='max-w-[50%] border rounded-lg w-[25%] mt-4 p-2' placeholder='min' />
        <input type='text' value={`$ ${value[1]}`} className='max-w-[50%] border rounded-lg w-[25%] mt-4 p-2' placeholder='max' /> 
      </div>
    </div>
  )
}

export default PriceFilter