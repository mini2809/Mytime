import './index.scss';

export function MeetingRequestCard(props){
    return(
        <div className='meeting-card-wrapper'>
            <div className='event-time-date'>
                <div>{props.eventName}</div>
                <div className='timeDate'>{props.eventTimeDate}</div>
            </div>
            <div className='meeting-buttons'>
                <button className='accept-button'>Accept</button>
                <button className='view-meeting-button'>View in Calendar</button>
            </div>
        </div>
    )
}