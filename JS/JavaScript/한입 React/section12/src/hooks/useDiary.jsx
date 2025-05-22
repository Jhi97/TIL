import { useContext } from "react";
import { DiaryStateContext } from "../App.jsx";

const useDiary = () => {
  const data = useContext(DiaryStateContext);
};
