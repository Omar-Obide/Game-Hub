import meh from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiKeys: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: '25px' },
    4: { src: thumpsUp, alt: "thumpsUp", boxSize: '25px' },
    5: { src: bullsEye, alt: "bullsEye", boxSize: '30px', marginBottom: "-4.5px" },
  };

  return <Image marginTop={2} {...emojiKeys[rating]}></Image>;
};

export default Emoji;
