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
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1">
          <nav>
            {["Home", "Profilo", "Pazienti"].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveComponent(item)}
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 w-full text-left cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-4 flex flex-col gap-10">
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
