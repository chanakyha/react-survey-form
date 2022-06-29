import React from "react";
import questions from "../assets/data/Questions";
import { Button, Radio } from "@material-tailwind/react";

const SurveyScreen = () => {
  return (
    <div className="h-screen w-screen bg-blue-100">
      <div className="flex justify-center items-center bg-red-400 h-[10%] md:h-[15%]">
        <p className=" relative bottom-4 text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          The Survey Form
        </p>
      </div>
      <div className="w-screen flex justify-center items-center">
        <SurveyData />
      </div>
    </div>
  );
};

export default SurveyScreen;

const SurveyData = () => (
  <div className="md:w-[50%] overflow-y-auto h-[88vh] rounded-lg relative bottom-10 md:bg-green-100 p-7 mt-5 md:mt-0 md:shadow-lg">
    <p className="text-center md:bg-transparent md:outline-0 bg-grey-200 md:text-left outline p-2 rounded-lg">
      The Question which are mentioned
      <span className="text-red-600 text-2xl">(*)</span> are compulsory.
    </p>
    {questions.map((question, index) => (
      <InputContainer
        question={question}
        id={question.id}
        options={question.options}
        key={index}
      />
    ))}
    <div className="flex w-full justify-center md:justify-end">
      <Button color="gradient">Submit</Button>
    </div>
  </div>
);

const InputContainer = ({ question, options, id }) => (
  <div className="outline p-5 rounded-lg mx-5 my-4 bg-white">
    <p>{question.question}</p>
    <p className="md:flex gap-10">
      {options.map((option, index) => (
        <Radio id="green" color="green" key={index} name={id} label={option} />
      ))}
    </p>
  </div>
);
