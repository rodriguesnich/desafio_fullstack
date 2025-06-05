import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import LeadCardInvited from "../../Components/LeadCardInvited";
import { getPeddingLeads, PeddingLeadDTO } from "../../Apis/GetPeddingLeadsService";

function PeddingLeadsView() {
    const [peddingLeads, setPeddingLeads] = useState<PeddingLeadDTO[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPeddingLeads = async () => {
            try {
                const leads = await getPeddingLeads();
                setPeddingLeads(leads);
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
                    key={lead.id}
                    ID={lead.id}
                    ContactFirstName={lead.contactFirstName}
                    Suburb={lead.suburb}
                    Category={lead.category}
                    DateCreated={new Date(lead.dateCreated)}
                    Description={lead.description}
                    Price={lead.price}
                />
            ))}
        </Box>
    );
}

export default PeddingLeadsView;