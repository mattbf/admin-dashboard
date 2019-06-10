import React from "react";
import KPI from './KPI.js';

const info = {
  name: "Name",
  prefix: "$",
  suffix: '%',
  value: '100',
  symbol: 'SYMN'
}


function DashboardPage() {
  return (
    <div>
      <h2>Dashboard</h2>
      <KPI info={info}/>
    </div>
  )
}

export default DashboardPage
