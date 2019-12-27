import React from "react"
import style from './card.scss';


const Card = ({ text }) => (
  <div className={ style.card }>{ text }</div>
)

function OverviewCard(props) {
    return (
      <div className={ style.overviewcard }>
        <div className={ style.overviewcard__icon }>{ props.icon }</div>
        <div className={ style.overviewcard__icon }>{ props.info }</div>
      </div>
    )
}

export {
    Card, OverviewCard
}