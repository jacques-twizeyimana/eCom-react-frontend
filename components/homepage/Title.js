import { useEffect, useState } from "react";
import Titlestyles from "../../styles/Title.module.css";

export default function Title({ title, centered, children }) {
  const [underlineWidth, setunderlineWidth] = useState(0);
  const styles = { fontSize: "32px" };
  const getTextWidth = (inputText) => {
    const font = styles.fontSize;

    if (typeof document !== undefined) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = font;
      const width = context.measureText(inputText).width;
      const formattedWidth = Math.ceil(width);
      return formattedWidth;
    } else {
      return 10;
    }
  };

  useEffect(() => {
    setunderlineWidth(getTextWidth(title) * 2);
  }, [title]);

  return (
    <div
      className={
        centered
          ? Titlestyles.title + " " + Titlestyles.title__center
          : Titlestyles.title
      }
    >
      <div className={Titlestyles.title__wrapper}>
        <div className={Titlestyles.title__content}>
          <div className={Titlestyles.title__info} style={styles}>
            {title}
          </div>
          <div className={Titlestyles.title__children}>{children}</div>
        </div>
        <div
          className={Titlestyles.title__underline}
          style={{ width: `${underlineWidth}px` }}
        ></div>
      </div>
    </div>
  );
}
