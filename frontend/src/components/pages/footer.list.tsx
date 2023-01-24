type ItemFooter = {
  path: string;
  title: string;
  svg: JSX.Element;
};

type ListFooter = {
  title: string;
  items: ItemFooter[];
};

export function ListFooter({ title, items }: ListFooter) {
  return (
    <div className="footer__pages__content">
      <h1 className="footer__pages__content__title">{title}</h1>
      <ul className="footer__pages__content__list__pages">
        {items.map((item) => (
          <li key={`item__footer__${Math.random()}`}>
            {item.svg}
            <a href={item.path}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
