import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCardInvited from "../../Components/LeadCardInvited";
import { getPeddingLeads } from "../../Apis/GetPeddingLeadsService";
import { LeadsAdapter, PeddingLeadCardProps } from "../../Adapters/LeadsAdapter";

function PeddingLeadsView() {
    const [peddingLeads, setPeddingLeads] = useState<PeddingLeadCardProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPeddingLeads = async () => {
            try {
                const leads = await getPeddingLeads();
                setPeddingLeads(leads.map(LeadsAdapter.toPeddingLeadCard));
            } catch (err) {
                setError('Failed to load pending leads');
                console.error(err);
            }
        };

        fetchPeddingLeads();
    }, []);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {peddingLeads.map((lead) => (
                <LeadCardInvited
                    key={lead.ID}
                    {...lead}
                />
            ))}
        </Box>
    );
}

export default PeddingLeadsView;