import React, {useContext, useState} from 'react'
import {AppContext} from '../../App'
import InterestCard from '../InterestCard'
import styles from '../Interests.module.css'
import formstyles from '../Forms/Form.module.css'
import {addInterest} from '../../utils/ajax'

const Interests = ({setModal}) => {
  const {state: {interests}, setState} = useContext(AppContext)
  // const {state: {interests}, setState} = useContext(AppContext)
  //serve up data tuples (name, boolean(user is following))
  //when rendering, true's should be green
  const [newInterest, setNewInterest] = useState({name:''})
  
  // const [localInterest, setLocalInterests] = useState(interests)
  console.log('¿we in the interests again?')
  // const ints = Object.values(interests)

  
  // console.log(interests.interests)
  // orderedInterests.map(int, i =>
  //   <RadioButton key={`radiobtn-${i}`} interest={int.interest} checked={int.isChecked}/> 
  // )
  const onchange = e => {
    e.preventDefault()
    setNewInterest({name:e.target.value})
  }
  const updateInterests = e => {
    e.preventDefault()
    
    setModal({})
    //make x amount of posts to /interests-user join table.
  }

  const addNewInterest = async e => {
    e.preventDefault()
    await addInterest(newInterest)
    setModal({})
    //make post to /interests
  }

  return Object.keys(interests).length ? (
    <div>
      <div className={styles.formtype}>Click to select your Interests</div>
      <div className={styles.closeBtn}>Close</div>
      <div className={styles.interests}>{Object.keys(interests).map((interest )=> <InterestCard key={interest} info={{interest:interests[interest],idx:interest, }}/>)}</div>
      <button className={styles.button}onClick={updateInterests}>Update Interests</button>
      <div>
        <label>Add new Interest</label>
        <input 
          placeholder="Add new interest"
          className={styles.inputs}
          type="text"
          value={newInterest.name}
          name="interest"
          onChange={onchange}        
          />
        <button 
          className={styles.button}
          onClick={addNewInterest}
        >
          Add
        </button>
      </div>

    </div>
    
    ) : <div></div>
}
export default Interests