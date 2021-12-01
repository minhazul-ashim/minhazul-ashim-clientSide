import React from "react";
import Particles from "react-particles-js";
import particle_config from "./particle-config";

const ParticleBackground = ({ children }) => {

    return (
        <Particles params={particle_config}>
            {children}
        </Particles>
    )
}

export default ParticleBackground;