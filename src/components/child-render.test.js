const React = require("react");
const renderer = require("react-test-renderer");
// const styled = require('styled-components')
// import styled from "styled-components";
//const { toMatchDiffSnapshot } = require("snapshot-diff");
import * as R from "ramda";
const Component = ({ className, children }) => (
  <p {...{ className }}>{children}</p>
);

const ComponentToTest = () => (
  <Component>
    <div>My child!</div>
  </Component>
);

test("should be equal inlineSnapshot ", () => {
  const tree = renderer.create(<ComponentToTest />).toJSON();
  // expectedSnapshot
  expect(tree).toMatchInlineSnapshot(`
        <p>
          <div>
            My child!
          </div>
        </p>
    `);
});

test("should be equal expected inlineSnapshot ", () => {
  const tree = renderer.create(<ComponentToTest />).toJSON();
  const expectedSnapshot = `
  <p>
    <div>
      My child!
    </div>
  </p>
`;
  expect(tree).toMatchInlineSnapshot(expectedSnapshot);
});

test("should be equal object snapshot ", () => {
  const tree = renderer.create(<ComponentToTest />).toJSON();
  const expectedSnapshot = {
    tree: expect.any(Object)
  };
  expect({ tree }).toMatchSnapshot(expectedSnapshot);
});

test("should be equal modified object snapshot ", () => {
  const tree = renderer.create(<ComponentToTest />).toJSON();
  // console.log("tree: ", JSON.stringify(tree, 0, 2));
  /*
      "type": "p",
      "props": {},
      "children": [
        {
          "type": "div",
          "props": {},
          "children": [
            "My child!"
          ]
        }
      ]  
  */
  const expectedSnapshot = {
    tree: expect.objectContaining({
      // type: expect.any(String)
      type: 'p'
    })
  };

  expect({ tree }).toMatchObject( expectedSnapshot )

});

test("should object description ", () => {
  const tree = renderer.create(<ComponentToTest />).toJSON();
  // console.log("tree: ", JSON.stringify(tree, 0, 2));
  /*
      "type": "p",
      "props": {},
      "children": [
        {
          "type": "div",
          "props": {},
          "children": [
            "My child!"
          ]
        }
      ]  
  */
  const expectedShape = {
    type: 'p',    
    props: {},
    children: expect.arrayContaining(
      [
        expect.objectContaining(
          { 
            type : "div"
          }
        )
      ]
    )
    /*children: expect.objectContaining({
      type: "div"
    })*/
  };

  expect(tree).toMatchObject( expectedShape )

});
