import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop , Resize} from '@syncfusion/ej2-react-schedule'
import{ scheduleData} from '../data/dummy'
import Header from '../components/Header'

export default function Calendar(){
  return(
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl'>
      <Header category= 'App' title="Calendar" />
      <ScheduleComponent
      height='650px'
      eventSettings={{ dataSource: scheduleData}}
      >
        <Inject services={[Week, Month, WorkWeek, Agenda, Resize, DragAndDrop, Day]}/>
      </ScheduleComponent>
      
    </div>
  )
}
