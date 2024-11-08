import type React from 'react';
import {useEffect, useState} from 'react';
import PotentialCandidatesList from '../components/potentialCandidates';
import type Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnSavedCandidates: boolean | null | undefined,
    login: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnSavedCandidates) {
      let parsedPotentialCandidates: Candidate[] = [];
      const storedPotentialCandidates = localStorage.getItem('potentialCandidates') || [];
      if (typeof storedPotentialCandidates === 'string') {
        parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
      }
      parsedPotentialCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.login !== login
      );
      setPotentialCandidates(parsedPotentialCandidates);
      localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
    }
  };

  useEffect(() => {
    const parsedPotentialCandidates = JSON.parse(localStorage.getItem('potetialCandidates') as string);
    if (!parsedPotentialCandidates) {
      console.log('No candidates')
      return;
    }
    setPotentialCandidates(parsedPotentialCandidates);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Potential Candidates</h1>
      {(!PotentialCandidatesList?.length || PotentialCandidatesList?.length === 0) ? (
        <h1>No potential candidates at this time.</h1>
      ) : (
        <PotentialCandidatesList
          potentialCandidates={potentialCandidates}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SavedCandidates;
