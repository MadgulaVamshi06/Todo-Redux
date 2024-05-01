
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "../redux/action";
import { Box, Select , Button} from "@chakra-ui/react";
const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodo(filter));
  };

  return (
    <div>
      <Box>
        <Select
          placeholder="Select option"
          value={currentFilter}
          maxW="340px"
          mx="auto"
          mt='10px'
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="ALL">Default</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </Select>

        <Button mt="10px" mb='10px' onClick={() => dispatch(markAllCompleted())}> Mark All Completed</Button>
      </Box>
    </div>
  );
};

export default FilterButton;
