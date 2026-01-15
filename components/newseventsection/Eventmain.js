import Newsevent from './Newsevent'
import Calendar from './Calendar'
import Topper from './Topper'

function Eventmain({latest_data}) {
    return (
        <div className='container shadow-sm'>
            <div className='eventgrid' >
                <div className='newsevent'>
                    <Newsevent  />
                </div>
                <div className='calendar1'>
                    <Calendar/>
                </div>
                <div className='topper'>
                    <Topper/>
                </div>
            </div>
            
        </div>
    )
}

export default Eventmain



 