import React from 'react'

const Jobs = () => {
  return (
    <div>

      <div className='h-[20rem] bg-black/90'></div>
      <div className=' w-full flex items-center justify-around gap-[2rem]  l lg:w-[90%]'>
       <div className=' w-[90%]   flex items-center  justify-between gap-[2rem] '>
       <div className=' basis-3/4 flex flex-col  bg-red-500 h-[36rem]  '>
         <div className='h-[20%] flex items-center  justify-start '> <p className='font-semibold text-xl'>Amazing Pearl</p></div>
         <div className='h-[80%] '>
          <div><h2 className='text-4xl font-semibold'>Work With Us</h2></div>
          <div className='  '>
            <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aliquid, culpa, unde nam animi, consequatur quas porro eligendi reiciendis est minus voluptate a amet iusto illo ipsum qui pariatur doloribus cum perspiciatis fuga at reprehenderit. Dolores placeat quia temporibus deserunt aspernatur error deleniti provident, nihil, voluptas libero nam rem aut fugit itaque ducimus dolorem incidunt molestiae officia. Mollitia possimus illo laborum rem reprehenderit aspernatur repellat id perspiciatis nulla labore error asperiores magni eligendi, nisi temporibus voluptatibus voluptas rerum! Aperiam vitae optio maxime delectus, libero hic, nesciunt in vero quam expedita cupiditate eligendi, necessitatibus facilis magni id iusto fugit maiores! Consectetur illo tempore possimus ipsa rem accusantium. Esse quasi facilis adipisci placeat dolor odit exercitationem totam excepturi incidunt eveniet sed, itaque odio ut praesentium ullam, nam earum ex. Qui soluta eos nesciunt modi iure est porro itaque dignissimos autem aspernatur. Fugiat ipsum sapiente beatae soluta consequuntur quisquam assumenda porro ullam totam.</p>
          </div>
         </div>
        </div>
        <div className=' basis-1/4 gap-[2rem]  flex items-center justify-center flex-col   bg-gray-500 h-full   '>
          <div className='h-[12rem] flex items-center justify-center flex-col gap-[.5rem] '>
            <h3 className='text-3xl'>Open Positions</h3>
            <p>Registered nurses</p>
            <p> Licensed Practice nurses</p>
            <p>Nursing Assistants</p>
            <p>Home Health Aides</p>
          </div>
          <div>
          <div  className='h-[12rem] flex items-center justify-center flex-col gap-[.5rem]'>
            <h3 className='text-3xl'>Requirements</h3>
            <p>Experience</p>
            <p> Background Check</p>
            <p> Drug screening tests</p>
            <p>Vaccination,physical and PPD</p>
            <p>Legal work permit</p>
          </div>
          </div>
          <div>
          <div  className='h-[12rem] flex items-center justify-center flex-col gap-[.5rem]'>
            <h3 className='text-3xl'>Benefits</h3>
            <p>Bi-Weekly pay</p>
            <p> Flexible hours</p>
            <p>Full and part-time schedule</p>
            
          </div>
          </div>
        </div>

       </div>
      </div>
    </div>
  )
}

export default Jobs