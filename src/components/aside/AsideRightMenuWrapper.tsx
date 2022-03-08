import { Image } from "../../_metronic/assets/img";

export const AsideRightMenuWrapper: React.FC = ({ children }) => (
  <div
    className="wrapper d-flex flex-column flex-row-fluid bg-main-color"
    id="kt_wrapper"
  >
    <div id="kt_header" className="header align-items-stretch">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="d-flex align-items-center d-lg-none ms-n3 me-1"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            <span className="svg-icon svg-icon-2x mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="/" className="d-none">
            <img alt="Logo" src={Image.Logo} className="h-30px" />
          </a>
        </div>
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            <div
              className="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div
                className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <div className="menu-item me-lg-10">
                  <span className="welcome-font">Welcome, Huss Smith</span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion ms-lg-10"
                >
                  <div className="d-flex align-items-center position-relative my-1">
                    <span className="svg-icon svg-icon-1 position-absolute ms-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height="2"
                          rx="1"
                          transform="rotate(45 17.0365 15.1223)"
                          fill="black"
                        ></rect>
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      data-kt-customer-table-filter="search"
                      className="form-control form-control-solid w-250px ps-15"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-stretch flex-shrink-0">
            <div className="d-flex align-items-stretch flex-shrink-0">
              <div className="d-flex align-items-stretch ms-1 ms-lg-10">
                <div
                  id="kt_header_search"
                  className="d-flex align-items-stretch"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length="2"
                  data-kt-search-enter="enter"
                  data-kt-search-layout="menu"
                  data-kt-menu-trigger="auto"
                  data-kt-menu-overflow="false"
                  data-kt-menu-permanent="true"
                  data-kt-menu-placement="bottom-end"
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    data-kt-search-element="toggle"
                    id="kt_header_search_toggle"
                  >
                    <img src={Image.Plant} alt="plant" className="pe-3" />
                    <span className="pe-10"> 0 Planted</span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center me-lg-10">
                <div className="btn" id="kt_activities_toggle">
                  <i className="bi bi-bell fs-2x"></i>
                </div>
              </div>
              <div className="py-xl-5">
                <div className="genio-card bg-xl-white card-xl-stretch border-radius-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex pt-2 pe-3">
                      <div className="symbol symbol-50px">
                        <img src={Image.Profile} alt="wallet" className="p-3" />
                      </div>

                      <div className="pt-2">
                        <span className="fs-7 text-success">Verified</span>
                        <p className="fs-6 text-dark fw-bold line-height-0">
                          Huss Smith
                        </p>
                      </div>
                    </div>
                    <i className="bi bi-chevron-down text-dark fw-bold fs-1x pe-2"></i>
                  </div>
                </div>
              </div>

              <div
                className="d-flex align-items-center d-lg-none ms-2 me-n3"
                title="Show header menu"
              >
                <div
                  className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                  id="kt_header_menu_mobile_toggle"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {children}
  </div>
);
