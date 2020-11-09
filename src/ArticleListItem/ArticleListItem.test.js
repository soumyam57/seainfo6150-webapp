import React from 'react';
import renderer from 'react-test-renderer';
import ArticleListItem from './ArticleListItem';

const article={
        author: "Kate Farley",
        displayDate: "November 22nd 2018, 7:12 am",
        shortText: "The Statue of Liberty's original torch is getting a new home",
        title: "The Statue of Liberty's torch heads to new museum"
}

describe("ArticlelistItem tests", () => {
    it("renders correctly when passed an object", () => {
    const { container } = render(<ArticleListItem article={article}/>);
      expect(container).toMatchSnapshot();
    });
});