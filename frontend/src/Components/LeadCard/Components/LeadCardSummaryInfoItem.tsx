import { Box } from "@mui/material";

function LeadCardSummaryInfoItem({children}: {children?: React.ReactNode}) {
    return ( 
        <Box>[{children}]</Box>

     );
}

export default LeadCardSummaryInfoItem;