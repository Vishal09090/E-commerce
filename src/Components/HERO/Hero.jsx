
import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
    return (
            <div className='hero'>
                <div className="hero-left">
                <h2>NEW ARRIVAILS ONLY</h2>
                   
                   <div>
               
                <div className="hero-hand-icon">
                    <p>NEW</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p> For everyone</p>
                </div>
                <div className="hero-letest-btn">
                    <div>Lestest Collection </div>
                    <img src={arrow_icon} alt="" />
                </div>
                </div>
                <div className="hero-right">
                    <img src={hero_img} alt="" />
                    
        
                            </div>
                </div>
          )
}

export default Hero








// import React from 'react'
// import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'

// function Hero () {
//   return (
//     <div className='hero'>
//         <div className="hero-left">
//         <h2>NEW ARRIVAILS ONLY</h2>
           
//            <div>
       
//         <div className="hand-hand-icon">
//             <p>NEW</p>
//             <img src={hand_icon} alt="" />
//         </div>
//         <p>Collections</p>
//         <p>Everyone</p>
//         </div>
//         <div className="hero-letest-btn">
//             <div>Lestest Collection </div>
//             <img src={arrow_icon} alt="" />
//         </div>
//         </div>
//         <div className="hero-right">
            

//                     </div>
//         Hero</div>
//   )
// }

// export default Hero