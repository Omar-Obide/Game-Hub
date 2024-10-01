import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../Entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { FaLinux } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformsIconsList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    nintendo: SiNintendoswitch,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          color="#718096"
          as={IconMap[platform.slug]}
          key={platform.id}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformsIconsList;
