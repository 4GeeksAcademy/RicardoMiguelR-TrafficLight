import React, {useState} from "react";

const TrafficLight = () => {

    const [redBackground, setRedBackground] = useState({color: 'red', shadow: false});
    const [orangeBackground, setOrangeBackground] = useState({color: 'orange', shadow: false});
    const [greenBackground, setGreenBackground] = useState({color: 'green', shadow: false});
    function red() {
        if (redBackground.color == 'red') {
            if (redBackground.shadow){
                setRedBackground({color: 'red', shadow: false}) 
            }else{setRedBackground({color: 'red', shadow: true})
            setOrangeBackground({color: 'orange', shadow: false})
            setGreenBackground({color: 'green', shadow: false})}
        }
    };

    function orange() {
        if (orangeBackground.color == 'orange') {
            if (orangeBackground.shadow){
                setOrangeBackground({color: 'orange', shadow: false}) 
            }else{setOrangeBackground({color: 'orange', shadow: true})
            setRedBackground({color: 'red', shadow: false})
            setGreenBackground({color: 'green', shadow: false})}  
        }
    };

    function green() {
        if (greenBackground.color == 'green') {
            if (greenBackground.shadow){
                setGreenBackground({color: 'green', shadow: false}) 
            }else{setGreenBackground({color: 'green', shadow: true})
            setOrangeBackground({color: 'orange', shadow: false})
            setRedBackground({color: 'red', shadow: false})}   
        }
    };

    return (
        <>
            <div className="btn-group-vertical position-relative p-3 m-5" style={{background: 'black', borderRadius: '3cap'}} role="group" aria-label="Vertical button group">
                <button style={{borderRadius: '50%', width: '145px', height: '145px', backgroundColor: redBackground.color, boxShadow: redBackground.shadow ? '-2px 5px 59px 18px rgba(186,186,186,1)' : null}} onClick={red}></button>
                <button style={{borderRadius: '50%', marginTop: '10px', width: '145px', height: '145px', background: orangeBackground.color, boxShadow: orangeBackground.shadow ? '-2px 5px 59px 18px rgba(186,186,186,1)' : null}} onClick={orange}></button>
                <button style={{borderRadius: '50%', width: '145px', marginTop: '10px', height: '145px', background: greenBackground.color, boxShadow: greenBackground.shadow ? '-2px 5px 59px 18px rgba(186,186,186,1)' : null}} onClick={green}></button>
            </div>
            <div className="position-sticky bottom-50 end-100" style={{background: 'black', height: '1px', width: '595px', height: '60px'}}></div>
        </>
    );
};


export default TrafficLight;