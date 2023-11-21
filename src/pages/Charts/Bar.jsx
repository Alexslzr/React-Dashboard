import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DataLabel, Category, BarSeries } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import Header from '../../components/Header'


const Bar = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Bar Rate'/>
      <ChartComponent
      id='bar-chart'
      height='420px'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark'?'#33373E':'#fff'}
      >
        <Inject services={[DataLabel,Legend, Tooltip, Category, BarSeries]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,index)=>(
            <SeriesDirective key={index} {...item} type='Bar'/>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar
