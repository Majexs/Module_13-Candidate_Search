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
        username: string | null
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
            {currentCandidate?.username ? (
                <section className='table'>
                    <figure>
                        <img src={`${currentCandidate.avatar}`} alt={`${currentCandidate.username}`} />
                    </figure>
                    <article className='details'>
                        <h2>{currentCandidate.username}</h2>
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
                                    currentCandidate.username
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