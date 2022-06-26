import "./style.scss";
import Logo from "../Logo";
import Menu from "../Menu";
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: "easeInOut", delay: 1.5 };

const Header = () => {
  return (
    <motion.header
      id="home"
      className="header"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: transition }}
    >
      <Logo />
      <Menu />
    </motion.header>
  );
};
export default Header;
