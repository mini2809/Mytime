import '../Header/index.scss';
import profile from '../../public/header-icons/profile.svg';
import settings from '../../public/header-icons/settings.svg';
import notification from '../../public/header-icons/new-notification.svg';

export function Header(){
    return(
        <div className="header-container" id="header-container">
           <div id="logo">
                <p className='logo-text'>MyTime</p>
            </div>
           <div id="header-icons">
               <div>
                   <img src={settings} alt="settings-icon" className='icon-dimension'/>
               </div>
               
               <div>
                   <img src={notification} alt="notification-icon" className='icon-dimension'/>
               </div>

               <div>
                   <img src={profile} alt="profile-icon"  height="25px" width="25px"/>
               </div>
               
            </div>
        </div>
    )
}