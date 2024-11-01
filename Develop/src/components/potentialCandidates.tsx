import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './candidateCard';

interface PotentialCandidatesProps {
    potentialCandidates: Candidate[];
    removeFromStorage:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidates: boolean | null | undefined,
        username: string | null
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
                <li>
                    {potentialCandidates.map((candidate) => (
                        <CandidateCard
                            currentCandidate={candidate}
                            key={candidate.username}
                            onSavedCandidates={true}
                            removeFromStorage={removeFromStorage}
                        />
                    ))}
                </li>
            </ul>
        </>
    );
};

export default potentialCandidatesList;