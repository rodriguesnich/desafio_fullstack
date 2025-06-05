import { Avatar, CardHeader, Divider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { formatCreatedDate, parseFirstNameInitial } from "./helpers";

interface LeadCardHeaderProps {
  FirstName: string;
  CreatedDate: Date;
}

function LeadCardHeader({ FirstName, CreatedDate }: LeadCardHeaderProps) {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
            {parseFirstNameInitial(FirstName)}
          </Avatar>
        }
        sx={{ textAlign: "left" }}
        title={FirstName}
        subheader={formatCreatedDate(CreatedDate)}
      />
    </>
  );
}

export default LeadCardHeader;
