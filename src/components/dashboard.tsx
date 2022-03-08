import { Image } from "../_metronic/assets/img";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

export const Dashboard = () => (
  <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
    {/*  */}
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div className="container-xxl" id="kt_content_container">
        <div className="row gy-5 g-xl-8 mt-7">
          <div className="col-xl-12">
            <div className="card bg-white card-xl-stretch p-5 border-0">
              <div className="d-flex justify-content-between align-items-center">
                <p className="font-1">Wallet (5)</p>
                <p className="font-2 primary-color">View all Wallets</p>
              </div>
              <div className="row gy-5">
                <div className="col-xl-4">
                  <div className="bg-card1-color p-5 border-radius-5">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="flex-column">
                        <span>Personal account</span>
                        <p>USD</p>
                      </div>
                      <img src={Image.USD} alt="usa" />
                    </div>
                    <p className="welcome-font mt-5">$10,250.00</p>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="bg-card2-color p-5 border-radius-5">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="flex-column">
                        <span>EUR Wallet</span>
                        <p>EUR</p>
                      </div>
                      <img src={Image.EUR} alt="usa" />
                    </div>
                    <p className="welcome-font mt-5">€4000.53</p>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="bg-card3-color p-5 border-radius-5">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="flex-column">
                        <span>School Fees</span>
                        <p>GBP</p>
                      </div>
                      <img src={Image.GBP} alt="usa" />
                    </div>
                    <p className="welcome-font mt-5">£50.00</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mt-10">
                <span className="font-1">Quick Links</span>
                <p className="text-light-color">
                  Your frequently used actions for easy access.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center scrollY">
                <div className="d-flex flex-column text-center py-5">
                  <div className="small-card pt-5">
                    <img src={Image.Add_Wallet} alt="wallet" />
                    <p className="pt-4">
                      Add new <br />
                      Wallet
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Add_Card} alt="wallet" />
                    <p className="pt-4">
                      Add new <br />
                      Card
                    </p>
                  </div>
                </div>
                <div className="row flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Exchange_Balance} alt="wallet" />
                    <p className="pt-4">
                      Balance <br />
                      Exchange
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Transfer_Account} alt="wallet" />
                    <p className="pt-4">
                      Transfer to <br />
                      Account
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Generate_Voucher} alt="wallet" />
                    <p className="pt-4">
                      Generate <br />
                      Voucher
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Mobile_Money} alt="wallet" />
                    <p className="pt-4">
                      Mobile <br />
                      Money
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column text-center p-5">
                  <div className="small-card pt-5">
                    <img src={Image.Payment_Link} alt="wallet" />
                    <p className="pt-4">
                      Payment <br />
                      Link
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-10">
                <div className="d-flex align-items-center">
                  <span className="font-1">Activity</span>
                  <span className="primary-color ps-7">Month</span>
                  <i className="bi bi-chevron-down fw-bold primary-color fs-1x ps-1"></i>
                </div>
                <p className="font-2 primary-color d-none d-md-block">
                  View Transaction History
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="d-flex pe-3">
                  <img
                    src={Image.Transaction}
                    alt="transaction"
                    className="d-none d-md-block"
                  />
                  <div className="pt-3 ps-2 col">
                    <span>Total Transactions</span>
                    <p className="fw-bold">$88,600.00</p>
                  </div>
                </div>
                <div className="d-flex pe-3">
                  <img
                    src={Image.PayIn}
                    alt="transaction"
                    className="d-none d-md-block"
                  />
                  <div className="pt-3 ps-3">
                    <span>Pay-In</span>
                    <p className="fw-bold">$4,600.00</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={Image.PayOut}
                    alt="transaction"
                    className="d-none d-md-block"
                  />
                  <div className="pt-3 ps-3">
                    <span>Pay-Out</span>
                    <p className="fw-bold">$72,600.00</p>
                  </div>
                </div>
              </div>
              {/* Lin Chart */}
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
