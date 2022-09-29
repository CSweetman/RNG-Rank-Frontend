import { Button } from '@mui/material'
import React, { useState } from 'react'





export const Rolling = () => {
    const diceOptions = [4,6,8,12,20]
    const [diceIndex, setDiceIndex] = useState(0)
    const [diceValue, setDiceValue] = useState('???')

    const rollDice = () =>{
        setDiceValue((Math.floor(Math.random() * diceOptions[diceIndex])+1).toString())
    }

    return (
        <>
            <h1  id='dice-title'>{diceOptions[diceIndex]}-sided Dice</h1>
            <div id='dice-value' style={{margin: '1vh'}}>{diceValue}</div>
            <Button variant="outlined" id='roll-button' onClick={rollDice}>Roll</Button>
            
        </>
    )
}

