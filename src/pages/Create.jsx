import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);
  return redirect("/");
};

const Create = () => {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Name</FormLabel>
          <Input type="text" name="title" />
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="Enter detailed description..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox colorScheme="purple" name="isPriority" size="lg" />
          <FormLabel mb="0" ml="10px">
            Make this a priority Task
          </FormLabel>
        </FormControl>

        <Button type="submit" colorScheme="purple">
          Submit
        </Button>
      </Form>
    </Box>
  );
};

export default Create;
