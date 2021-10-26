import React, { useState } from 'react'
import { Wrapper,Title,Form } from './InputForm.style'
const InputForm = ({handleNewData}) => {
    const [value,setValue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        handleNewData(Number(value))
    }
    return (
        <Wrapper>
            <Title>Add more data points</Title>
            <Form onSubmit={handleSubmit} >
                <input type="number" placeholder='Enter number..' onChange={(e)=>setValue(e.target.value)} />
               
                <input type="submit" value="Submit" />
            </Form>
        </Wrapper>
    )
}

export default InputForm
