import { Box } from "@mui/material";

function LeadCardSummaryInfoItem({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {children}
    </Box>
  );
}

export default LeadCardSummaryInfoItem;
