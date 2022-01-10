import React from "react";

function CalendarTitle(props){
    console.log("test")
    return (
        <div className="RCA-header-container">
            <h2 className="RCA-header-calendarYM RCA-header-middle">
                {/* {props.calendarYM} */}
            </h2>
            <h3 className="RCA-header-today RCA-header-middle">
                {/* {props.today} */}
            </h3>
            <ul className="RCA-header-buttons RCA-header-middle">
                <li>
                    
                    <li>
                        <i className="move-button left-img icon" onClick={ ()=>{ props.moveMonthFn(-1) }} >

                        </i>
                    </li>
                    <li>
                        이동
                    </li>
                    <li>
                        <i className="move-button right-img icon" onClick={ ()=>{ props.moveMonthFn(1) }}>
                        </i>
                    </li>
                </li>
            </ul>

        </div>
    );
}

export default CalendarTitle;