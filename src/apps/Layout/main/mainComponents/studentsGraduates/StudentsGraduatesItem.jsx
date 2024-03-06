import React from 'react'
import classes from './studentsGraduates.module.css'

function StudentsGraduatesItem({img, name, age, position, subtitle})  {
    return (
        <div className={classes.person}>
            <div className={classes.mainInfo}>
                <div className={classes.imgWrapper}>
                    <div className={classes.img}>
                        <img src={img} alt={name}/>
                    </div>
                    <div className={classes.imgSquare}></div>
                </div>
                <div className={classes.studentNamePosition}>
                    <span className={classes.nameInfo}>
                        {name}
                        <br />
                        {age}
                    </span>
                    <p className={classes.positionInfo}>{position}</p>
                </div>
            </div>
            <p className={classes.subtitle}>
                {subtitle}
            </p>
        </div>
    )
}

export default StudentsGraduatesItem