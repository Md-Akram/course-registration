import React from 'react'

export default function Card({ course, handleClick }) {
    const { img, course_name, details, price, credit_hour } = course
    return (

        <div className="card bg-base-100 shadow-xl max-w-sm md:max-w-lg">
            <figure className="p-4">
                <img src={img} alt={course_name} className="rounded-xl w-full h-40" />
            </figure>
            <div className="card-body p-4 pt-0">
                <h2 className="card-title">{course_name}</h2>
                <p className=''>{details}</p>
                <div className='flex flex-row justify-between'>
                    <span>Credit Hours: {credit_hour}</span>
                    <span>Price: {price.toFixed(2)}</span>
                </div>
                <div className="card-actions">
                    <button onClick={() => { handleClick(course) }} className="btn w-full text-white bg-sky-600">Select</button>
                </div>
            </div>
        </div>
    )
}
