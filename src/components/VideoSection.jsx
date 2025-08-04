import React from 'react'

const VideoSection = () => {
  return (
   <>
   <section className='mt-20 w-full h-auto p-10'>
    <div className='flex justify-between mb-7'>
        <div><h1 className='text-6xl font-bold'>Mac</h1></div>
        <div>
            <h5 className='font-semibold text-xl'>If you can dream it,</h5> 
        <h5 className='font-semibold text-xl'  >Mac can do it.</h5>
        </div>  
    </div>
    <div>
         <video autoPlay
    loop
    muted
    playsInline
    className='w-full b0rder rounded-3xl'
    >
        <source src='/Video/macbook.mp4' type='video/mp4'/>
    </video>
    </div>
   

    
   </section>
   </>
  )
}

export default VideoSection;