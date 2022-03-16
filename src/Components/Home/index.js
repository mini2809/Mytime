import {Header} from '../Header';
import {SideNavBar} from '../SideNavBar';
import { MainDashBoard } from '../MainDashBoard';
import './index.scss';

export function Home(){
    
    return(
        <div>
            <Header />
            <div className="main">
                <SideNavBar />
                <MainDashBoard />
            </div>
        </div>
    )
}