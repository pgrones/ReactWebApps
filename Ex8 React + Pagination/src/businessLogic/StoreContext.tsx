import React from "react";
import {Store} from "./Store";

const storesContext = React.createContext(new Store());

export const useStore = () => React.useContext(storesContext);
