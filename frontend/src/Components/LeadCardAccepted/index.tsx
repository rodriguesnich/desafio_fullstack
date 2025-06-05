import { Box, Card, Typography } from "@mui/material";
import LeadCardHeader from "../LeadCard/Components/LeadCardHeader";
import LeadCardSummaryInfo from "../LeadCard/Components/LeardCardSummaryInfo";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeardCardSummaryInfo/LeadCardSummaryInfoItem";
import LeadCardDescription from "../LeadCard/Components/LeadCardDescription";
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
    <Card>
      <LeadCardHeader FirstName={ContactFullName} CreatedDate={DateCreated} />
      <LeadCardSummaryInfo>
        <LeadCardSummaryInfoItem>{Suburb}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>{Category}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: {ID}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>
          {UsCurrencyFormater(Price)} Lead Invitation
        </LeadCardSummaryInfoItem>
      </LeadCardSummaryInfo>
      <LeadCardDescription>
        <Typography gap={1}>
          <b>Contact Phone:</b> {ContactPhoneNumber}
          <b>Contact Email:</b> {ContactEmail}
        </Typography>

        <br />

        <Typography>{Description}</Typography>
      </LeadCardDescription>
    </Card>
  );
}

export default LeadCardAccepted;
