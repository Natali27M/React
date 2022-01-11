import {useEffect, useState} from 'react';

import Launche from "../Launche/Launche";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value));
    }, []);
    return (
        <div>
            {launches.filter(value => value.launch_year<2020)
                     .map (value => <Launche key={value.flight_number} name={value.mission_name} year={value.launch_year}
                                             img={value.links.mission_patch_small} />)}
        </div>
    );
};

export default Launches;