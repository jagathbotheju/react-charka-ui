import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import data from "../../data/db.json";
import { FaEye, FaCommentDots } from "react-icons/fa";

const Dashboard = () => {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {data.tasks &&
        data.tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor={useColorModeValue("purple.300", "purple.800")}
            bg={useColorModeValue("gray.50", "gray.600")}
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={useColorModeValue("gray.500", "gray.50")}>
              <Text>{task.description}</Text>
            </CardBody>

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<FaEye />} size="sm">
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<FaCommentDots />} size="sm">
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;
