function BackgroundPattern({ isMobile }) {
  return (
    <div className="absolute  ">
      <img
        className="absolute top-0"
        src="/public/images/pattern-lines.svg"
        alt="lines"
      />
      <img
        className="absolute bottom-50 right-0"
        src="/public/images/pattern-circle.svg"
        alt="circles"
      />
      <img
        className="absolute bottom-0 left-0"
        src={
          isMobile
            ? "/public/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
            : "/public/images/pattern-squiggly-line-bottom-desktop.svg"
        }
        alt="squiggly"
      />
      <img
        className="absolute top-10 right-0"
        src="/public/images/pattern-squiggly-line-top.svg"
        alt="squiggly"
      />
    </div>
  );
}
export default BackgroundPattern;
