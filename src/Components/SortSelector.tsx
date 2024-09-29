import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortGames = () => {
  const SortOrder = [
    { Value: "-updated", Label: "Relevance" },
    { Value: "-added", Label: "Date added" },
    { Value: "name", Label: "Name" },
    { Value: "-released", Label: "Release date" },
    { Value: "-metacritic", Label: "Popularity" },
    { Value: "-rating", Label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.GameQuery.sortOrder);

  const currentSortOrder = SortOrder.find((order) => order.Value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.Label || " "}
      </MenuButton>
      <MenuList>
        {SortOrder.map((order) => (
          <MenuItem
            onClick={() => {
              setSortOrder(order.Value);
            }}
            key={order.Value}
            value={order.Value}
          >
            {order.Label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGames;
