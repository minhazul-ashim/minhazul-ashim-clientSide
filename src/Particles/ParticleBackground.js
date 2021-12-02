import React from "react";
import Particles from "react-tsparticles";
import particle_config from "./particle-config";

const ParticleBackground = () => {


    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    }

    return (

        <Particles id="tsparticles" params={particle_config} init={particlesInit} loaded={particlesLoaded} />
    )
}

export default ParticleBackground;