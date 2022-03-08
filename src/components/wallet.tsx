import { Image } from "../_metronic/assets/img";

export const Wallet = () => (
  <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div className="container-xxl" id="kt_content_container">
        <div className="row gy-5 g-xl-8 mt-7">
          <div className="col-xl-12">
            <div className="p-5 border-0">
              <div className="d-flex justify-content-between align-items-center">
                <p className="font-1">Your Wallet(s)</p>
                <button className="btn btn-lg btn-primary text-white fw-bold">
                  <i className="bi bi-plus text-white fs-2x"></i> Create New
                  Wallet
                </button>
              </div>
              <div className="row g-5 mt-5">
                <div className="col-xl-4 col-12">
                  <div className="card bg-white card-xl-stretch px-2 py-2">
                    <div className="d-flex justify-content-between align-items-center">
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
                      <div>
                        <span className="primary-color ps-7 fw-bold">All</span>
                        <i className="bi bi-chevron-down fw-bold primary-color fs-1x ps-1"></i>
                      </div>
                    </div>
                    <div className="card-toolbar">
                      <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#kt_tab_pane_7"
                          >
                            Active (3)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#kt_tab_pane_8"
                          >
                            Inactive (2)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#kt_tab_pane_9"
                          >
                            Closed (0)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active mt-5"
                        id="kt_tab_pane_7"
                        role="tabpanel"
                      >
                        <div className="bg-card3-color px-5 py-3 border-radius-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <img src={Image.EUR} alt="eur" />
                              <div className="ps-3 pt-2">
                                <span>EUR Wallet</span>
                                <p>EUR</p>
                              </div>
                            </div>
                            <div className="">
                              <span className="fw-bold">€2,000,000.50</span>
                              <p>Default</p>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 py-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <img src={Image.USD} alt="eur" />
                              <div className="ps-3 pt-2">
                                <span>Personal account</span>
                                <p>USD</p>
                              </div>
                            </div>
                            <div className="">
                              <span className="fw-bold">$10,250.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 py-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <img src={Image.GBP} alt="eur" />
                              <div className="ps-3 pt-2">
                                <span>School savings</span>
                                <p>GBP</p>
                              </div>
                            </div>
                            <div className="">
                              <span className="fw-bold">£500.00</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="kt_tab_pane_8"
                        role="tabpanel"
                      >
                        ...
                      </div>

                      <div
                        className="tab-pane fade"
                        id="kt_tab_pane_9"
                        role="tabpanel"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-12">
                  <div className="card bg-white card-xl-stretch px-5 py-2">
                    <div className="outline-card pt-5">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-dot fs-3x text-success m-0"></i>
                        <span className="text-success">Active</span>
                      </div>
                      <div className="row justify-content-between align-items-center">
                        <div className="col ps-8">
                          <span>EUR Wallet</span>
                          <p>EUR</p>
                        </div>
                        <p className="col large-font">€2,000,000.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
