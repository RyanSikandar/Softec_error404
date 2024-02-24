"use client"
import React from 'react'
import CountUp from 'react-countup';
const Counter = ({ start, end,title }) => {
    return (
        <CountUp start={start} end={end} delay={1}>
            {({ countUpRef }) => (
                <div className='flex flex-col items-center min-w-64 gap-4'>
                <p>{title}</p>
                    <div><span ref={countUpRef} />+</div>
                </div>
            )}
        </CountUp>
    )
}

export default Counter