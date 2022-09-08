import React from "react";
import { Route, Routes } from "react-router";

import ROLES_LIST from "./roles";

import { Layout } from "./Components/Layout";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import UnAuthorized from "./Components/UnAuthorized";
import LinkPage from "./Components/LinkPage";
import Editor from "./Components/Editor";
import Admin from "./Components/Admin";
import Home from "./Components/Home";
import { RequiredAuth } from "./Components/RequiredAuth";
import Missing from "./Components/Missing";

export const App = () => {
  return (
    <Routes>
      {/* Under Layout each route will come as Outlet in Layout component */}
      <Route path="/" element={<Layout />}>
        {/* Publick Pages */}
        <Route path="login" element={<Login />} />
        <Route path="registor" element={<Sign />} />
        <Route path="linkPage" element={<LinkPage />} />
        <Route path="unauthorized" element={<UnAuthorized />} />

        {/* Private Pages - We want protect these routes */}
        {/* before going any following page, it will go <RequiredPath /> first */}
        <Route element={<RequiredAuth allowedRoles={[ROLES_LIST.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequiredAuth allowedRoles={[ROLES_LIST.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<RequiredAuth allowedRoles={[ROLES_LIST.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        {/* Catch all other routes */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};
