// import { useSearchParams } from 'react-router-dom';
// url에 query param을 받아오는 custom component

import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime,
  );
};

export default function Home() {
  // const [params, setParams] = useSearchParams();

  usePageTitle("감정 일기장");

  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const getIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const getDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={getDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={getIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}
