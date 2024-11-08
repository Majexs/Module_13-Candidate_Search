import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { FcPlus } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";

type CandidateCardProps = {
    currentCandidate: Candidate;
    onSavedCandidates?: boolean | null;
    removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedCandidates: boolean | null | undefined,
        login: string | null
      ) => void)
    | null;
    rejectCandidate?: (() => void) | null;
    acceptCandidate?: (() => void) | null;
};

const CandidateCard = ({
    currentCandidate,
    onSavedCandidates,
    removeFromStorage,
    rejectCandidate,
    acceptCandidate,
}: CandidateCardProps) => {
    return (
        <>
            <section className='table'>
                <figure>
                    <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />
                </figure>
                <h2>{currentCandidate.login}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Location: {currentCandidate.location}</td>
                        </tr>
                        <tr>
                            <td>Email: {currentCandidate.email}</td>
                        </tr>
                        <tr>
                            <td>Company: {currentCandidate.company}</td>
                        </tr>
                        <tr>
                            <td>
                                url: {currentCandidate.html_url}
                            </td>
                        </tr>
                    </tbody>
                </table>
                {onSavedCandidates? (
                    <button>
                        <FcMinus
                                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                                    removeFromStorage?.(
                                        e,
                                        onSavedCandidates,
                                        currentCandidate.login
                                    )
                                }
                        />
                    </button>
                ):(
                    <>
                        <button>
                            <FcPlus
                                onClick={() => acceptCandidate?.()}
                            />
                        </button>
                        <button>
                            <FcMinus
                                onClick={() => rejectCandidate?.()}
                            />
                        </button>
                    </>
                )}
            </section>
        </>
    );
};

export default CandidateCard;