import React, { useState } from 'react';
import DisplayContent from './DisplayContent';
import Home from './Home';
import Profilo from './Profilo';
import Patients from './Patients';



const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState('Home');
  const [componentData, setComponentData] = useState({ visible: false });

   // Callback che verrà chiamata da Home
   const handleHomeData = (data) => {
    console.log("Visibile passata da HOME", data);
    setComponentData(data);
  };

  const components = {
    Home: <Home onDataChange={handleHomeData} />,
    Profilo: <Profilo onDataChange={handleHomeData}/>,
    Pazienti: <Patients onDataChange={handleHomeData}/>
  };
  

  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen flex flex-col w-64 px-4 py-8 overflow-y-auto bg-white shadow-lg">
        <div className="flex flex-col justify-between flex-1">
          <nav>
            {["Home", "Profilo", "Pazienti"].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveComponent(item)} 
                className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-lg dark:text-gray-400 hover:bg-[#fff4ed]  hover:text-gray-700 w-full text-left cursor-pointer ${
                  activeComponent === item ? 'bg-[#fff4ed] ' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 flex flex-col gap-10">
        <DisplayContent 
          titleProp={componentData.title} 
          visibleProp={componentData.visible}
          componentDataProp={componentData}
        >
          {components[activeComponent]}
        </DisplayContent>
      </main>
    </div>
  );
  
  
  
};

export default Sidebar;
