type BarPropertys = {
  text: string;
  type: string;
  IconSvg?: any;
  colorSvg?: string;
};

export function Alert({ text, type, IconSvg, colorSvg }: BarPropertys) {
  return (
    <div className={`banner-information-bar ${type}`}>
      {!IconSvg ? (
        <></>
      ) : (
        <IconSvg width="30px" height="30px" color={colorSvg} />
      )}
      <h1>{text}</h1>
    </div>
  );
}
