import { Box, Button, Typography } from "@mui/material";
import LeadCard from "../LeadCard";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeadCardSummaryInfoItem";
import UsCurrencyFormater from "../../Helpers/UsCurrencyFormater";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

interface LeadCardInvitedProps {
  ID: string;
  ContactFirstName: string;
  Suburb: string;
  Category: string;
  DateCreated: Date;
  Description: string;
  Price: number;
}

function LeadCardInvited({
  ID,
  ContactFirstName,
  Suburb,
  Category,
  DateCreated,
  Description,
  Price,
}: LeadCardInvitedProps) {
  return (
    <LeadCard>
      <LeadCard.Header FirstName={ContactFirstName} CreatedDate={DateCreated} />
      <LeadCard.SummaryInfo>
               <LeadCardSummaryInfoItem>
          <LocationPinIcon />
          {Suburb}
        </LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>
          <BusinessCenterIcon /> {Category}
        </LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: {ID}</LeadCardSummaryInfoItem>
      </LeadCard.SummaryInfo>
      <LeadCard.Description>
        <Typography textAlign="left">{Description}</Typography>
      </LeadCard.Description>
      <LeadCard.Actions>
        <Box gap={1} display="flex">
          <Button variant="contained">Accept</Button>
          <Button variant="contained" color="inherit">
            Decline
          </Button>
        </Box>
        <Box>
          <Typography >
            <b>{UsCurrencyFormater(Price)}</b> Lead Invitation
          </Typography>
        </Box>
      </LeadCard.Actions>
    </LeadCard>
  );
}

export default LeadCardInvited;
