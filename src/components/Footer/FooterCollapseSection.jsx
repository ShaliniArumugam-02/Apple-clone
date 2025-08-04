import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterCollapseSection = ({title,links}) => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='border-b border-gray-300 py-2'>
        <button onClick= {()=> setOpen(!open)} className='w-full justify-between items-center text-left text-sm font-semibold text-black'>
            {title}
            {open ?<IoIosArrowUp /> : <IoIosArrowDown /> }
            {open && (
                <ul className='mt-2 space-y-5 text-gray-600 text-xs pl-2'>
                    {links.map((item,index)=> (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}


        </button>

    </div>
    </>
  )
}

export default FooterCollapseSection