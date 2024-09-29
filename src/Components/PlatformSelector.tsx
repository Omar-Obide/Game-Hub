import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../Hooks/usePlatforms";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const setPlatformID = useGameQueryStore(s => s.setPlatformID)
  const PlatformID = useGameQueryStore(s => s.GameQuery.platformID)

  const selectedPlatform = data?.results.find(p => p.id === PlatformID)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformID(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
