import { AppDispatch, RootState } from "@/redux/store";
import { Box, Button, Center, Flex, Grid, Radio, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAccessTime } from "react-icons/md";
import { Published, publishInfo } from "@/redux/Quiz/PublishedSlice";

type Props = {};

const ShowQuizForm = (props: Props) => {
  const quiz = useSelector((state: RootState) => state.addQuizInfo);
  const dispatch = useDispatch<AppDispatch>();
  const mcq = quiz.mcqQuestions;
  const trueFalse = quiz.trueFalseQuestions;

  const handlePublish = () => {
    const publish : Published = {
      published:true
    };
    dispatch(publishInfo(publish));
  }
  return (
    <Box mx={"10vw"} bg={"#f8f0ff"}>
      <Box py={"8"} fontSize={"xl"} fontWeight={"bold"}>
        <Flex justifyContent={"center"}>
          <Box>Title: {quiz.title}</Box>
        </Flex>
        <Flex justifyContent={"end"} pr={"16"}>
          <Box display={"flex"} alignItems={"center"}>
            <MdOutlineAccessTime size={"3vh"} /> : {quiz.duration} min
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
                  <Radio>
                    {optionIndex + 1}. {option}
                  </Radio>
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
                  <Radio>{ans}</Radio>
                ))}
              </Grid>
            </Box>
          </Box>
        ))}
      </Box>
      <Flex justifyContent={"end"}>
        <Button
          mt={"4"}
          w={"10vw"}
          bg={"#7468d4"}
          borderRadius={"full"}
          textColor={"white"}
          _hover={{ bg: "#7468d4", color: "white" }}
          onClick={handlePublish}
        >
          Publish
        </Button>
      </Flex>
    </Box>
  );
};

export default ShowQuizForm;
