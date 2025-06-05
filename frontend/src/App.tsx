import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import LeadCardAccepted from "./Components/LeadCardAccepted";
import LeadCardInvited from "./Components/LeadCardInvited";
import TabPanel from "./Components/TabPanel";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box className="App" sx={{ width: "90%", margin: "auto" }}>
      <Box sx={{ width: "100%" }}>
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
          <LeadCardInvited />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <LeadCardAccepted />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
