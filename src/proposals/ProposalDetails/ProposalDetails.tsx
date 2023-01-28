import React, { FC } from "react";

import DetailsSection from "../DetailsSection";

import "./ProposalDetails.css";

type ProposalDetailsProps = Readonly<{
  talk: {
    speaker?: string;
    category?: string;
    description?: string;
  };
}>;

const ProposalDetails: FC<ProposalDetailsProps> = ({ talk }) => {
  const { speaker, category, description } = talk;
  return (
    <div data-testid="proposal-details" className="ProposalDetails">
      <DetailsSection className="ProposalDetails__speaker" name="speaker">
        {speaker}
      </DetailsSection>
      <DetailsSection className="ProposalDetails__category" name="category">
        {category}
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__description"
        name="description"
      >
        {description}
      </DetailsSection>
    </div>
  );
};

export default ProposalDetails;
