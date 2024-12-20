import React from 'react'

const Stripe = ({value}) => {
  return (
    <div className="w-[17%] px-3 py-5 border-t-[1px] border-r-[1px] border-b-[1px] bg-zinc-700 flex justify-between items-center">
      <img className=' h-8 w-30' src={value.imageUrl} />
      <span>{value.number}</span>
    </div>
  );
}

export default Stripe
