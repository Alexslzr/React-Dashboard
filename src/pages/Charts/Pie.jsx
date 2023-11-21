import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,PieSeries, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip  } from '@syncfusion/ej2-react-charts'
import { pieChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import Header from '../../components/Header'


const Pie = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Pie Rate'/>
      <AccumulationChartComponent
      id='pie-chart'
      height='420px'
      legendSettings={{position:'Bottom'}}
      chartArea={{border: {width: 0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark'?'#33373E':'#fff'}
      >
        <Inject services={[AccumulationLegend,AccumulationDataLabel, PieSeries, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' dataLabel={{visible: true, name:'text', position:'Inside'}}/>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie
