import React from 'react'
import "./Home.css";
import Product from "../Products/Product"
function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
           <div className="home__row">
             <Product
             id="12345" 
             title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
             rating={5}
             price= {29.99}
          
             />
           <Product
            id="45678" 
            title = "Preethi Zodiac MG 218 Mixer Grinder, 750W, 5 Jars (Black/ Light Grey)"
            image="https://m.media-amazon.com/images/I/61YhX32D1uL._AC_UY327_FMwebp_QL65_.jpg" 
            rating={4}
            price= {129.99}
           
           />
               
           </div>
           
           <div className="home__row">
             <Product
                id="98451"  
                title = "Samsung Electronics Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone, US Version, 128GB of Storage, Mystic Bronze"
                image="https://m.media-amazon.com/images/I/813y2+dPUOL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={5}
                price= {899.00}
             />
             <Product
                id="94833"  
                title = "Amazon Echo (3rd Gen) – Improved sound, powered by Dolby "
                image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={4}
                price= {89.99}
             />
             <Product 
                id="37239" 
                title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
                image="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={5}
                price= {949.00}
             />
           </div>

           <div className="home__row">
            <Product 
            id="98639"    
            title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg" 
            rating={5}
            price= {1543.09}
            />
           </div> 


        </div>
      </div>
    )
}

export default Home;
