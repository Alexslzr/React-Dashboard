import React from 'react'
import LineChart from '../../components/Charts/LineChart'
import Header from '../../components/Header'

const Line = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Inflation Rate'/>
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line
