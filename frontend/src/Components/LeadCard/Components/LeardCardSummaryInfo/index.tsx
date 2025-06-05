import { Box, Divider } from "@mui/material";

function LeadCardSummaryInfo({ children }: { children?: React.ReactNode }) {
  return (
    <Box>
      <Divider sx={{ marginBottom: "1rem" }} />
      <Box sx={{ display: "flex", paddingX: "1rem", gap: "1rem" }}>
        {children}
      </Box>

      <Divider sx={{ marginY: "1rem" }} />
    </Box>
  );
}

export default LeadCardSummaryInfo;
