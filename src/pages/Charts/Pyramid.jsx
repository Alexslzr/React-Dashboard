import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,PyramidSeries,AccumulationSelection, Inject, AccumulationTooltip, AccumulationLegend,AccumulationDataLabel } from '@syncfusion/ej2-react-charts'
import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import Header from '../../components/Header'


const Pyramid = () => {
  const {currentMode} =useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Pyramid Rate'/>
      <AccumulationChartComponent
      legendSettings={{position:'Bottom'}}
      id='pyramid-chart'
      height='420px'
      chartArea={{border: {width: 0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark'?'#33373E':'#fff'}
      >
        <Inject services={[AccumulationDataLabel,AccumulationLegend,AccumulationSelection, AccumulationTooltip, PyramidSeries]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={PyramidData} type='Pyramid' xName='x' yName='y' dataLabel={{visible: true, name:'text', position:'Inside'}}/>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid
