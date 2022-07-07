import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

import epa from "../public/images/epa.png";
import awardLogo from "../public/images/award-logo.png";

export default function Loader() {
  return (
    <Flex
      as={"div"}
      bg={"#000000"}
      direction={"column"}
      height={"80vh"}
      maxW={800}
      fontSize={"sm"}
    >
      <Flex flex={1} justify={"center"}>
        <Box flex={1}>
          <Flex>
            <Image src={awardLogo} layout='fixed' width={45} height={45} alt="" />
            <Box>
              <Text>Phoenix - AwardBIOS v6.00PG, An Energy Star Ally</Text>
              <Text>Copyright (C) 1984-2022, Phoenix Technologies, LTD</Text>
            </Box>
          </Flex>
          <Text pt={6}>ASUS A7N8XZ.0 Deluxe ACPI BIOS Rev 1000</Text>
        </Box>

        <Image src={epa} layout='fixed' width={180} height={100} alt="" />
      </Flex>

      <Box>
        <Text>Press <strong>DEL</strong> to enter SETUP</Text>
        <Text>00/04/2004-nVidia-nforce-A7M8BX2.0</Text>
      </Box>
    </Flex >
  );
}
