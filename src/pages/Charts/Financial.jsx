import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,HiloSeries, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import Header from '../../components/Header'


const Financial = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Financial Rate'/>
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark'?'#33373E':'#fff'}
      >
        <Inject services={[DateTime,Legend, Tooltip, HiloSeries]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={financialChartData} type='Hilo' xName='x' yName='open' low='low' high='high'/>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial