import React, { useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css' // Add this import

const PriceFilter = () => {
  const [value, setValue] = useState([0, 2000]) // Example min/max values

  return (
    <div>
      <p className='text-[16px] text-black mt-5'>Price</p>
      <RangeSlider
        min={0}
        max={2000}
        value={value}
        onInput={setValue}
      />
      <div className="mt-2 text-sm">
        ${value[0]} - ${value[1]}
      </div>
    </div>
  )
}

export default PriceFilter