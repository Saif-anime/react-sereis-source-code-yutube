import {  use } from "react"
import { DataTransfer } from "../ContextAPI/DataContextAPI"

const useCustomHook = () => {

 const myAge = use(DataTransfer)
 
  return myAge;
}

export default useCustomHook