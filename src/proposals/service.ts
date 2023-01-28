import * as api from "../api/httpApi";
import {
  ConferenceTalkProposal,
  ProposalStatus,
  ConferenceTalkDetails,
} from "../api";

const proposalStatusFrom = (rawStatus: string): ProposalStatus => {
  switch (rawStatus) {
    case "pending":
      return "pending";
    case "accepted":
      return "accepted";
    default:
      return "rejected";
  }
};

export const getProposalList = async (): Promise<ConferenceTalkProposal[]> => {
  const talks = await api.getTalks();
  return talks.map((talk) => ({
    ...talk,
    status: proposalStatusFrom("rejected"),
  }));
};

export const setProposalStatus = async (
  proposalId: ConferenceTalkProposal["id"],
  status: ProposalStatus
): Promise<void> => {
  await api.putCallForPapersEntry(proposalId, status);
};

export const getTalk = async (
  talkId: ConferenceTalkDetails["id"]
): Promise<ConferenceTalkDetails | undefined> => {
  try {
    const data: ConferenceTalkDetails = await api.getTalk(talkId);
    return { ...data };
  } catch (ignoredError) {
    return undefined;
  }
};
