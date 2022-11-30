import { FC } from 'react'
import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Connected: FC = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color='#FFF'
            as='h1'
            size='2xl'
            noOfLines={1}
            textAlign='center'
          >
            Welcome Dezzair
          </Heading>
          <Text color='bodyText' fontSize='xl' textAlign='center'>
            Each Deza is randomly gemerated and can be stacked to recieve 
            <Text as='b'>$PAT</Text> Use your <Text as='b'>$PAT</Text> to upgrade you deze and reciev perks withing the community
          </Text>
        </VStack>
      </Container>
      <HStack spacing={10}>
        <Image src='avatar1.png' alt='' />
        <Image src='avatar1.png' alt='' />
        <Image src='avatar1.png' alt='' />
        <Image src='avatar1.png' alt='' />
        <Image src='avatar1.png' alt='' />
      </HStack>
      <Button bgColor='accent' color='#FFF' maxW='380px'>
        <HStack>
          <Text>Mint Deza</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  )
}

export default Connected