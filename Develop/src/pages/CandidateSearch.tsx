import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/candidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar: '',
    username: '',
    location: '',
    email: '',
    company: '',
    html_url: '',
  });

  const [candidatesResults, setCandidateResults] = useState<Candidate[]>([]);

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
    const data: Candidate[] = await searchGithub();
    if (data) {
      setCandidateResults(data);
      console.log(candidatesResults);
    }
  };

  useEffect(() => {
    searchForCandidate();
  }, []);

  const [count, setCount] = useState<number>(0);
  const newCount: number = setCount(count + 1);

  const rejectCandidate = () => {
    setCurrentCandidate(candidatesResults[newCount]);
  }

  const acceptCandidate = () => {
    addToPotentialCandidates();
    setCurrentCandidate(candidatesResults[newCount]);
  }

  return (
    <>
      <h1 className='pageHeader'>CandidateSearch</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToPotentialCandidates}
        rejectCandidate={rejectCandidate}
        acceptCandidate={acceptCandidate}
      />
    </>
  );
};

export default CandidateSearch;
