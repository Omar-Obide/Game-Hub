import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../Hooks/usePlatforms";

interface Props {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatformID?: number
}

const PlatformSelector = ({ onselectedPlatform, selectedPlatformID }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformID)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onselectedPlatform(platform)}
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
