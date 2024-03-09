import React from 'react';
// import 'react-redux'
// import MainAboutUp from '../mainAbout/MainAboutUp';
// import HistoryAdd from '../historyAdd/HistoryAdd'
// import OurValues from "../ourValues/OurValues";
// import WorkBlock from "../work/WorkBlock";
// import Qualities from "../Qualities/Qualities";
import Qualities from "./blocks/Qualities/Qualities";
import WorkBlock from "./blocks/work/WorkBlock";
import OurValues from "./blocks/ourValues/OurValues";
import HistoryAdd from "./blocks/historyAdd/HistoryAdd";
// import OurTeam from "./blocks/ourTeam/OurTeam";


const AboutUs = () => {
    return (
        <>
            {/* <MainAboutUp/> */}
            <HistoryAdd/>
            <OurValues/>
            <WorkBlock/>
            <Qualities/>
            {/*<OurTeam/>*/}
        </>
    );
};

export default AboutUs;