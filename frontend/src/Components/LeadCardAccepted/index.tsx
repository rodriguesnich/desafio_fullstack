import { Box, Typography } from "@mui/material";
import LeadCard from "../LeadCard";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeadCardSummaryInfoItem";
import UsCurrencyFormater from "../../Helpers/UsCurrencyFormater";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

interface LeadCardAcceptedProps {
  ID: string;
  ContactFullName: string;
  Suburb: string;
  Category: string;
  DateCreated: Date;
  Description: string;
  Price: number;
  ContactPhoneNumber: string;
  ContactEmail: string;
}

function LeadCardAccepted({
  ID,
  ContactFullName,
  Suburb,
  Category,
  DateCreated,
  Description,
  Price,
  ContactPhoneNumber,
  ContactEmail,
}: LeadCardAcceptedProps) {
  return (
    <LeadCard>
      <LeadCard.Header FirstName={ContactFullName} CreatedDate={DateCreated} />
      <LeadCard.SummaryInfo>
        <LeadCardSummaryInfoItem>
          <LocationPinIcon />
          {Suburb}
        </LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>
          <BusinessCenterIcon /> {Category}
        </LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: {ID}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>
          {UsCurrencyFormater(Price)} Lead Invitation
        </LeadCardSummaryInfoItem>
      </LeadCard.SummaryInfo>
      <LeadCard.Description>
        <Typography sx={{display: "flex", justifyContent:"left", gap: "2rem"}} color="warning">
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <LocalPhoneIcon /> {ContactPhoneNumber}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <EmailIcon /> {ContactEmail}
          </Box>
        </Typography>
        <br />
        <Typography textAlign="left">{Description}</Typography>
      </LeadCard.Description>
    </LeadCard>
  );
}

export default LeadCardAccepted;
