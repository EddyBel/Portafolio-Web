export function ButtonShadown({ children, onClick }: any) {
  return (
    <button className="button__shadown" onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonNormal({ children, onClick }: any) {
  return (
    <button className="button__normal" onClick={onClick}>
      {children}
    </button>
  );
}
