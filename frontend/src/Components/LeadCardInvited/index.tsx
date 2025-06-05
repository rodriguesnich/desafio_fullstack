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

function LeadCardInvited() {
  return (
    <Card >
      <LeadCardHeader FirstName="Nicholas" CreatedDate={new Date()} />
      <LeadCardSummaryInfo>
        <LeadCardSummaryInfoItem>Yanderra 2574</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Painters</LeadCardSummaryInfoItem>
        <LeadCardSummaryInfoItem>Job ID: 5577421</LeadCardSummaryInfoItem>
      </LeadCardSummaryInfo>
      <LeadCardDescription />
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
            <b>$Price</b> Lead Invitation
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default LeadCardInvited;
