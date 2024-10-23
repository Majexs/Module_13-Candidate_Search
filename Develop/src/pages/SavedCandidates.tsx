import type React from 'react';
import {useEffect, useState} from 'react';
import potentialCandidatesList from '../components/potentialCandidates';
import type Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    currentlyOnSavedCandidates: boolean | null | undefined,
    name: string | null
  ) => {
    e.preventDefault();
    if (currentlyOnSavedCandidates) {
      let parsedPotentialCandidates: Candidate[] = [];

      const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
      if (typeof storedPotentialCandidates === 'string') {
        parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
      }
      parsedPotentialCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.name !== name
      );
      setPotentialCandidates(parsedPotentialCandidates);
      localStorage.setItem('potentialCandidates', JSON.stringify(parsedPotentialCandidates));
    }
  };

  useEffect(() => {
    const parsedPotentialCandidates = JSON.parse(
      localStorage.getItem('potetialCandidates') as string
    );
    setPotentialCandidates(parsedPotentialCandidates);
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Potential Candidates</h1>
      {(!potentialCandidates?.length || potentialCandidates?.length === 0) ? (
        <h1>No potential candidates at this time.</h1>
      ) : (
        <potentialCandidatesList
          potentialCandidates={potentialCandidates}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SavedCandidates;
