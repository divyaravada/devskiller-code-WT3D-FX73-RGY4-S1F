import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ConferenceTalkProposal, ProposalStatus } from "../../api";

import ProposalRow from "../ProposalRow";

import "./ProposalList.css";

type ProposalListProps = Readonly<{
  proposals: ConferenceTalkProposal[];
  onProposalStatusUpdate: (
    id: ConferenceTalkProposal["id"],
    status: ProposalStatus
  ) => void;
}>;

const ProposalList: FC<ProposalListProps> = (props: ProposalListProps) => (
  <ul data-testid="proposal-list" className="ProposalList">
    {props.proposals.map((proposal: ConferenceTalkProposal) => (
      <li key={proposal.id} className="ProposalList__item">
        <Link
          key={proposal.id}
          className="ProposalList__item__link"
          to={`/proposals/${proposal.id}`}
        >
          <ProposalRow
            proposal={proposal}
            onStatusUpdate={props.onProposalStatusUpdate}
          />
        </Link>
      </li>
    ))}
  </ul>
);

export default ProposalList;
