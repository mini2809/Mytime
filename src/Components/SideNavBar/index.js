import '../SideNavBar/index.scss';
import calender from '../../public/left-nav-icons/calender.svg';
import home from '../../public/left-nav-icons/home.svg';
import newtab from '../../public/left-nav-icons/new-tab.svg';

export function SideNavBar(){
    return(
        <div className='side-nav-conatiner'>
            <div className='side-icons-nav-container'>
                <div className='icon-div'>
                <div className='icon'>
                    <img src={home} alt="home" className='icon-dimension'/>
                    {/* <div className="active"></div> */}
                </div>
                <div className='icon'>
                    <img src={newtab} alt="home" className='icon-dimension'/>
                    
                </div>
                <div className='icon'>
                    <img src={calender} alt="home" className='icon-dimension'/>
                    
                </div>
            </div>
            </div>
        </div>
    )
}