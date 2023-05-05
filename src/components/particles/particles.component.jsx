import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { useContext} from "react"
import { ColorSchemeContext } from "../../contexts/color-scheme.context";

import './particles.styles.scss'


const ParticlesBackground = () => {

	const { isDark } = useContext(ColorSchemeContext) 

	const colorChooser = () => {
		if (isDark) {
			return "#000000"; 
		} else {
			return "#f5f5f5"; 
		}
	}

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);


return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            // background: {
            //     color: {
            //         value: "#0d47a1",
            //     },
            // },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 6,
                    },
                    repulse: {
                        distance: 130,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: colorChooser(),
                },
                links: {
                    color: colorChooser(),
                    distance: 90,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
);




  // const classes = useStyles();

  // return (
  //   <Particles
  //     params={{
  //       particles: {
  //         number: {
  //           value: 45,
  //           density: {
  //             enable: true,
  //             value_area: 800,
  //           },
  //         },
  //         shape: {
  //           type: "circle",
  //           stroke: {
  //             width: 1,
  //             color: "tomato",
  //           },
  //         },
  //         size: {
  //           value: 8,
  //           random: true,
  //           anim: {
  //             enable: false,
  //             speed: 6,
  //             size_min: 0,
  //             sync: true,
  //           },
  //         },
  //         opacity: {
  //           value: 0.5,
  //           random: true,
  //           anim: {
  //             enable: true,
  //             speed: 1,
  //             opacity_min: 0.1,
  //             sync: false,
  //           },
  //         },
  //       },
  //     }}
  //   />
  // );
};

export default ParticlesBackground;