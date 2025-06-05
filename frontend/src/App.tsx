import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel from "./Components/TabPanel";
import AcceptedLeadsView from "./Views/AcceptedLeads";
import PeddingLeadsView from "./Views/PeddingLeads";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      className="App"
      sx={{ width: "100vw", height: "100dvh" }}
    >
      <Box sx={{ padding: "1rem" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="Leads Navigation Tabs"
            variant="fullWidth"
          >
            <Tab label="Invited" />
            <Tab label="Accepted" />
          </Tabs>
        </Box>
        <TabPanel value={currentTab} index={0}>
          <PeddingLeadsView />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <AcceptedLeadsView />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
