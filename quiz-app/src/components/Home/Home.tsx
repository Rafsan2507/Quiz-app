"use client";
import { Box, Button, Flex, Grid, Spacer } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const activate = useSelector((state: RootState) => state.activateInfo);
  const students = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
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
          bg={"#106fbe"}
          fontSize={"1.5rem"}
          textColor={"#0fffbe"}
          fontWeight={"bold"}
        >
          Quiz App
        </Box>
      </Flex>
      <Flex justifyContent={"center"}>
        <Box mt={"20vh"}>
          <Button
            py={"8"}
            px={"12"}
            borderWidth={"4px"}
            borderRadius={"4vh"}
            borderColor={"#106fbe"}
            fontSize={"1.5rem"}
            textColor={"#106fbe"}
            _hover={{ bg: "#106fbe", color: "#0fffbe" }}
            onClick={handleClickTeacher}
          >
            Teacher
          </Button>
        </Box>
      </Flex>

      <Grid
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
        gap={8}
        mt={"8vh"}
        px={"12"}
      >
        {students.map((student, index) => (
          <Button
            isDisabled={activate.activate !== "activated"}
            key={index}
            py={"8"}
            px={"12"}
            borderWidth={"4px"}
            borderRadius={"4vh"}
            borderColor={"#2BB673"}
            fontSize={"1.5rem"}
            textColor={"#2BB673"}
            _hover={{ bg: "#2BB673", color: "white" }}
            onClick={handleClickStudent}
          >
            Student {students[index]}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
