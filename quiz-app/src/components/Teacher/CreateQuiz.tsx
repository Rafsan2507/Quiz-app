"use client";
import { AppDispatch, RootState } from "@/redux/store";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MCQQuestion,
  TrueFalseQuestion,
  QuizForm,
  addQuizInfo,
} from "@/redux/Quiz/TeacherSlice";
import ShowQuizForm from "./ShowQuizForm";
type Props = {};

const CreateQuiz = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [mcqList, setMcqList] = useState<MCQQuestion[]>([]);
  const [trueFalseList, setTrueFalseList] = useState<TrueFalseQuestion[]>([]);
  const [saved, setSaved] = useState<boolean>(false);

  const quiz = useSelector((state: RootState) => state.addQuizInfo);

  console.log(quiz);

  const handleMcqQuestionChange = (index: number, value: string) => {
    const updatedMcqList = [...mcqList];
    updatedMcqList[index].question = value;
    setMcqList(updatedMcqList);
  };

  const handleMcqOptionChange = (
    index: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedMcqList = [...mcqList];
    updatedMcqList[index].options[optionIndex] = value;
    setMcqList(updatedMcqList);
  };

  const handleTrueFalseQuestionChange = (index: number, value: string) => {
    const updatedTrueFalseList = [...trueFalseList];
    updatedTrueFalseList[index].question = value;
    setTrueFalseList(updatedTrueFalseList);
  };

  const handleTrueFalseAnswerChange = (
    index: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedTrueFalseList = [...trueFalseList];
    updatedTrueFalseList[index].answer[optionIndex] = value;
    setTrueFalseList(updatedTrueFalseList);
  };

  const handleAddMcqQuestion = () => {
    setMcqList([...mcqList, { question: "", options: ["", "", "", ""] }]);
  };

  const handleAddTrueFalseQuestion = () => {
    setTrueFalseList([...trueFalseList, { question: "", answer: ["", ""] }]);
  };

  const handleSubmit = () => {
    const quizData: QuizForm = {
      title,
      duration,
      mcqQuestions: mcqList,
      trueFalseQuestions: trueFalseList,
    };
    dispatch(addQuizInfo([quizData]));
    setSaved(true);
  };

  return (
    <>
    <Box mx={"20vw"} bg={"#f8f0ff"} p={"6"}>
      <HStack spacing={"24px"}>
        <FormControl>
          <FormLabel fontSize={"lg"}>Add a Title</FormLabel>
          <Input
            type="text"
            borderColor={"gray.400"}
            _hover={{ borderColor: "gray.400" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"lg"}>Duration</FormLabel>
          <Input
            type="number"
            borderColor={"gray.400"}
            _hover={{ borderColor: "gray.400" }}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </FormControl>
      </HStack>

      <HStack spacing={"20px"} my={"5"}>
        <Button
          bg={"#7468d4"}
          gap={"2"}
          textColor={"white"}
          fontWeight={"semibold"}
          _hover={{ bg: "#7468d4", color: "white" }}
          onClick={handleAddMcqQuestion}
        >
          Add MCQ
        </Button>
        <Button
          bg={"#7468d4"}
          gap={"2"}
          textColor={"white"}
          fontWeight={"semibold"}
          _hover={{ bg: "#7468d4", color: "white" }}
          onClick={handleAddTrueFalseQuestion}
        >
          Add True/False
        </Button>
      </HStack>

      {mcqList.map((mcq, index) => (
        <Box key={index} my={"4"}>
          <FormControl>
            <FormLabel fontSize={"lg"}>MCQ Question {index + 1}</FormLabel>
            <Input
              type="text"
              borderColor={"gray.400"}
              _hover={{ borderColor: "gray.400" }}
              value={mcq.question}
              onChange={(e) => handleMcqQuestionChange(index, e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"lg"}>Options</FormLabel>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {mcq.options.map((option, optionIndex) => (
                <Input
                  key={optionIndex}
                  type="text"
                  borderColor={"gray.400"}
                  _hover={{ borderColor: "gray.400" }}
                  value={option}
                  onChange={(e) =>
                    handleMcqOptionChange(index, optionIndex, e.target.value)
                  }
                />
              ))}
            </Grid>
          </FormControl>
          <HStack spacing={"20px"} my={"5"}>
            <Button
              bg={"#7468d4"}
              gap={"2"}
              textColor={"white"}
              fontWeight={"semibold"}
              _hover={{ bg: "#7468d4", color: "white" }}
              onClick={handleAddMcqQuestion}
            >
              Add MCQ
            </Button>
            <Button
              bg={"#7468d4"}
              gap={"2"}
              textColor={"white"}
              fontWeight={"semibold"}
              _hover={{ bg: "#7468d4", color: "white" }}
              onClick={handleAddTrueFalseQuestion}
            >
              Add True/False
            </Button>
          </HStack>
        </Box>
      ))}

      {trueFalseList.map((tf, index) => (
        <Box key={index} my={"4"}>
          <FormControl>
            <FormLabel fontSize={"lg"}>
              True/False Question {index + 1}
            </FormLabel>
            <Input
              type="text"
              borderColor={"gray.400"}
              _hover={{ borderColor: "gray.400" }}
              value={tf.question}
              onChange={(e) =>
                handleTrueFalseQuestionChange(index, e.target.value)
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"lg"}>Answer (True/False)</FormLabel>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              {tf.answer.map((ans, ansIndex) => (
                <Input
                  key={ansIndex}
                  type="text"
                  borderColor={"gray.400"}
                  _hover={{ borderColor: "gray.400" }}
                  value={ans}
                  onChange={(e) =>
                    handleTrueFalseAnswerChange(index, ansIndex, e.target.value)
                  }
                />
              ))}
            </Grid>
          </FormControl>
          <HStack spacing={"20px"} my={"5"}>
            <Button
              bg={"#7468d4"}
              gap={"2"}
              textColor={"white"}
              fontWeight={"semibold"}
              _hover={{ bg: "#7468d4", color: "white" }}
              onClick={handleAddMcqQuestion}
            >
              Add MCQ
            </Button>
            <Button
              bg={"#7468d4"}
              gap={"2"}
              textColor={"white"}
              fontWeight={"semibold"}
              _hover={{ bg: "#7468d4", color: "white" }}
              onClick={handleAddTrueFalseQuestion}
            >
              Add True/False
            </Button>
          </HStack>
        </Box>
      ))}
    </Box>
    <Flex justifyContent={"center"}>
    <Button mt={"4"} w={"10vw"} bg={"#7468d4"} borderRadius={"full"} textColor={"white"} onClick={handleSubmit}>
      Save
    </Button>
  </Flex>
  {saved && (
    <ShowQuizForm/>
  )}
  </>
  );
};

export default CreateQuiz;
