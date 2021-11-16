import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Experiment 1 </h1>
          <p>
            Nine-dot problem definition: Given nine dots through which four lines must be drawn in such a manner that all dots will be passed through. The pencil must not be taken from the paper and no line should be retraced.<br />
            The shape shown on the overhead projector is the solution to the nine-dot problem.<br />
            It has three lines that formed a triangle and a fourth line that cut the triangle in half.<br />
            Remember this shape because you will need it for the next exercise and for a problem at the end of the experiment. <br />
          </p>

          <p>
            <button type="button" onClick={onPrev} disabled={!hasPrev}>
              Previous
            </button>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
