import { ListFooter } from "../pages/footer.list";
import { useGithub } from "../../hook/useContext";
import {
  FOOTER_PAGES,
  FOOTER_RESOURCES,
  FOOTER_CONTACT,
} from "../../web.config";

export function Footer() {
  const github__state = useGithub();
  const avatar = github__state?.user_data?.avatar_url;
  const description = github__state?.user_data?.bio;

  return (
    <footer className="footer">
      <div className="footer__user__content">
        <img
          src={avatar}
          alt="user__img"
          className="footer__user__content__img"
        />
        <p className="footer__user__content__description">{description}</p>
      </div>

      <ListFooter
        title="Other Pages"
        items={FOOTER_PAGES}
        key={`section__footer__${Math.random()}`}
      />
      <ListFooter
        title="Resources"
        items={FOOTER_RESOURCES}
        key={`section__footer__${Math.random()}`}
      />
      <ListFooter
        title="Contacts"
        items={FOOTER_CONTACT}
        key={`section__footer__${Math.random()}`}
      />
    </footer>
  );
}
