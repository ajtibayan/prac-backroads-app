import { socialLinks } from "../data";

const SocialLinks = ({ parentClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => {
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
