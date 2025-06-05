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
          <LeadCardInvited
            ID="557766"
            ContactFirstName="Bill Arthur"
            Suburb="Yanderra 2574"
            Category="Painters"
            DateCreated={new Date()}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            Price={100}
          />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <LeadCardAccepted
            Category="Painters"
            ContactFullName="Bill"
            DateCreated={new Date()}
            ID="557766"
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            Suburb="Yanderra 2574"
            Price={100}
            ContactPhoneNumber="123-456-7890"
            ContactEmail="rodriguesnich@outlook.com"
          />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default App;
