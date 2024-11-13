import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './candidateCard';

interface PotentialCandidatesProps {
    potentialCandidates: Candidate[];
    removeFromStorage:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidates: boolean | null | undefined,
        login: string | null
      ) => void)
    | null;
}

const PotentialCandidatesList = ({
    potentialCandidates,
    removeFromStorage,
}: PotentialCandidatesProps) => {
    return (
        <>
            {potentialCandidates?.map((candidate) => (
                    <CandidateCard
                        currentCandidate={candidate}
                        key={candidate.login}
                        onSavedCandidates={true}
                        removeFromStorage={removeFromStorage}
                    />
            ))}
        </>
    );
};

export default PotentialCandidatesList;