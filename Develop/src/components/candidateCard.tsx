import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { FcPlus } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

type CandidateCardProps = {
    currentCandidate: Candidate;
    addToSavedCandidates?: (() => void) | null;
    onSavedCandidates?: boolean | null;
    removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidates: boolean | null | undefined,
        name: string | null
      ) => void)
    | null;
};

const CandidateCard = ({
    currentCandidate,
    addToSavedCandidates,
    onSavedCandidates,
    removeFromStorage,
}: CandidateCardProps) => {
    return (
        <>
            {currentCandidate?.name ? (
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentCandidate.avatar}`} alt={`${currentCandidate.name}`} />
                    </figure>
                    <article className='details'>
                        <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
                        <p>
                            Location: {currentCandidate.location}
                        </p>
                        <p>
                            Email: {currentCandidate.email}
                        </p>
                        <p>
                            Company: {currentCandidate.company}
                        </p>
                        <p>
                            Bio: {currentCandidate.html_url}
                        </p>
                    </article>
                    {onSavedCandidates? (
                        <FcCancel
                            onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                                removeFromStorage?.(
                                    e,
                                    onSavedCandidates,
                                    currentCandidate.name
                                )
                            }
                        />
                    ):(
                        <FcPlus
                            onClick={() => addToSavedCandidates?.()}
                        />
                    )}
                </section>
            ):(
                <h1>Please search for a candidate.</h1>
            )}
        </>
    );
};

export default CandidateCard;