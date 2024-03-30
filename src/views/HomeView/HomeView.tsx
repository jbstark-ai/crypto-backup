import { useState } from "react";
import { Page } from "@/components/Page";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const notify = (ctx: "success" | "error", message) => {
  switch (ctx) {
    case "success":
      return toast.success(message, { duration: 4000, position: "top-center" });
    case "error":
      return toast.error(message, { duration: 4000, position: "top-center" });
    default:
      return toast(message, { duration: 4000, position: "top-center" });
  }
};

export const HomeView = () => {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const account = useAccount();
  const { chainId, network, address, balance, provider, connected } = account;
  const [creds, setCreds] = useState({ email: "", password: "" });
  return (
    <Page>
      <Toaster />
      <button>Buy product</button>
      {/* <section>
        <p>
          Email{" "}
          <input
            type="email"
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
        </p>
        <p>
          Password{" "}
          <input
            type="password"
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
        </p>
        <button
          onClick={() =>
            axios
              .post("http://localhost:4000/sign-in", {
                ...creds,
              })
              .then((res) => {
                notify("success", "Signed in!");
              })
              .catch((err) => {
                console.log(err.data);
                if (err.action === "VERIFY_EMAIL") {
                  return notify("error", "Please confirm your email address.");
                }
                notify("error", "Sorry, we couldn't sign you in.");
              })
          }
        >
          Sign In
        </button>
        <button
          onClick={() =>
            axios
              .post("http://localhost:4000/sign-up", {
                ...creds,
              })
              .then((res) => {
                console.log({ user: res });
                notify("success", "User created! Please verify your email.");
              })
              .catch((err) => {
                console.error(err);
                notify("error", "Sorry, we couldn't sign you in!");
              })
          }
        >
          Sign Up
        </button>
      </section> */}
      <section>
        <button onClick={() => open()}>Open Connect Modal</button>
        <button onClick={() => open({ view: "Networks" })}>
          Open Network Modal
        </button>
      </section>
      <section>
        <h2>Your account</h2>
        <table>
          <tr>
            <td>ChainId</td>
            <td>{chainId}</td>
          </tr>
          <tr>
            <td>Network</td>
            <td>{network}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>{balance}</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>{provider}</td>
          </tr>
          <tr>
            <td>Connected</td>
            <td>{connected?.toString()}</td>
          </tr>
        </table>
      </section>
      {/* <pre>{JSON.stringify(account, null, 2)}</pre> */}
    </Page>
  );
};
