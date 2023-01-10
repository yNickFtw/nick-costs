import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <a href="https://github.com/yNickFtw" target={"_blank"}>
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/ynickftw/" target={"_blank"}>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicolas-freitas-a9073324a/"
            target={"_blank"}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>NickCosts</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
