import { AppDispatch, RootState } from "@/redux/store";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  Radio,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAccessTime } from "react-icons/md";
import { Activated, activateInfo } from "@/redux/Quiz/ActivateSlice";
import { formatDuration, intervalToDuration, addSeconds } from "date-fns";

type Props = {};

const PublishedForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const quiz = useSelector((state: RootState) => state.addQuizInfo);
  const activate = useSelector((state: RootState) => state.activateInfo);
  const mcq = quiz.mcqQuestions;
  const trueFalse = quiz.trueFalseQuestions;
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  const handleActivate = () => {
    const activated: Activated = {
      activate: "activated",
    };
    dispatch(activateInfo(activated));
    setRemainingTime(quiz.duration * 60);
  };
  const handleDeactivate = () => {
    const activated: Activated = {
      activate: "deactivated",
    };
    dispatch(activateInfo(activated));
    setRemainingTime(quiz.duration * 60);
  };
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (
      activate.activate === "activated" &&
      remainingTime !== null &&
      remainingTime > 0
    ) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime !== null ? prevTime - 1 : 0));
      }, 1000);
    } else if (remainingTime === 0) {
      const activated: Activated = {
        activate: "deactivated",
      };
      dispatch(activateInfo(activated));
    }

    return () => clearInterval(timer);
  }, [activate, remainingTime]);

  const formattedTime =
    remainingTime !== null
      ? formatDuration(
          intervalToDuration({ start: 0, end: remainingTime * 1000 })
        )
      : "";

  return (
    <Box mx={"10vw"} bg={"#f8f0ff"}>
      <Box py={"8"} fontSize={"xl"} fontWeight={"bold"}>
        <Flex>
          <Box pl={"35vw"}>Title: {quiz.title}</Box>
          <Spacer />
          {activate.activate === "deactivated" ? (
            <Button
              mr={"2"}
              w={"10vw"}
              bg={"#106fbe"}
              borderRadius={"full"}
              textColor={"white"}
              _hover={{ bg: "#106fbe", color: "white" }}
              onClick={handleActivate}
            >
              Activate
            </Button>
          ) : (
            <Button
              mr={"2"}
              w={"10vw"}
              bg={"#106fbe"}
              borderRadius={"full"}
              textColor={"white"}
              _hover={{ bg: "#106fbe", color: "white" }}
              onClick={handleDeactivate}
            >
              Deactivate
            </Button>
          )}
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
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {m.options.map((option, optionIndex) => (
                  <Checkbox key={optionIndex}>
                    {optionIndex + 1}. {option}
                  </Checkbox>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
        {trueFalse.map((tf, index) => (
          <Box key={index} mb={"4"}>
            <Box mb={"4"} fontSize={"lg"} fontWeight={"bold"}>
              {index + 1}. {tf.question}
            </Box>
            <Box fontSize={"md"} fontWeight={"semibold"}>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {tf.answer.map((ans, ansIndex) => (
                  <Checkbox key={ansIndex}>{ans}</Checkbox>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PublishedForm;
