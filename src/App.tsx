import { useForm, FormProvider } from "react-hook-form";

import Deed from './Deed'

import './App.css'

const data = {
  oldFullName: "Sarah Williams",
  newFullName: "Emily Williams",
  address: "32 London St, Manchester",
  date: "15 April 2020",
  firstWitnessFullName: 'Laura Fisher',
  firstWitnessAddress: '32 Merrington View, London',
  secondWitnessFullName: 'Amy Burns',
  secondWitnessAddress: '214 Chilswell Rd, London',
};

function App() {
  const methods = useForm();

  return (
    <FormProvider {...methods} >
      <div id='app' className='screen:lg:container screen:px-2 screen:lg:px-0 screen:mx-auto'>
        <div
          className='screen:md:grid screen:md:grid-cols-2 screen:md:gap-4'
        >
          <div className='order-2 md:order-1'>
            <div
              id='paperPreview'
              className='screen:drop-shadow-md screen:aspect-[1/1.4142] screen:w-full screen:border screen:bg-white screen:my-10 print:w-[210mm] print:h-[282mm]'
            >
              <Deed data={data} />
            </div>
          </div>
          <div className='print:hidden order-1 md:order-2'>b</div>
        </div>
      </div>
    </FormProvider>
  )
}

export default App
