import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import Header from '../../components/Header'



const Stacked = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Stacked Rate'/>
    <ChartComponent
      height='420px'
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width:0}}}
      tooltip={{enable: true}}
      legendSettings={{ background: 'white'}}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Stacked
