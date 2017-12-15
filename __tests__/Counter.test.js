import React from 'react';
import Counter from "../src/Counter";
import renderer from "react-test-renderer";

describe ("the count function",()=>{
  it ("displays the count",()=>{
    const counter = renderer.create(<Counter legend="Count" count={34}/>)
    expect(counter.toJSON).toMatchSnapshot();
  });
});
