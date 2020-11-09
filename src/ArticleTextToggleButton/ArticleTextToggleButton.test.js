import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

const isTextShowing = false;
function onClick(){
    isTextShowing = !isTextShowing;
}

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
    const { container } = render(<ArticleTextToggleButton  buttonText="Show more" onClick={onClick}/>);
      expect(container).toMatchSnapshot();
    });
});

