import '../MainDashBoard/index.scss';
import {LineGraph} from '../LineGraph';
import{ DoughnutChart } from '../Doughnut';
import {ScheduleCard} from '../UpcomingScheduleCard';
import { MeetingRequestCard } from '../MeetingRequestCard';
import cIcon from '../../public/main-content-lower-icons/c-Icon.svg';
import gIcon from '../../public/main-content-lower-icons/g-Icon.svg';
import tIcon from '../../public/main-content-lower-icons/t-Icon.svg';

export function MainDashBoard(){
    return(
        <div className='main-container'>
                <div className='title'> DashBoard</div>
                   <div className='subtitle'>Last Week Analysis - 21st Feb to 27th Feb </div>
                     <div className='analysis'>
                       <div className='line'>
                            <LineGraph />
                            <div className='line-label'>Day wise time spent on meetings</div>
                        </div>
                         <div className='detailedAnalysisTab'>
                             <div className='time'> 36 Hours</div>
                            <div className='sub-title'>Total time spent on meeting </div>
                            <button className='detailedbutton'>View detailed analysis</button>
                        </div>
                        <div className='doughnut'>
                            <DoughnutChart />
                            <div>Top Contributors</div>
                        </div>
                    </div> 
               <div className='lower'>
                    <div className='upcomingMeetingsBlock'>
                        <div className='subtitle'>Upcoming Schedule</div>
                        <div className='scehdule-components'>
                            <ScheduleCard icon={tIcon} name="1-1 with Jeff" medium="Microsoft Teams" time="9:30 AM"/>
                            <ScheduleCard icon={gIcon} name="Daily Team Standup" medium="Google Meet" time="11:00 AM"/>
                            <ScheduleCard icon={cIcon} name="Client sales demo" medium="Microsoft Teams" time="2:00 PM"/>
                        </div>
                        <button className='allmeetingsbutton'>See all meetings</button>
                        </div>
                    <div className='meetingRequestBlock'>
                   <div className='subtitle'>Meeting Requests</div>
                   <div className='request-components'>
                        <MeetingRequestCard eventName="Amelia from MoveInSync - Want to discuss next role! " eventTimeDate="12th March, 9:30 AM - 10:30 AM"/>
                        <MeetingRequestCard eventName="John from Internal team - Project update  " eventTimeDate="12th March, 2:30 PM - 4:00 PM"/>
                        <MeetingRequestCard eventName="Kathy - Discussion on react props vs redux  " eventTimeDate="15th March, 11:30 AM - 12:00 PM"/>
                   </div>
                   
                   <button className='allrequestbutton'>See all requests</button>
                   
                   </div>
               </div>
        </div>
    )
}