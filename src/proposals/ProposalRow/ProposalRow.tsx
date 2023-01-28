import React, { MouseEventHandler, FC } from "react";
import classNames from "classnames";

import { ConferenceTalkProposal, ProposalStatus } from "../../api";

import "./ProposalRow.css";

const withoutEventDefault =
  (callback: () => void): MouseEventHandler<any> =>
  (event) => {
    event.preventDefault();
    callback();
  };

type ProposalRowProps = Readonly<{
  proposal: ConferenceTalkProposal;
  onStatusUpdate: (
    id: ConferenceTalkProposal["id"],
    status: ProposalStatus
  ) => void;
}>;

const ProposalRow: FC<ProposalRowProps> = ({ proposal, onStatusUpdate }) => {
  const { id, title, speaker, status, category } = proposal;
  return (
    <div
      data-testid={`proposal-id-${id}`}
      className={classNames("ProposalRow", "ProposalRow--accepted")}
    >
      <div className="ProposalsRow__status_indicator" />
      <div className="ProposalsRow__title">{title}</div>
      <div className="ProposalsRow__speaker" /> {speaker}
      <div className="ProposalsRow__category">category: {category}</div>
      <div className="ProposalsRow__status">
        status: {status ? status : "(unknown)"}
      </div>
      {status !== "accepted" && (
        <button
          disabled
          className="ProposalsRow__accept_button_placeholder ProposalsRow__accept_button"
          onClick={withoutEventDefault(() => onStatusUpdate(id, "accepted"))}
        >
          Accept
        </button>
      )}
      {status !== "rejected" && (
        <button
          className="ProposalsRow__reject_button ProposalsRow__reject_button_placeholder"
          onClick={withoutEventDefault(() => onStatusUpdate(id, "rejected"))}
        >
          Reject
        </button>
      )}
    </div>
  );
};

export default ProposalRow;
