import React, { useEffect } from "react";
import "../css/style.css";

import { useMoralis } from "react-moralis";

function Home() {
    const {
        authenticate,
        isWeb3Enabled,
        isAuthenticated,
        user,
        enableWeb3,
        Moralis,
      } = useMoralis();
    
    async function authWalletConnect() {
        const user = authenticate({
          provider: "walletconnect",
          chainId: 137,
          // mobileLinks: [
          //   "metamask",
          //   "trust",
          //   "rainbow",
          //   "argent",
          //   "imtoken",
          //   "pillar",
          // ],
          signingMessage: "Welcome!",
        });
        console.log(user);
      }
    
      useEffect(() => {
        if (!isWeb3Enabled && isAuthenticated) {
          enableWeb3({ provider: "walletconnect", chainId: 56 });
          console.log("web3 activated");
        }
      }, [isWeb3Enabled, isAuthenticated, enableWeb3]);
    
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
        }
      });

    
    return (
        <div className="header">
            <div className="container">
                <div className="row first-row">
                    <div className="col-md-12">
                        <div className="main">
                            <ul>
                                <li>
                                    <a href="">Main</a>
                                </li>
                                <li>
                                    <a href="">UMF</a>
                                </li>
                                <li>
                                    <a href="">Leaderboard</a>
                                </li>
                                <li>
                                    <a href="">land-score</a>
                                </li>
                                <a className="btn" role="button" href="">
                                    SIGN IN
                                </a>
                                <li>
                                    <a href="" style={{ paddingLeft: "30px" }}>
                                        Tutorial
                                    </a>
                                </li>
                                <li>
                                    <a href="">News</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="">Story</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                            </ul>
                            <img src={require("../images/topbar.png")} alt="" />
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <h2>Log In / Sign up</h2>
                                <button className="metamask" type="button" onClick={() => authenticate()}>
                                    MetaMask
                                </button>
                                <button className="wallet" type="button" onClick={() => authWalletConnect()}>
                                    WalletConnect
                                </button>
                                <h6>What's a crypto wallet?</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
