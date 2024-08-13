import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Text, Flex, extendTheme,Divideri } from "@chakra-ui/react";
import { motion } from "framer-motion";

const theme = extendTheme({
  colors: {
    yellow: {
      200: "#FFF59D",
    },
    pink: {
      500: "#E91E63",
    },
  },
});

export const BackendCall = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3030/testing");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100%"
        h="100vh"
        bgGradient="linear(to-r, yellow.200, pink.200)"
        p={4}
      >
        <Flex direction="column" align="center" justify="center" h="full">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="50px"
            fontWeight="extrabold"
            mb={8}
          >
            Voice Assistant
          </Text>

          <Box
            as={motion.div}
            height="40px"
            width="40px"
            bg="orange.400"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition="0.5s linear"
            // not work: transition={{ transition: "0.5", ease: "linear" }}
          />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
