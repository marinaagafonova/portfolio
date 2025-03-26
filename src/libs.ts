import * as FramerMotion from 'framer-motion';
import { BsMoon, BsSun } from 'react-icons/bs';
import {
	FaArrowRight,
	FaGithub,
	FaLinkedin,
	FaRegAddressBook,
	FaRegEnvelope,
	FaRegMap,
	FaTelegram,
	FaYoutube,
} from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';
import { animateScroll, Link } from 'react-scroll';
import styled from 'styled-components';

const Icons = {
	ArrowRight: FaArrowRight,
	Download: TbDownload,
	GitHub: FaGithub,
	Linkedin: FaLinkedin,
	Moon: BsMoon,
	RegAddressBook: FaRegAddressBook,
	RegEnvelope: FaRegEnvelope,
	RegMap: FaRegMap,
	Sun: BsSun,
	Telegram: FaTelegram,
	YouTube: FaYoutube,
};
export { animateScroll, FramerMotion, Icons, Link, styled };
