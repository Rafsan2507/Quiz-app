import { RootState } from "@/redux/store";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineAccessTime } from "react-icons/md";

type Props = {};

const ShowQuizForm = (props: Props) => {
  const quiz = useSelector((state: RootState) => state.addQuizInfo);
  return (
    <Box mx={"20vw"} bg={"#f8f0ff"}>
      <Box p={"8"}>
        <Flex>
          <Box>Title: {quiz.title}</Box>
          <Spacer />
          <Box>Duration:<MdOutlineAccessTime/> {quiz.duration}</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ShowQuizForm;
