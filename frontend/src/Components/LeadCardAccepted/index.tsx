import { Box, Typography } from "@mui/material";
import LeadCard from "../LeadCard";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeadCardSummaryInfoItem";
import UsCurrencyFormater from "../../Helpers/UsCurrencyFormater";

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
        <LeadCardSummaryInfoItem>{Suburb}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>{Category}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: {ID}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>
          {UsCurrencyFormater(Price)} Lead Invitation
        </LeadCardSummaryInfoItem>
      </LeadCard.SummaryInfo>
      <LeadCard.Description>
        <Typography gap={1}>
          <b>Contact Phone:</b> {ContactPhoneNumber}
          <b>Contact Email:</b> {ContactEmail}
        </Typography>
        <br />
        <Typography>{Description}</Typography>
      </LeadCard.Description>
    </LeadCard>
  );
}

export default LeadCardAccepted;
