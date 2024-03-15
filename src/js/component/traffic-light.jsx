import React, {useState} from "react";

const TrafficLight = () => {

    const [redBackground, setRedBackground] = useState('red');
    const [orangeBackground, setOrangeBackground] = useState('orange');
    const [greenBackground, setGreenBackground] = useState('green');
    function red() {
        if (redBackground == 'red') {
            setRedBackground('white')
            setOrangeBackground('orange')
            setGreenBackground('green')
        }else {
            setRedBackground('red')
        }
    };

    function orange() {
        if (orangeBackground == 'orange') {
            setOrangeBackground('white')
            setRedBackground('red')
            setGreenBackground('green')
        }else {
            setOrangeBackground('orange')
        }
    };

    function green() {
        if (greenBackground == 'green') {
            setGreenBackground('white')
            setOrangeBackground('orange')
            setRedBackground('red')
        }else {
            setGreenBackground('green')
        }
    };

    return (
        <>
            <div className="btn-group-vertical position-relative p-3 m-5" style={{background: 'black', borderRadius: '3cap'}} role="group" aria-label="Vertical button group">
                <button style={{borderRadius: '50%', width: '145px', height: '145px', backgroundColor: redBackground}} onClick={red}></button>
                <button style={{borderRadius: '50%', marginTop: '10px', width: '145px', height: '145px', background: orangeBackground}} onClick={orange}></button>
                <button style={{borderRadius: '50%', width: '145px', marginTop: '10px', height: '145px', background: greenBackground}} onClick={green}></button>
            </div>
            <div className="position-sticky bottom-50 end-100" style={{background: 'black', height: '1px', width: '595px', height: '60px'}}></div>
        </>
    );
};


export default TrafficLight;