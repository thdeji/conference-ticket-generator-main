import { useState } from "react";
import FileInputType from "./file-input-component";
import TextInputField from "./text-input-component";

function App() {
  const [user, setUser] = useState({ fullName: "", Email: "", Github: "" });
  const [isApproved, setIsApproved] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault;
    setIsApproved(true);
  }

  let isMobile = window.innerWidth < 400;
  return (
    <div
      className={`flex flex-col gap-5 align-middle min-h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden relative bg-[url('/images/background-mobile.png')] md:bg-[url('/images/background-desktop.png')]
      `}
    >
      <img
        className="absolute top-0 left-4 overflow-hidden"
        src="./images/pattern-lines.svg"
        alt="lines"
      />
      <img
        className="absolute bottom-50 right-4 w-30 overflow-hidden"
        src="./images/pattern-circle.svg"
        alt="circles"
      />
      <img
        className="absolute bottom-0 left-4 w-50 overflow-hidden"
        src={
          isMobile
            ? "./images/pattern-squiggly-line-bottom-mobile-tablet.svg"
            : "./images/pattern-squiggly-line-bottom-desktop.svg"
        }
        alt="squiggly"
      />
      <img
        className="absolute top-5 right-4 w-40 overflow-hidden"
        src="./images/pattern-squiggly-line-top.svg"
        alt="squiggly"
      />

      <h1 className=" flex justify-center mt-10">
        <img src="/images/logo-full.svg" alt="logo" />
      </h1>
      {!isApproved && (
        <div className="z-2 mx-4 md:mx-40 lg:mx-70">
          {" "}
          <div className="text-center">
            <h1 className="font-Inconsolata-VariableFont font-bold text-2xl text-Neutral300">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="font-Inconsolata-VariableFont text-Neutral500 mt-4 mb-4">
              Secure your spot at next year's coding conference
            </p>
          </div>
          <form
            action="#"
            className="flex flex-col gap-4 font-Inconsolata-VariableFont z-1 mx-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="file" className="text-Neutral0">
              Upload Avatar
            </label>
            <FileInputType setThumbnail={setThumbnail}/>
            <span className="flex gap-2 text-xs text-Neutral500">
              <img src="./images/icon-info.svg" alt="icon-info" /> Upload
              your photo (jpg/png max size: 500kb)
            </span>

            <label htmlFor="fullName" className="text-Neutral0">
              Full Name
            </label>
            <TextInputField
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
            />

            <label htmlFor="fullName" className="text-Neutral0">
              E-mail Address
            </label>
            <TextInputField
              type="Email"
              name="Email"
              placeholder="example@email.com"
              value={user.Email}
              onChange={handleChange}
            />

            <label htmlFor="fullName" className="text-Neutral0">
              Github Username
            </label>
            <TextInputField
              type="text"
              name="Github"
              placeholder="@yourusername"
              value={user.Github}
              onChange={handleChange}
            />

            <button
              className="bg-Orange500 p-4 text-Neutral900 font-bold rounded-lg cursor-pointer mb-10"
              type="submit"
            >
              Generate My Ticket
            </button>
          </form>{" "}
        </div>
      )}
      {isApproved && (
        <div className="font-Inconsolata-VariableFont z-2 mx-5 md:mx-40 lg:mx-80">
          <h1 className="text-Neutral0 text-center text-4xl font-bold">
            Congrats, <span className="capitalize bg-linear-to-r from-Orange500 to-neutral-50 bg-clip-text text-transparent">{user.fullName}</span> Your ticket is ready.
          </h1>

          <p className=" mb-10 text-Neutral300 text-xl text-center font-semibold mt-5">
            we've Emailed your ticket to  <span className="capitalize bg-linear-to-r from-Orange500 to-neutral-50 bg-clip-text text-transparent">{user.Email}</span> and we will send updates
            in the run up to the event
          </p>

          <div className="relative flex flex-col gap-15 bg-[url('./images/pattern-ticket.svg')] bg-no-repeat bg-cover p-4 ">
            <p className="absolute right-0 top-20 rotate-90 text-Neutral500 text-2xl font-semibold">#01609</p>
            <div className="flex gap-5 items-stretch">
              <img className="" src="./images/logo-mark.svg" alt="" />
              <div>
                <p className="mb-2 text-Neutral300 font-bold text-2xl">Coding Conf</p>
                <p className="text-Neutral500 font-semibold">Jan 31 2025 / Austin, Tx</p>
              </div>
            </div>
            <div className="flex gap-5">
            <img className="w-15 h-15 rounded-lg self-center" src={thumbnail} alt="Ticket Preview" />
              <div className="self-end">
                <p className="text-Neutral300 font-semibold text-lg capitalize">{user.fullName}</p>
                <p className="flex gap-2">
                  <img src="./images/icon-github.svg" alt="github" />
                  <p className="text-Neutral500 font-semibold">@{user.Github}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
