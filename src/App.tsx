import { useState } from "react";
import { Header } from "./components/Header";
import { Tab } from "./components/Tab";

const tabs = [
  { id: "1", title: "All" },
  { id: "2", title: "Active" },
  { id: "3", title: "Completed" },
];

function App() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <>
      <Header />
      <div className="mt-10">
        <h1 className="text-white text-2xl">Home</h1>

        <div className="mt-10">
          <Tab tabs={tabs} active={activeTab} onChange={setActiveTab} />
        </div>
      </div>
    </>
  );
}

export default App;
