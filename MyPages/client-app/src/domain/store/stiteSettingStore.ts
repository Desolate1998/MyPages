import { action, makeAutoObservable, observable } from "mobx";


export default class SiteSettingStore {

  constructor() {
    if(localStorage.getItem('theme')===null){
      localStorage.setItem('theme','light');
    }else{
       this.setTheme(localStorage.getItem('theme') as 'light'|'dark')
    };

    makeAutoObservable(this)
  }

  @action setTheme(theme:'light'|'dark'){
    this.theme =theme;
    if(theme==='dark'){
      document.body.style.backgroundColor = "#26262c";
    }else{
      document.body.style.backgroundColor = "#DAE0E6";
    }
    localStorage.setItem('theme',theme);
  }

  @observable theme:'light'|'dark' = "light";

} 