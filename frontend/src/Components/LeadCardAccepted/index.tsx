import { Card } from "@mui/material";
import LeadCardHeader from "../LeadCard/Components/LeadCardHeader";
import LeadCardSummaryInfo from "../LeadCard/Components/LeardCardSummaryInfo";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeardCardSummaryInfo/LeadCardSummaryInfoItem";
import LeadCardDescription from "../LeadCard/Components/LeadCardDescription";

function LeadCardAccepted() {
  return (
    <Card >
      <LeadCardHeader FirstName="Nicholas" CreatedDate={new Date()} />
      <LeadCardSummaryInfo>
        <LeadCardSummaryInfoItem>Yanderra 2574</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Painters</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: 5577421</LeadCardSummaryInfoItem>
      </LeadCardSummaryInfo>
      <LeadCardDescription />
    </Card>
  );
}

export default LeadCardAccepted;
