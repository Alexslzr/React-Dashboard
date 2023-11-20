import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import Header from '../components/Header'
import { change } from '@syncfusion/ej2-react-grids'

const ColorPicker = () => {

  function change(args){
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
    <Header category='App' title='Color Picker'/>
    <div className='text-center'>
      <div id='preview'/>
        <div className='flex justify-center gap-20 flex-wrap items-center'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent 
            id='inline-pallete'
            modeSwitcher={false}
            inline
            showButtons={false}
            mode='Palette'
            change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
            id='inline-pallete'
            modeSwitcher={false}
            inline
            showButtons={false}
            mode='Picker'
            change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
