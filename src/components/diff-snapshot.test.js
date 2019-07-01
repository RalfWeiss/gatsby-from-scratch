const React = require("react");
const renderer = require("react-test-renderer");
// const styled = require('styled-components')
import styled from "styled-components";
const { toMatchDiffSnapshot } = require("snapshot-diff");

const Component = ({ test, className }) => <p {...{ className }}>{test}</p>;

const StyledComponent = styled(Component)`
  background-color: blue;
`;

expect.extend({ toMatchDiffSnapshot });

test("snapshot difference between 2 React components state", () => {
  expect(<Component test="say" />).toMatchDiffSnapshot(
    <Component test="my name" />
  );
});

test("snapshot component", () => {
  expect(<Component test="say" />).toMatchSnapshot();
});

test("inlineSnapshot styled component", () => {
  expect(<StyledComponent test="say" />).toMatchInlineSnapshot(`
    <ForwardRef(Styled(Component))
      test="say"
    />
  `);
});

test("snapshot styled component", () => {
  expect(<StyledComponent test="say" />).toMatchSnapshot();
});


it("match expected snapsho", () => {
  const propValue = "my value";
  const tree = renderer.create(<Component test={propValue} />).toJSON();
  const expectedSnapshot = `
    <p>
      ${propValue}
    </p>
`;
  // expect(tree).toMatchSnapshot();
  expect(tree).toMatchInlineSnapshot(expectedSnapshot);
});
