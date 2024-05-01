import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButton from "./FilterButton";
import { addTodo, updateSearchTerm } from "../redux/action";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div>
      <Box maxW="xl" mx="auto" mt="8px" p="4px">
        <Heading size="xl">Todo App</Heading>
        <br />
        <Input
          placeholder="Enter the Todo Title"
          maxW="270px"
          mx="auto"
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <Button mt="-4px" onClick={handleAddTodoClick}>
          Add
        </Button>
        <FilterButton />
        <Input
          placeholder="Search Todos"
          maxW="270px"
          mx="auto"
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        <TodoList />
      </Box>
    </div>
  );
};

export default Todo;
