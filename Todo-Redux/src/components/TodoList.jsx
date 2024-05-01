import React from 'react'
import { useSelector } from "react-redux";
import TodoItem from './TodoItem'
import { Box, List, ListItem, Text } from '@chakra-ui/react';

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });
  console.log('Filtered Todos:', filteredTodos);
  return (
    <Box p={5} borderWidth="1px" borderColor="gray.200" borderRadius="md">
      <Text fontSize="xl" mb={4}>All Your Notes Here...</Text>
      <List spacing={3}>
        {filteredTodos.map((todo, index) => (
          <ListItem key={index} p={2} borderWidth="1px" borderColor="gray.300" borderRadius="sm">
            <TodoItem todo={todo} index={index} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoList