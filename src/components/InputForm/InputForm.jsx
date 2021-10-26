import React, { useState } from 'react'

const InputForm = ({handleNewData}) => {
    const [value,setValue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(value)
        handleNewData(Number(value))
    }
    return (
        <div>
            input form
            <form onSubmit={handleSubmit} >
                <input type="number" onChange={(e)=>setValue(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default InputForm
