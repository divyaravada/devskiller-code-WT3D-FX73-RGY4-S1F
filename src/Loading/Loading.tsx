import React, { FC } from "react";

import "./Loading.css";

const Loading: FC =
    () => (
        <div data-testid="loading" className="Loading">
            <div className="Loading__content">
                loading…
            </div>
        </div>
    );

export default Loading;
