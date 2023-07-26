import React from 'react'
import { useState } from 'react';

function Hamburger() {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            {toggle && (
                <div className='top-[30px] left-[30px] fixed'>
                    <a href='' className='bg-[#333] rounded-full w-[60px] h-[60px] absolute flex flex-col justify-center items-center'>
                        <span className='w-[16px] h-[2px] bg-white'></span>
                        <span className='w-[16px] h-[2px] bg-white my-[4px]'></span>
                        <span className='w-[16px] h-[2px] bg-white'></span>
                    </a>
                    <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                    <span className='absolute rounded-[30px] bg-[#333] h-full'>

                    </span>
                </div>

            )}
        </>
    )
}

export default Hamburger