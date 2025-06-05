import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCardAccepted from "../../Components/LeadCardAccepted";
import { AcceptedLeadDTO, getAcceptedLeads } from "../../Apis/GetAcceptedLeadsService";
import { LeadsAdapter, AcceptedLeadCardProps } from "../../Adapters/LeadsAdapter";

function AcceptedLeadsView() {
  const [acceptedLeads, setAcceptedLeads] = useState<AcceptedLeadCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcceptedLeads = async () => {
      try {
        const leads = await getAcceptedLeads();
        setAcceptedLeads(leads.map(LeadsAdapter.toAcceptedLeadCard));
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
          key={lead.ID}
          {...lead}
        />
      ))}
    </Box>
  );
}

export default AcceptedLeadsView;