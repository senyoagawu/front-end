import React, { useState, useContext } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import {AppContext} from '../App'
import styles from './Interests.module.css'

const InterestCard = ({ info:{interest,idx}}) => {
  const {state, setState} = useContext(AppContext)
  const {interests} = state
  const idPrefix = 'card_'
  const card_clicked = (e)=>{

    const newCopy={}
    for (let key in interests) {
      newCopy[key] = [...interests[key]]
    }
    newCopy[idx][1] = !interests[idx][1]
    console.log(state)
    console.log({...state,...{interests:newCopy}})
    setState({...state,...{interests:newCopy}})
    // {...localInterest}

    // setLocalInterests(newCopy)
    // e.target.id.slice(idPrefix.length-1)
    // console.log('======',e.target.id, e.target.id.slice(idPrefix.length-1))
    // setChecked(!checked)
  }
  console.log(interest)
  // const [checked, setChecked] = useState(false);
  return (
    <div className={styles.card}   onClick={card_clicked}>
      <Card  className={styles.card_component} bgColor={interest[1] ? '#5fa83e' : '#fff'}>
        <CardHeader  style={{'border':'none'}} className={styles.header}>{interest[0]}</CardHeader>
      </Card>
    </div>
  );
};

export default InterestCard
// {{'height':'150px', 'display': 'flex', 'align-items':'center', 'width':'200px','text-align': 'center',  'border':'1px solid red'}}