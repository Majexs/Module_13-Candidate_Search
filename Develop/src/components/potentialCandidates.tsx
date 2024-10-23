import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './candidateCard';

interface PotentialCandidatesProps {
    potentialCandidates: Candidate[];
    removeFromStorage:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnList: boolean | null | undefined,
        name: string | null
      ) => void)
    | null;
}

const potentialCandidatesList = ({
    potentialCandidates,
    removeFromStorage,
}: PotentialCandidatesProps) => {
    console.log(potentialCandidates);

    return (
        <>
            <ul>
                {potentialCandidates.map((candidate) => (
                    <CandidateCard
                        currentCandidate={candidate}
                        key={candidate.name}
                        onSavedCandidates={true}
                        removeFromStorage={removeFromStorage}
                    />
                ))}
            </ul>
        </>
    );
};

export default potentialCandidatesList;