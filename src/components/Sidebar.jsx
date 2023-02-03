import { List, ListItem, ListIcon, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaEdit } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em">
      <ListItem>
        <NavLink to="/">
          <Flex flexWrap="nowrap" alignItems="center">
            <ListIcon as={FaCalendarAlt} color="white" />
            Dashboard
          </Flex>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={FaEdit} color="white" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={BsPerson} color="white" fontWeight="bold" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
