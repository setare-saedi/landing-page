import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBar1({com,}) {
    return (
        <div>
            <ProgressBar completed={com} maxCompleted={100} animateOnRender={true} height='20px' borderRadius='25px' isLabelVisible={true} labelColor={'white'} bgColor={'blueviolet'} transitionDuration={'3s'}/>
        </div>
    );
}

export default ProgressBar1;