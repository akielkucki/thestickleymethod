import React from 'react';
import Script from "next/script";

const Embed = () => {
    return (
        <div className={"max-w-7xl"}>
            <div data-aboutly-carousel="10b0cd2c-8f03-4e1e-9bfa-e4924898432c">


                <Script
                    src="https://aboutly.app/api/embed/carousel/10b0cd2c-8f03-4e1e-9bfa-e4924898432c.js"
                    strategy="lazyOnload"
                />


            </div>
        </div>
    );
};

export default Embed;