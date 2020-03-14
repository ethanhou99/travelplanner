import React, { Component } from 'react'
import PlanCard from './PlanCard'

export default function PlanItem(props) {
  return (
    <div>
      {props.planitem.map((plan) => {
        return <PlanCard plan={plan}/>
      })}
    </div>
  )
}