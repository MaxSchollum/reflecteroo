import React from 'react'
import Bubble from './ChoiceBoxComp/Bubble'
import YearSelector from './ChoiceBoxComp/Selector'
import Max from '../Assets/Max.jpeg'
import { FaBullseye, FaCrosshairs, FaCalendar, FaBrain} from "react-icons/fa"


function ChoiceBar() {
  return (
    <div className='ChoiceBar'>
      <Bubble icon={Max} />
      <div className='spacer'></div>
      <YearSelector />
      <div className='spacer'></div>
      <Bubble icon={<FaCrosshairs size={25}/>} className={"TargetIdentity"} link={1}/>
      <Bubble icon={<FaBullseye size={25}/>} className={"AnnualTargets"} link={2}/>
      <Bubble icon={<FaCalendar size={25}/>} className={"QGoals"} link={3}/>
      <Bubble icon={<FaBrain size={25}/>} className={"WeeklyReflection"} link={4}/>
      </div>
  )
}

export default ChoiceBar


//icon, link, className