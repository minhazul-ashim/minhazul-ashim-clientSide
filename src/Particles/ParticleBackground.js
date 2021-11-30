import React from "react";
import Particles from "react-particles-js";
import particle_config from "./particle-config";

const ParticleBackground = () => {

    return (
        <Particles params={particle_config}></Particles>
    )
}

export default ParticleBackground;