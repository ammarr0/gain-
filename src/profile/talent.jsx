import React from "react";
import Hero from "../components/profilehero";
import Sidebar from "../components/linkedaccounts";
import CSidebar from "../consultingfirm/components/cfsidebar";
import Detail from "../components/clientdetails"

const Client = () => {
    return (
        <>
            <div className="flex p-5">
                <CSidebar />
                <div className="">
                    <Hero />
                    <div className="flex justify-between">
                        <div>
                            <Detail />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Client;