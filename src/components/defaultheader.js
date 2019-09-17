import React from "react";

export default function defaultheader({ children, title, styleClass }) {
  return (
    <defaultheader>
      
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-defapri text-uppercase">
              {title}
            </h1>
            {children}
          </div>
      </div>
    </defaultheader>
  );
}

defaultheader.defaultProps = {
  title: "default title",
  styleClass: "header-hero"
};
