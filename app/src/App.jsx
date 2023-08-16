import React from "react"
import { Box, } from "@chakra-ui/react";
import { CardContainer } from "./chakraComponents/CardContainer";
import { PageFooter } from "./chakraComponents/PageFooter";
import { PageHeader } from "./chakraComponents/PageHeader";

function App() {

  return ( 
    <Box>
      <PageHeader />
      <CardContainer />
      <PageFooter />
    </Box>
  );
}

export default App;
