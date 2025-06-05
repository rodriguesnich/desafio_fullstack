import { Card } from "@mui/material";
import LeadCardHeader from "./Components/LeadCardHeader";
import LeadCardSummaryInfo from "./Components/LeardCardSummaryInfo";
import LeadCardDescription from "./Components/LeadCardDescription";
import LeadCardActions from "./Components/LeadCardActions";

interface LeadCardComposition {
  Header: typeof LeadCardHeader;
  SummaryInfo: typeof LeadCardSummaryInfo;
  Description: typeof LeadCardDescription;
  Actions: typeof LeadCardActions;
}

interface LeadCardProps {
  children?: React.ReactNode;
}

const LeadCard: React.FC<LeadCardProps> & LeadCardComposition = ({ children }) => {
  return <Card>{children}</Card>;
};

LeadCard.Header = LeadCardHeader;
LeadCard.SummaryInfo = LeadCardSummaryInfo;
LeadCard.Description = LeadCardDescription;
LeadCard.Actions = LeadCardActions;

export default LeadCard;
