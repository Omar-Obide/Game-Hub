import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  SelectedSortOrder: string
}

const SortGames = ({ onSelectSortOrder, SelectedSortOrder }: Props) => {
  const sortOrder = [
    { Value: "-updated", Label: "Relevance" },
    { Value: "-added", Label: "Date added" },
    { Value: "name", Label: "Name" },
    { Value: "-released", Label: "Release date" },
    { Value: "-metacritic", Label: "Popularity" },
    { Value: "-rating", Label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find(order => order.Value === SelectedSortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.Label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={() => {onSelectSortOrder(order.Value)}} key={order.Value} value={order.Value}>
            {order.Label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGames;
