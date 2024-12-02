import React, { useState } from "react";
import FormTab from "../Form";
import VideoTab from "../Video";
import ProductsTab from "../Carousel";
import ProposalTab from "../ProposalTab";


const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="container-tabs">
      <nav className="box-nav">
        <button className="button-nav button-nav-1" onClick={() => setActiveTab(1)}>Formulario</button>
        <button className="button-nav button-nav-2" onClick={() => setActiveTab(2)}>Video</button>
        <button className="button-nav button-nav-3" onClick={() => setActiveTab(3)}>Productos</button>
        <button className="button-nav button-nav-4" onClick={() => setActiveTab(4)}>Propuesta Propia</button>
      </nav>
      <div className="tab-content">
        {activeTab === 1 && <FormTab />}
        {activeTab === 2 && <VideoTab />}
        {activeTab === 3 && <ProductsTab />}
        {activeTab === 4 && <ProposalTab />}
      </div>
    </div>
  );
};

export default TabsComponent;
