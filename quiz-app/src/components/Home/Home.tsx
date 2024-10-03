"use client";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const handleClickTeacher = () => {
    router.push("/teacher");
  };
  const handleClickStudent = () => {
    router.push("/student");
  };
  return (
    <Box>
      <Flex justifyContent={"center"}>
        <Box
          mt={"4vh"}
          py={"4"}
          px={"12"}
          borderRadius={"2vh"}
          bg={"#7468d4"}
          fontSize={"2rem"}
          textColor={"white"}
        >
          Quiz App
        </Box>
      </Flex>

      <Box mt={"25vh"} px={"35vw"}>
        <Flex>
          <Button
            p={"8"}
            w={"10vw"}
            borderWidth={"4px"}
            borderRadius={"4vh"}
            borderColor={"#bba0d5"}
            fontSize={"1.5rem"}
            textColor={"#bba0d5"}
            _hover={{ bg: "#bba0d5", color: "white" }}
            onClick={handleClickTeacher}
          >
            Teacher
          </Button>
          <Spacer />
          <Button
            p={"8"}
            w={"10vw"}
            borderWidth={"4px"}
            borderRadius={"4vh"}
            borderColor={"#f4c8bd"}
            fontSize={"1.5rem"}
            textColor={"#f4c8bd"}
            _hover={{ bg: "#f4c8bd", color: "white" }}
            onClick={handleClickStudent}
          >
            Student
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
