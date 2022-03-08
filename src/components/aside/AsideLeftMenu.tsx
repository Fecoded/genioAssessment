import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "../../_metronic/assets/img";

export const AsideLeftMenu = () => {
  const [isDashboardShown, setIsDashboardShown] = React.useState(false);
  const [isWalletShown, setIsWalletShown] = React.useState(false);
  let activeStyle = "active menu-link";

  const pathname = window.location.pathname;

  return (
    <div
      id="kt_aside"
      className="aside aside-dark aside-hoverable"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      <div className="aside-logo flex-column-auto" id="kt_aside_logo">
        <a href="/" className="mx-auto">
          <img alt="Logo" src={Image.Logo} className="h-25px logo" />
        </a>
        {/* <div
        id="kt_aside_toggle"
        className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
        data-kt-toggle="true"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        data-kt-toggle-name="aside-minimize"
      >
        <span className="svg-icon svg-icon-1 rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
              fill="black"
            />
            <path
              d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
              fill="black"
            />
          </svg>
        </span>
      </div> */}
      </div>
      <div className="aside-menu flex-column-fluid">
        <div
          className="hover-scroll-overlay-y my-5 my-lg-5"
          id="kt_aside_menu_wrapper"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
          data-kt-scroll-wrappers="#kt_aside_menu"
          data-kt-scroll-offset="0"
        >
          <div
            className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
            id="#kt_aside_menu"
            data-kt-menu="true"
          >
            <div className="px-5 pb-10">
              <div className="genio-card bg-light-primary-color card-xl-stretch">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div className="symbol symbol-50px w-50px bg-white h-50px">
                        <img src={Image.Wallet} alt="wallet" className="p-3" />
                      </div>

                      <div className="ms-3">
                        <span className="fs-3 text-white pe-3">
                          Wallet Balance
                        </span>
                        <p className="fs-3 text-white fw-bold">$15,001.00</p>
                      </div>
                    </div>
                    <i className="bi bi-eye-fill text-white fs-2x"></i>
                  </div>
                  <div className="separator border-white my-2 mb-5"></div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div className="symbol symbol-50px w-50px bg-white h-50px">
                        <img src={Image.Star} alt="wallet" className="p-3" />
                      </div>

                      <div className="ms-3">
                        <span className="fs-3 text-white pe-3">
                          Awarded Point
                        </span>
                        <p className="fs-3 text-white fw-bold">25</p>
                      </div>
                    </div>
                  </div>
                  <div className="separator border-white my-2 mb-5"></div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-md btn-secondary text-white px-lg-11">
                      Pay-In
                    </button>
                    <button className="btn btn-md btn-light px-lg-11">
                      Pay-Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="menu-item">
            <div className="menu-content pb-2">
              <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                Dashboard
              </span>
            </div>
          </div> */}
            <div
              className="menu-item px-5 mb-2"
              onMouseEnter={() => setIsDashboardShown(true)}
              onMouseLeave={() => setIsDashboardShown(false)}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : "menu-link"
                }
                to="/"
              >
                <span className="menu-icon">
                  {pathname === "/" ? (
                    <img src={Image.Dashboard} alt="dashboard" />
                  ) : (
                    <img
                      src={
                        isDashboardShown ? Image.Dashboard : Image.Dashboard_2
                      }
                      alt="dashboard"
                    />
                  )}
                </span>
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </div>
            <div
              className="menu-item px-5"
              onMouseEnter={() => setIsWalletShown(true)}
              onMouseLeave={() => setIsWalletShown(false)}
            >
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  isActive ? activeStyle : "menu-link"
                }
              >
                <span className="menu-icon">
                  {pathname === "/wallet" ? (
                    <img src={Image.Money_2} alt="dashboard" />
                  ) : (
                    <img
                      src={isWalletShown ? Image.Money_2 : Image.Money}
                      alt="dashboard"
                    />
                  )}
                </span>
                <span className="menu-title">Wallet</span>
              </NavLink>
            </div>
            <div className="menu-item px-5">
              <a className="menu-link" href="/card">
                <span className="menu-icon">
                  <img src={Image.Card} alt="dashboard" />
                </span>
                <span className="menu-title">Card</span>
              </a>
            </div>
            <div className="menu-item px-5">
              <a className="menu-link" href="/fx_centre">
                <span className="menu-icon">
                  <img src={Image.Fx_Centre} alt="dashboard" />
                </span>
                <span className="menu-title">FX Centre</span>
              </a>
            </div>
            <div className="menu-item px-5">
              <a className="menu-link" href="/users">
                <span className="menu-icon">
                  <img src={Image.Users} alt="dashboard" />
                </span>
                <span className="menu-title">Beneficiaries</span>
              </a>
            </div>
            <div className="menu-item px-5">
              <a className="menu-link" href="/perks">
                <span className="menu-icon">
                  <img src={Image.Perk} alt="dashboard" />
                </span>
                <span className="menu-title">Perk</span>
              </a>
            </div>
            {/*  */}

            <div className="px-5 pt-20">
              <div className="genio-card bg-light-secondary-color card-xl-stretch">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div className="symbol symbol-50px w-50px h-50px">
                        <img src={Image.Speaker} alt="wallet" className="p-3" />
                      </div>

                      <div className="ms-3">
                        <span className="fs-3 text-dark fw-bold pe-3">
                          Refer and earn
                        </span>
                        <p className="fs-3 text-dark">
                          Use the below link to invite friends
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row px-5">
                    <button className="btn btn-lg btn-primary text-white fw-bold">
                      Invite Friends
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
