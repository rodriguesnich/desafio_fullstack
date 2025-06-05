import { Box, CardActions, Divider } from "@mui/material";

interface LeadCardActionsProps {
  children?: React.ReactNode;
}

function LeadCardActions({ children }: LeadCardActionsProps) {
  return (
    <>
      <Divider />
      <CardActions sx={{ marginY: "1rem" }}>
        {children}
      </CardActions>
    </>
  );
}

export default LeadCardActions;
