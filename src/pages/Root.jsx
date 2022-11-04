import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Routes } from "react-router";

import Main from "./main";

import * as ActionSession from "../store/action/eSESSION";

const index = (props) => {
  const dispatch = useDispatch();

  const message = "PROJECT-MESSAGE";

  useEffect(() => {
    dispatch(ActionSession.setSession({ message }));
  }, []);

  return (
    <div>
      <h1> I'm Root!</h1>
      <Routes>
        <Route path={"/"} element={<Main />} strict={false} {...props} />
      </Routes>
    </div>
  );
};

export default index;
