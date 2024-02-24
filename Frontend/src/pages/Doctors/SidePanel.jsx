import React from 'react'

const SidePanel = () => {
    const bookingHandler = async()=>{
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
                method: 'post',
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const data= await res.json()

            if(!res.ok){
                throw new Error(data.message + 'Please try agian')
            }

            if(data.session.url){
                window.location.href= data.session.url
            }

        } catch (err) {
            toast.error(err.message)
        }
    }
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold'>Ticket Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
            500 BOT
        </span>
      </div>
      <div className='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-headingColor'>
            Available Time Slots
        </p>
        <ul className='mt-3'>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                    Sunday
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00PM - 9:30PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                    Tuesday
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00PM - 9:30PM</p>
            </li>
            <li className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                    Sunday
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00PM - 9:30PM</p>
            </li>
        </ul>
      </div>
      <button className='btn px-2 w-full rounded-md'>Book an Appointment</button>
    </div>
  )
}

export default SidePanel
