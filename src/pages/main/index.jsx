import React from "react";
import { connect } from "react-redux";

const index = (props) => {
  const { eSESSION } = props;
  return (
    <div>
      <h3>
        Hello :)
        <br />
        I'm Main Component
      </h3>
      message : {eSESSION.message}
    </div>
  );
};

export default connect((state) => {
  return {
    eSESSION: state.data.eSESSION.eSESSION,
  };
})(index);
