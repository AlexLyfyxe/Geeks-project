import React from 'react';
import 'react-redux'
import Qualities from "./blocks/Qualities/Qualities";
import WorkBlock from "./blocks/work/WorkBlock";
import OurValues from "./blocks/ourValues/OurValues";
import HistoryAdd from "./blocks/historyAdd/HistoryAdd";
import MainAboutUp from "./blocks/mainAbout/MainAboutUp";
// import OurTeam from "./blocks/ourTeam/OurTeam";


const AboutUs = () => {



    return (
        <>
             <MainAboutUp/>
            <HistoryAdd />
            <OurValues />
            <WorkBlock />
            {/*<Qualities />*/}
            {/*<OurTeam/>*/}
        </>
    );
};

export default AboutUs;