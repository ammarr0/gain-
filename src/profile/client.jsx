import React from "react";
import Hero from "../components/profilehero";
import Sidebar from "../components/linkedaccounts";
import CSidebar from "../consultingfirm/components/cfsidebar";
import PortfolioSection from "../components/portfoliosection";
import Testimonials from "../components/clientreviews"

const Client = () => {
    return (
        <>
            <div className="flex p-5">
                <CSidebar />
                <div className="">
                    <Hero />
                    <div className="flex justify-between">
                        <div>
                            <PortfolioSection />
                            <Testimonials />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Client;