import React from 'react'
import RadioButton from '../RadioButton'

const Interests = () => {
  const {orderedInterests} = useContext(AppWithContext)

  orderedInterests.map(int, i =>
    <RadioButton key={`radiobtn-${i}`} interest={int.interest} checked={int.isChecked}/> 
  )
  
}