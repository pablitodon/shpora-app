import React from "react";
// import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

import ProjectStructure from "./pages/ProjectStructure";
import LayoutNavigation from "./pages/Navigation/LayoutNavigation";
import VirtualDom from "./pages/VirtualDom";
import Componets from "./pages/Componets";
import Props from "./pages/Props";
import State from "./pages/State";
import LifeCycle from "./pages/LifeCycle";
import Events from "./pages/Events";
import Context from "./pages/Context";
import Routing from "./pages/Routing";
import StoragesComponent from "./pages/Storages/StoragesComponent";
import RhfANTDyup from "./components/ReactForms/RhfANTDyup";
import ReactHookFormAndFormik from "./pages/ReactHookFormAndFormik";
import ReactHookForms from "./components/ReactForms/ReactHookForms";
import FormikComponent from "./components/ReactForms/Formik";
import FormWithRHFControllerANTD from "./components/ReactForms/FormWithRHFControllerANTD";

import RefsKeysUseMemoHome from "./pages/refs-use_memo/RefsKeysUseMemoHome";
import Refs from "./pages/refs-use_memo/Refs";
import Keys from "./pages/refs-use_memo/Keys";
import ReactMemo from "./pages/refs-use_memo/ReactMemo";
import FragmentComponent from "./pages/refs-use_memo/FragmentComponent";
import UseMemo from "./pages/refs-use_memo/UseMemo";
import UseCallback from "./pages/refs-use_memo/UseCallback";
import LocalStorageComponent from "./pages/Storages/LocalStorageComponent";
import CookiesComponent from "./pages/Storages/CookiesComponent";
import SessionStorage from "./pages/Storages/SessionStorage";
import LocalForage from "./pages/Storages/LocalForage";
import HocComponent from "./pages/HOC";
import FluxComponent from "./pages/FluxComponent";
import ReactRedux from "./pages/redux/ReactRedux";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutNavigation />}>
          <Route path="/Структура проекта" element={<ProjectStructure />} />
          <Route path="/Введение в VirtualDOM" element={<VirtualDom />} />
          <Route path="/Components" element={<Componets />} />
          <Route path="/Props" element={<Props />} />
          <Route path="/State(useState)" element={<State />} />
          <Route path="/LifeCycle(useEffect)" element={<LifeCycle />} />
          <Route path="/Events" element={<Events />} />
          <Route
            path="/Refs,Fragment,key,React.memo,useMemo,..."
            element={<RefsKeysUseMemoHome />}
          />
          <Route path="/Refs" element={<Refs />} />
          <Route path="/Keys" element={<Keys />} />
          <Route path="/react-memo" element={<ReactMemo />} />
          <Route path="/fragment" element={<FragmentComponent />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/Context(useContext)" element={<Context />} />
          <Route path="/Routing" element={<Routing />} />
          <Route
            path="/react-hook-form VS formik"
            element={<ReactHookFormAndFormik />}
          />
          <Route path="/react-hook-form" element={<ReactHookForms />} />
          <Route path="/formik" element={<FormikComponent />} />
          <Route path="/controller-component" element={<FormWithRHFControllerANTD />} />
          <Route path="/RhfANTDyup" element={<RhfANTDyup />} />
          <Route
            path="/Про STORAGEs(Local Storage,Session Storage,Local Forage...)"
            element={<StoragesComponent />}
          />
          <Route path="/localstorage" element={<LocalStorageComponent />} />
          <Route path="/cookiescomponent" element={<CookiesComponent />} />
          <Route path="/sessionstorage" element={<SessionStorage />} />
          <Route path="/localforage" element={<LocalForage />} />
          <Route path="/HOC" element={<HocComponent />} />
          <Route path="/Flux" element={<FluxComponent />} />
          <Route path="/React-Redux:actions,reducers,store,..." element={<ReactRedux />} />
        </Route>
      </Routes>
      
    </>
  );
};

export default App;
