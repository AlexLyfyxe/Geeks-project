import React from 'react';
import 'react-redux'
import Main from './blocks/mainAbout/MainAbout';
import HistoryAdd from "./blocks/historyAdd/HistoryAdd";
import OurValues from "./blocks/ourValues/OurValues";
import WorkBlock from "./blocks/work/WorkBlock";
import Qualities from "./blocks/Qualities/Qualities";
// import OurTeam from "./blocks/ourTeam/OurTeam";


const AboutUs = () => {



    return (
        <>
            <Main />
            <HistoryAdd />
            <OurValues />
            <WorkBlock />
            <Qualities />
            {/*<OurTeam/>*/}
        </>
    );
};

export default AboutUs;