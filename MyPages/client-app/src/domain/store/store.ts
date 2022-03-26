import { createContext, useContext } from "react";
import SiteSettingStore from "./stiteSettingStore";

interface Store{
  siteSettingStore:SiteSettingStore;
}

export const store:Store ={
  siteSettingStore: new SiteSettingStore(),

}

export const StoreContext = createContext(store)

export function useStore(){
  return useContext(StoreContext);
}