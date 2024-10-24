import { useState } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/candidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar: '',
    username: '',
    location: '',
    email: '',
    company: '',
    html_url: '',
  });

  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
  };

  const searchForCandidate = async () => {
    const data: Candidate = await searchGithub();
    setCurrentCandidate(data);
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <section id='searchSection'>
        <div
          onLoad={() =>
            searchForCandidate
          }
        >
        </div>
      </section>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToPotentialCandidates}
      />
    </>
  );
};

export default CandidateSearch;
