import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const perilist = [
  {
    periName: 'GPIO',
    baseAddess: '0x40001400',
    subPeriList: [
      {
        subPeriName: 'GPIOA',
        baseAddess: '0x40014014',
      },
      {
        subPeriName: 'GPIOB',
        baseAddess: '0x4001408C',
      },
      {
        subPeriName: 'GPIOC',
        baseAddess: '0x400140F0',
      },
    ],
    periRegisters: [
      {
        regName: 'MODER',
        offset: '0x00',
      },
      {
        regName: 'ODR',
        offset: '0xA0',
      },
    ],
  },
  {
    periName: 'USART',
    baseAddess: '0x40005400',
    subPeriList: [
      {
        subPeriName: 'USART1',
        baseAddess: '0x40014014',
      },
      {
        subPeriName: 'USART2',
        baseAddess: '0x4001408C',
      },
      {
        subPeriName: 'USART3',
        baseAddess: '0x400140F0',
      },
    ],
    periRegisters: [
      {
        regName: 'SR',
        offset: '0x00',
      },
      {
        regName: 'DR',
        offset: '0xA0',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  {
    periName: 'RCC',
    baseAddess: '0x40234030',
    periRegisters: [
      {
        regName: 'AHB1ENR',
        offset: '0x00',
      },
      {
        regName: 'APB1ENR',
        offset: '0x04',
      },
    ],
  },
  
];

const PeripheralAccordionItem = ({ peri }) => {
  return (
    <AccordionItem
      backgroundColor={'#F4F7FE'}
      mb={2}
      justifyContent={'space-between'}
      border={'none'}
      borderRadius={'lg'}
      overflow={'hidden'}
    >
      {({ isExpanded }) => {
        return (
          <>
            <AccordionButton
              _focus={{
                boxShadow: 'none',
              }}
              color={isExpanded ? 'brand.500' : 'currentColor'}
            >
              <Box flex='1' textAlign='left'>
                {peri.periName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            {peri.subPeriList && (
              <AccordionPanel pb={4}>
                <VStack>
                  {peri.subPeriList?.map((subperi, idx) => {
                    return (
                      <Button
                        w={'full'}
                        key={idx}
                        fontWeight={'light'}
                        _focus={{ border: '1px' }}
                      >
                        <Text>{subperi.subPeriName}</Text>
                      </Button>
                    );
                  })}
                </VStack>
              </AccordionPanel>
            )}
          </>
        );
      }}
    </AccordionItem>
  );
};

const PeripheralList = (props) => {
  return (
    <Accordion
      {...props}
      // defaultIndex={[0]}
      // allowMultiple
      allowToggle
      p={4}
      mr={2}
      maxH={'84vh'}
      backgroundColor={'white'}
      borderRadius={'2xl'}
      overflow={'auto'}
    >
      {perilist.map((peri, idx) => {
        return <PeripheralAccordionItem key={idx} peri={peri} />;
      })}
    </Accordion>
  );
};

export default PeripheralList;
