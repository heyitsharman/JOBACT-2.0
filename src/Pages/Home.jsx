
import Herosection from "../Components/Herosection";
import FeaturedCompanies from "../Components/FeaturedCompanies";
import React, { useState } from "react";
import BlogsCard from "../Components/BlogsCard";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const Home = () => {
    return <>
        
       <Herosection />
       <FeaturedCompanies />
       <BlogsCard ></BlogsCard>
       <Testimonials />
       <Contact />
        
    </>
}

export default Home;