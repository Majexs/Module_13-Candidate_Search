import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/candidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar_url: '',
    login: '',
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
    console.log(parsedPotentialCandidates);
  };

  const searchForCandidate = async () => {
    const data: Candidate[] = await searchGithub();
    const userData = await searchGithubUser(data[0].login || '');
    if (data) {
      setCandidateResults(data);
      setCurrentCandidate(userData);
    }
  };

  useEffect(() => {
    searchForCandidate();
  }, []);

  const [count, setCount] = useState<number>(0);

  const rejectCandidate = () => {
    setCount(count + 1);
    setCurrentCandidate(candidatesResults[count]);
  }

  const acceptCandidate = () => {
    setCount(count + 1);
    addToPotentialCandidates();
    setCurrentCandidate(candidatesResults[count]);
  }

  return (
    <>
      <h1 className='pageHeader'>CandidateSearch</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        acceptCandidate={acceptCandidate}
        rejectCandidate={rejectCandidate}
      />
    </>
  );
};

export default CandidateSearch;
