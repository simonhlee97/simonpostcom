import React, { useState } from "react"
import styles from './styles.module.css'

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  const handleTab1 = () => setActiveTab("tab1")
  const handleTab2 = () => setActiveTab("tab2")

  return (
    <div className={styles.Tabs}>
      {/* Tab nav */}
      <ul className={styles.nav}>
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Korea 🇰🇷
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          USA 🇺🇸
        </li>
      </ul>
      <div className={styles.outlet}>
        {activeTab === "tab1" ? <KoreaTable /> : <America />}
      </div>
    </div>
  );
};
