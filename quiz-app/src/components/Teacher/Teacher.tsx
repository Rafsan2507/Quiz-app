"use client";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CreateQuiz from "./CreateQuiz";
type Props = {};

const Teacher = (props: Props) => {
  const [create, setCreate] = useState<boolean>(false);
  const handleClick = () => {
    setCreate(true);
  };
  return (
    <Box>
      <Box px={"5vw"} py={"4vh"}>
        <Flex>
          <Box
            textColor={"#7468d4"}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            px={"4"}
            borderWidth={"4px"}
            borderRadius={"4vh"}
            borderColor={"#7468d4"}
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
      <Box>{create && <CreateQuiz />}</Box>
    </Box>
  );
};

export default Teacher;
