"use client";
import { Activated, activateInfo } from "@/redux/Quiz/ActivateSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Radio,
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import { formatDuration, intervalToDuration } from "date-fns";
import React, { useEffect, useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Student = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const quiz = useSelector((state: RootState) => state.addQuizInfo);
  const activate = useSelector((state: RootState) => state.activateInfo);
  const mcq = quiz.mcqQuestions;
  const trueFalse = quiz.trueFalseQuestions;
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    if (activate.activate === "activated") {
      const totalDurationInSeconds = quiz.duration * 60;
      setRemainingTime(totalDurationInSeconds);

      const timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime !== null && prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [activate.activate, quiz.duration]);

  const formattedTime =
    remainingTime !== null
      ? formatDuration(
          intervalToDuration({ start: 0, end: remainingTime * 1000 })
        )
      : "";

  return (
    <>
      <Box
      w={"fit-content"}
      my={"4"}
      mx={"10vw"}
        textColor={"#0fffbe"}
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        px={"6"}
        py={"6"}
        borderWidth={"2px"}
        borderTopRadius={"1vh"}
        bg={"#106fbe"}
        
      >
        Student
      </Box>

      <Box mx={"10vw"} bg={"#f8f0ff"}>
        <Box py={"8"} fontSize={"xl"} fontWeight={"bold"}>
          <Flex>
            <Box pl={"35vw"}>Title: {quiz.title}</Box>
          </Flex>

          <Flex justifyContent={"end"} pr={"16"} pt={"4"}>
            <Box display={"flex"} alignItems={"center"}>
              <MdOutlineAccessTime size={"3vh"} />
              {activate.activate === "activated" && remainingTime !== null ? (
                <>: {formattedTime}</>
              ) : (
                <>: {quiz.duration} min</>
              )}
            </Box>
          </Flex>
        </Box>
        <Box mx={"4"}>
          {mcq.map((m, index) => (
            <Box key={index} mb={"4"}>
              <Box mb={"4"} fontSize={"lg"} fontWeight={"bold"}>
                {index + 1}. {m.question}
              </Box>
              <Box fontSize={"md"} fontWeight={"semibold"}>
                <RadioGroup>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {m.options.map((option, optionIndex) => (
                      <Radio key={optionIndex}>
                        {optionIndex + 1}. {option}
                      </Radio>
                    ))}
                  </Grid>
                </RadioGroup>
              </Box>
            </Box>
          ))}

          {trueFalse.map((tf, index) => (
            <Box key={index} mb={"4"}>
              <Box mb={"4"} fontSize={"lg"} fontWeight={"bold"}>
                {index + 1}. {tf.question}
              </Box>
              <Box fontSize={"md"} fontWeight={"semibold"}>
                <RadioGroup>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {tf.answer.map((ans, ansIndex) => (
                      <Radio key={ansIndex}>{ans}</Radio>
                    ))}
                  </Grid>
                </RadioGroup>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Student;
