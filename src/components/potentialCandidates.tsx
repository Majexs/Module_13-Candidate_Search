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
            <ol>
                {potentialCandidates?.map((candidate, i) => (
                        <CandidateCard
                            currentCandidate={candidate}
                            key={i}
                            onSavedCandidates={true}
                            removeFromStorage={removeFromStorage}
                        />
                ))}
            </ol>
        </>
    );
};

export default PotentialCandidatesList;