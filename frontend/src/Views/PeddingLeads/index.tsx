import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCardInvited from "../../Components/LeadCardInvited";
import { getPeddingLeads } from "../../Apis/GetPeddingLeadsService";
import { LeadsAdapter, PeddingLeadCardProps } from "../../Adapters/LeadsAdapter";

function PeddingLeadsView() {
    const [peddingLeads, setPeddingLeads] = useState<PeddingLeadCardProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchPeddingLeads = async () => {
        try {
            const leads = await getPeddingLeads();
            setPeddingLeads(leads.map(LeadsAdapter.toPeddingLeadCard));
        } catch (err) {
            setError('Failed to load pending leads');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPeddingLeads();
    }, []);

    const handleLeadDeclined = (declinedLeadId: string) => {
        setPeddingLeads(prevLeads => prevLeads.filter(lead => lead.ID !== declinedLeadId));
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {peddingLeads.map((lead) => (
                <LeadCardInvited
                    key={lead.ID}
                    {...lead}
                    onDecline={() => handleLeadDeclined(lead.ID)}
                />
            ))}
        </Box>
    );
}

export default PeddingLeadsView;