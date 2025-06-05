import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Typography,
} from "@mui/material";
import LeadCardHeader from "../LeadCard/Components/LeadCardHeader";
import LeadCardSummaryInfo from "../LeadCard/Components/LeardCardSummaryInfo";
import LeadCardSummaryInfoItem from "../LeadCard/Components/LeardCardSummaryInfo/LeadCardSummaryInfoItem";
import LeadCardDescription from "../LeadCard/Components/LeadCardDescription";
import UsCurrencyFormater from "../../Helpers/UsCurrencyFormater";

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
    <Card>
      <LeadCardHeader FirstName={ContactFirstName} CreatedDate={DateCreated} />
      <LeadCardSummaryInfo>
        <LeadCardSummaryInfoItem>{Suburb}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>{Category}</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: {ID}</LeadCardSummaryInfoItem>
      </LeadCardSummaryInfo>
      <LeadCardDescription>
        <Typography>{Description}</Typography>
      </LeadCardDescription>
      {/* migra pra lead card action padrão composição */}
      <Divider />
      <CardActions sx={{ marginY: "1rem" }}>
        <Box gap={1} display="flex">
          <Button variant="contained">Accept</Button>
          <Button variant="contained" color="inherit">
            Decline
          </Button>
        </Box>
        <Box>
          <Typography>
            <b>{UsCurrencyFormater(Price)}</b> Lead Invitation
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default LeadCardInvited;
