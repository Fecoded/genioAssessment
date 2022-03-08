export const Wrapper: React.FC = ({ children }) => (
  <div className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">{children}</div>
    </div>
  </div>
);
