import './index.scss';

export function ScheduleCard(props){
    return(
        <div className='card-wrapper'>
            <div className="card-icon"><img src={props.icon} alt="icon" height="42px" width="42px"/></div>
            <div className='desc-time-div'>
                <div className="desc">
                    <div className="name">{props.name}</div>
                    <div className="medium">{props.medium}</div>
                </div>
                <div className="card-time">{props.time}</div>
            </div>
        </div>
        
    )
}