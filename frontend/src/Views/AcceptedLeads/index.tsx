import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCardAccepted from "../../Components/LeadCardAccepted";
import { AcceptedLeadDTO, getAcceptedLeads } from "../../Apis/GetAcceptedLeadsService";

function AcceptedLeadsView() {
  const [acceptedLeads, setAcceptedLeads] = useState<AcceptedLeadDTO[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcceptedLeads = async () => {
      try {
        const leads = await getAcceptedLeads();
        setAcceptedLeads(leads);
      } catch (err) {
        setError('Failed to load accepted leads');
        console.error(err);
      }
    };

    fetchAcceptedLeads();
  }, []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {acceptedLeads.map((lead) => (
        <LeadCardAccepted
          key={lead.id}
          ID={lead.id}
          Category={lead.category}
          ContactFullName={lead.contactFullName}
          DateCreated={new Date(lead.dateCreated)}
          Description={lead.description}
          Suburb={lead.suburb}
          Price={lead.price}
          ContactPhoneNumber={lead.contactPhoneNumber}
          ContactEmail={lead.contactEmail}
        />
      ))}
    </Box>
  );
}

export default AcceptedLeadsView;