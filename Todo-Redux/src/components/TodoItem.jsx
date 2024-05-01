import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markcompleted,
  markIncomplete,
} from "../redux/action";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {
  FaCheck,
  FaTimes,
  FaToggleOff,
  FaToggleOn,
  FaTrash,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  return (
    <Box
      as="li"
      className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4"
    >
      <Flex alignItems="center">
        <Text mr="4" color="gray.500">
          {index + 1}.
        </Text>
        <Text
          mr="4"
          className={todo.completed ? "line-through text-gray-500" : ""}
        >
          {todo.text}
        </Text>
      </Flex>
      <Flex spaceX="3" ml="8">
        <Button
          mr="2"
          size="sm"
          bg="blue.500"
          color="white"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </Button>
        <Button
          mr="2"
          size="sm"
          bg="red.500"
          color="white"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </Button>
        {!todo.completed && (
          <Button
            size="sm"
            bg="green.500"
            color="white"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </Button>
        )}
        {todo.completed && (
          <Button
            size="sm"
            bg="yellow.500"
            color="white"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default TodoItem;
