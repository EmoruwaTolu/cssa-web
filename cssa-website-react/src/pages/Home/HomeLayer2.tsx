import React, {useState} from 'react';
import { Link } from "react-router-dom";
import CircularCarousel from './CircularCarousel';
import BinaryBackground from './BinaryBackground';
import { teamInfo } from '../../resources/teamImagesInfo';
import './home-layer-2.css';

interface HomeLayer2Props {
    windowDimensions: { width: number; height: number };
}

const HomeLayer2: React.FC<HomeLayer2Props> = ({windowDimensions}) => {

    //The below part of the code is for the display when we have a portrait screen, i.e phones and tablets

    const [currentMember, setCurrentMember] = useState(teamInfo[0]);

    if(windowDimensions.width / windowDimensions.height <= 1){
        return(
            <div className='home-layer-2-container'>
                <div className='home-layer-2-title'>
                    <div className='sliding-numbers-container'>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                    </div>
                    MEET THE TEAM
                    <div className='sliding-numbers-container'>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                    </div>
                </div>
                <div className='meet-the-team-blurb'> 
                    <p>
                    The CSSA is student elected student organization dedicated to 
                    advocating for Computer Science Students at the University of Ottawa.
                    </p>
                    <p>
                        Check out some of our members below.
                    </p>
                    <Link to='/about'><button>Learn More</button></Link>
                </div>
                <div className='meet-the-team-container'>
                    <div className='tv-screen'>
                        <div className='tv-rims'>
                            <div className='tv-content'>
                                <p>{currentMember.name}</p>
                                <p>{currentMember.position}</p>
                                <p>{currentMember.year}</p>
                                <p>{currentMember.blurb}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CircularCarousel flexDirection='column' getCurrentMember={setCurrentMember} images={teamInfo}/>
                <BinaryBackground />
            </div>
        )

    }

    return(
        <div className='home-layer-2-container'>
            <div className='meet-the-team-container'>
                <div className='home-layer-2-title'>
                    <div className='sliding-numbers-container'>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                    </div>
                    <div className='meet-team-header'>MEET THE TEAM</div>
                    <div className='sliding-numbers-container'>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                        <span className='digits'>01000011 ~~ 01010011 ~~ 01010011 ~~ 01000001 ~~ </span>
                    </div>
                </div>
                <div className='meet-the-team-blurb'> 
                    <p>
                    The CSSA is student elected student organization dedicated to 
                    advocating for Computer Science Students at the University of Ottawa.
                    </p>
                    <p>
                        Check out some of our members below.
                    </p>
                    <Link to='/about'><button>Learn More</button></Link>
                </div>
                <CircularCarousel flexDirection='row' getCurrentMember={setCurrentMember} images={teamInfo}/>
            </div>
            <div className='tv-screen-container'>
                <div className='tv-screen'>
                    <div className='tv-rims'>
                        <div className='tv-content'>
                            <div>
                                <p>{currentMember.name}</p>
                                <p>{currentMember.position}</p>
                                <p>{currentMember.year}</p>
                            </div>
                            
                            <p>{currentMember.blurb}</p>
                        </div>
                    </div>
                </div>
            </div>
            <BinaryBackground />
        </div>
    )
};

export default HomeLayer2;