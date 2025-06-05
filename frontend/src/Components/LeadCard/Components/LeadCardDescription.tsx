import { Box, Typography } from "@mui/material";

function LeadCardDescription({ children }: { children?: React.ReactNode }) {
  return <Box sx={{ marginBottom: "1rem" }}>{children}</Box>;
}

export default LeadCardDescription;
