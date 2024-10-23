import { type FormEvent, useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/candidateCard';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    avatar: '',
    name: '',
    username: '',
    location: '',
    email: '',
    company: '',
    html_url: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
  };

  const searchForCandidateByName = async (event: FormEvent, candidate_name: string) => {
    event.preventDefault();
    const data: Candidate = await searchGithubUser(candidate_name);
    setCurrentCandidate(data);
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <section id='searchSection'>
        <form
          onSubmit={(event: FormEvent) =>
            searchForCandidateByName(event, searchInput)
          }
        >
          <input 
            type='text'
            name=''
            id=''
            placeholder='Enter a username'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidates={addToPotentialCandidates}
      />
    </>
  );
};

export default CandidateSearch;
