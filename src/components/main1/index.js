import React from "react"
import style from './main1.scss';
import { OverviewCard, Card } from "../card/index"

function Main(props) {
  return (
    <main className={ style.main }>
      <div className={ style["main-header"] }>
        <div className={ style["main-header__heading"] }>Hello User</div>
        <div className={ style["main-header__updates"] }>Recent Items</div>
      </div>
      
      <div className={ style["main-overview"] }>
        <OverviewCard icon="Overview" info="Card" />
        <OverviewCard icon="Overview" info="Card" />
        <OverviewCard icon="Overview" info="Card" />
      </div>

      <div className={ style["main-cards"] }>
        <Card text="card" /> 
        <Card text="card" /> 
        <Card text="card" /> 
      </div>
    </main>
  )
}

export default Main;


