"use client";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateQuiz from "./CreateQuiz";
import ShowQuizForm from "./ShowQuizForm";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PublishedForm from "./PublishedForm";
type Props = {};

const Teacher = (props: Props) => {
  const [create, setCreate] = useState<boolean>(false);
  const published = useSelector((state: RootState) => state.publishInfo);
  const handleClick = () => {
    setCreate(true);
  };

  return (
    <Box>
      <Box px={"10vw"} py={"4vh"}>
        <Flex>
          <Box
            textColor={"#7468d4"}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            px={"4"}
            py={"4"}
            borderWidth={"2px"}
            borderTopRadius={"1vh"}
            borderColor={"#7468d4"}
            bg={"#f4c8bd"}
          >
            Teacher
          </Box>
          <Spacer />
          <Box>
            <Button
              bg={"#7468d4"}
              gap={"2"}
              textColor={"white"}
              fontWeight={"semibold"}
              _hover={{ bg: "#7468d4", color: "white" }}
              onClick={handleClick}
            >
              Create New Quiz <FaPlus />
            </Button>
          </Box>
        </Flex>
      </Box>
      {published.published ? (
        <Box>
          <PublishedForm />
        </Box>
      ) :
      <Box>{create && <CreateQuiz />}</Box> 
      }
      
    </Box>
  );
};

export default Teacher;
