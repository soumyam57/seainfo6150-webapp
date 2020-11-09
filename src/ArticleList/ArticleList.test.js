import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from './ArticleList';

const articleArray = [
    {
        key: "181122102925-statue-of-liberty-crown"[
            {
                author: "Kate Farley",
                displayDate: "November 22nd 2018, 7:12 am",
                shortText: "The Statue of Liberty's original torch is getting a new home",
                title: "The Statue of Liberty's torch heads to new museum"
            }
        ]
    }
    ,
    {
        key: "170321135754-airport-security-line"[
        {
            author: "Cathryn Lindsey",
            displayDate: "November 21st 2018, 2:57 pm",
            shortText: "Getting excited to eat your mother's roast turkey, your uncle's stuffing and your sister's famous green bean casserole?",
            title: "You can take a pie on a plane"
        }
    ]
}]


describe("Articlelist tests", () => {
    it("renders correctly when passed an array", () => {
    const { container } = render(<ArticleList  articles={Object.values(articleArray)}  key={articleArray.key}/>);
      expect(container).toMatchSnapshot();
    });
});
