// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

interface AccordianType {
  accorian1: boolean;
  accorian2: boolean;
  accorian3: boolean;
  accorian4: boolean;
}

const ChatCard = (props: { conversation: any }) => {
  const { conversation } = props;
  // console.log("conversation", conversation);
  const {
    intelligibilityData = [],
    recommendations = [],
    dataInsigts = [],
  } = conversation;

  const [selectedOption, setSelectedOption] = useState({
    option1: true,
    option2: false,
    option3: false,
    option4: false,
  });

  const setActive = (option: string) => {
    setSelectedOption({
      ...{
        option1: false,
        option2: false,
        option3: false,
        option4: false,
      },
      [option]: true,
    });
  };

  const [selectedAccordian, setSelectedAccordian] = useState<AccordianType>({
    accorian1: true,
    accorian2: false,
    accorian3: false,
    accorian4: false,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    setChatData([]);
  }, [conversation]);

  const setAccordianActive = (acordian: string) => {
    setSelectedAccordian({
      ...{
        accorian1: false,
        accorian2: false,
        accorian3: false,
        accorian4: false,
      },
      [acordian]: !selectedAccordian[acordian],
    });
  };

  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      const filterObj = conversation.metaData.filter(
        (obj: { prompt: string }) => obj.prompt === searchQuery,
      );
      if (filterObj && filterObj.length) {
        const dataObject = [
          ...chatData,
          {
            prompt: searchQuery,
            response: filterObj[0].response,
            additionalData: filterObj[0]?.additionalData || [],
          },
        ];
        setChatData(dataObject);
      }
      setSearchQuery((prevSearchQuery) => "");
    }
  };

  return (
    <div className="flex w-[390px]">
      <div className="chat-area-box col-span-12 w-full rounded-sm border border-stroke bg-[#f9f9f9] dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <div className="conversation-box">
          <div className="heading-container">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Conversation</h2>
              <svg
                className="cursor-pointer"
                onClick={() => {
                  setAccordianActive("accorian1");

                  setActive("option1");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 9l5 5 5-5" />
              </svg>
            </div>
          </div>
          <div
            className={`conversation-area ${selectedAccordian.accorian1 ? "" : "hidden"}`}
          >
            <div className="conversation-wrapper">
              <div className="w-full max-w-lg rounded-lg bg-white p-3">
                <div className="mb-4 mt-4 flex">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleEnterPress}
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded border p-2 text-black"
                  />
                </div>

                {chatData.map((data, index) => {
                  console.log(data, "arv data");
                  return (
                    <div key={index}>
                      <div className="mb-4 flex w-[85%] items-start">
                        <div className="flex items-start rounded-lg border-[1px] border-[#ccc] bg-white px-4 py-2">
                          <svg
                            width="64px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                              ></rect>{" "}
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9999 6C9.79077 6 7.99991 7.79086 7.99991 10C7.99991 12.2091 9.79077 14 11.9999 14C14.209 14 15.9999 12.2091 15.9999 10C15.9999 7.79086 14.209 6 11.9999 6ZM17.1115 15.9974C17.8693 16.4854 17.8323 17.5491 17.1422 18.1288C15.7517 19.2966 13.9581 20 12.0001 20C10.0551 20 8.27215 19.3059 6.88556 18.1518C6.18931 17.5723 6.15242 16.5032 6.91351 16.012C7.15044 15.8591 7.40846 15.7251 7.68849 15.6097C8.81516 15.1452 10.2542 15 12 15C13.7546 15 15.2018 15.1359 16.3314 15.5954C16.6136 15.7102 16.8734 15.8441 17.1115 15.9974Z"
                                fill="#9595ee"
                              ></path>{" "}
                            </g>
                          </svg>
                          <p className="-mt-0.5 ml-2 text-[14px] font-semibold text-black">
                            {data.prompt}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 ml-[15%] flex w-[85%] items-end justify-end">
                        <div className="flex items-start rounded-lg border-[1px] border-[#ccc] bg-[#eee] px-4 py-2">
                          <svg
                            height={28}
                            width={28}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke=""
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M7 4C4.79086 4 3 5.79073 3 7.9997V13.2642C3 15.4732 4.79086 17.2639 7 17.2639L7 19.8998C7 19.9834 7.09639 20.0301 7.16197 19.9783L10.6 17.2639H17C19.2091 17.2639 21 15.4732 21 13.2642V7.99971C21 5.79073 19.2091 4 17 4H7Z"
                                stroke="#ff0000"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>{" "}
                              <path
                                d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"
                                fill="#ff0000"
                              ></path>{" "}
                              <path
                                d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z"
                                fill="#ff0000"
                              ></path>{" "}
                              <path
                                d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
                                fill="#ff0000"
                              ></path>{" "}
                            </g>
                          </svg>
                          <div className="flex flex-col">
                            <p className="ml-2 text-[14px] font-semibold text-black">
                              {data.response}
                            </p>
                            <div>
                              {" "}
                              {data?.additionalData?.length > 0 && (
                                <ul>
                                  {/* {JSON.stringify(data.additionalData)} */}
                                  {data?.additionalData.map((d) => {
                                    return (
                                      <li
                                        key={d}
                                        className="ml-4 list-disc text-[10px] font-semibold italic text-black"
                                      >
                                        {d}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="conversation-box mt-3">
          <div className="heading-container">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Explainability
              </h2>
              <svg
                className="cursor-pointer"
                onClick={() => {
                  setAccordianActive("accorian2");

                  setActive("option2");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 9l5 5 5-5" />
              </svg>
            </div>
          </div>
          <div
            className={`conversation-area ${selectedAccordian.accorian2 ? "" : "hidden"}`}
          >
            <div className="conversation-wrapper">
              <div className="w-full max-w-lg rounded-lg bg-white p-3">
                {intelligibilityData.map((data) => {
                  return (
                    <>
                      <div className="mb-2  flex">
                        <div className="w-12">
                          <svg
                            height={22}
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            fill="none"
                            stroke="#ff0000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path d="m14.25 8.75c-.5 2.5-2.3849 4.85363-5.03069 5.37991-2.64578.5263-5.33066-.7044-6.65903-3.0523-1.32837-2.34784-1.00043-5.28307.81336-7.27989 1.81379-1.99683 4.87636-2.54771 7.37636-1.54771"></path>{" "}
                              <polyline points="5.75 7.75,8.25 10.25,14.25 3.75"></polyline>{" "}
                            </g>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span>{data.text1} </span>
                          <span className="text-[14px] font-semibold text-black">
                            {data.text2}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="conversation-box mt-3">
          <div className="heading-container">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">Insights</h2>
              <svg
                className="cursor-pointer"
                onClick={() => {
                  setAccordianActive("accorian3");

                  setActive("option3");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 9l5 5 5-5" />
              </svg>
            </div>
          </div>
          <div
            className={`conversation-area ${selectedAccordian.accorian3 ? "" : "hidden"}`}
          >
            <div className="conversation-wrapper">
              <div className="w-full max-w-lg rounded-lg bg-white p-3">
                {dataInsigts.map((data) => {
                  return (
                    <>
                      <div className="mb-2  flex justify-start">
                        <div className="">
                          <svg
                            className="mt-1.5"
                            xmlns="http://www.w3.org/2000/svg"
                            height={18}
                            viewBox="0 0 20 20"
                          >
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              d="M10,20a9.738,9.738,0,0,1-3.9-.788A9.984,9.984,0,0,1,.788,13.9,9.738,9.738,0,0,1,0,10,9.738,9.738,0,0,1,.788,6.1,9.984,9.984,0,0,1,6.1.788,9.738,9.738,0,0,1,10,0a9.738,9.738,0,0,1,3.9.788A9.984,9.984,0,0,1,19.212,6.1,9.738,9.738,0,0,1,20,10v8a2.006,2.006,0,0,1-2,2Zm0-2a7.721,7.721,0,0,0,5.675-2.325A7.721,7.721,0,0,0,18,10a7.721,7.721,0,0,0-2.325-5.675A7.721,7.721,0,0,0,10,2,7.721,7.721,0,0,0,4.325,4.325,7.721,7.721,0,0,0,2,10a8.319,8.319,0,0,0,.075,1.125A7.689,7.689,0,0,0,2.3,12.2L6,8.5l3.3,2.775L12.575,8H11V6h5v5H14V9.425L9.4,14,6.125,11.2l-2.95,2.95a8.118,8.118,0,0,0,2.837,2.788A7.656,7.656,0,0,0,10,18Zm7.5.5a.982.982,0,1,0-.712-.288A.968.968,0,0,0,17.5,18.5Z"
                              fill={"#6495ed"}
                            />
                          </svg>
                        </div>
                        <div className="ml-2.5">
                          <span className="text-[14px] font-semibold text-black">
                            {data.insight}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="conversation-box mt-3">
          <div className="heading-container">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">
                Recommendations
              </h2>

              <svg
                className="cursor-pointer"
                onClick={() => {
                  setAccordianActive("accorian4");

                  setActive("option4");
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 9l5 5 5-5" />
              </svg>
            </div>
          </div>
          <div
            className={`conversation-area ${selectedAccordian.accorian4 ? "" : "hidden"}`}
          >
            <div className="conversation-wrapper">
              <div className="w-full max-w-lg rounded-lg bg-white p-3">
                {recommendations.map((data) => {
                  return (
                    <>
                      <div className="mb-2  flex justify-start">
                        <div className="">
                          <svg
                            className="mt-1.5"
                            xmlns="http://www.w3.org/2000/svg"
                            height={18}
                            viewBox="0 0 21 20"
                          >
                            <g
                              id="Group_26"
                              data-name="Group 26"
                              transform="translate(-2 -1)"
                            >
                              <path
                                id="Path_16"
                                data-name="Path 16"
                                d="M18,21H7V8l7-7,1.25,1.25a1.313,1.313,0,0,1,.288.475,1.636,1.636,0,0,1,.112.575v.35L14.55,8H21a2.051,2.051,0,0,1,2,2v2a1.551,1.551,0,0,1-.05.375q-.05.2-.1.375l-3,7.05a2.02,2.02,0,0,1-.75.85A1.953,1.953,0,0,1,18,21ZM9,19h9l3-7V10H12l1.35-5.5L9,8.85ZM7,8v2H4v9H7v2H2V8Z"
                                fill={"#6495ed"}
                              />
                            </g>
                          </svg>
                          {/* <svg
                            height={22}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 mt-1"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#6495ed"
                                stroke-width="1.5"
                              ></circle>{" "}
                              <path
                                d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
                                stroke="#6495ed"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>{" "}
                              <circle
                                cx="12"
                                cy="16"
                                r="1"
                                fill="#6495ed"
                              ></circle>{" "}
                            </g>
                          </svg> */}
                        </div>
                        <div className="ml-2.5 ">
                          <span className="cursor-pointer text-[14px] font-semibold text-blue-500 underline">
                            {data.recommendation}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-1 right-side-bar flex w-12 flex-col divide-y-[1px] bg-[#ddd]">
        <div
          className={`${selectedOption.option1 ? "bg-grey-custom" : ""} cursor-pointer p-3`}
          onClick={() => {
            setActive("option1");
            setAccordianActive("accorian1");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="Path_13"
              data-name="Path 13"
              d="M6,9a.982.982,0,1,0-.713-.288A.968.968,0,0,0,6,9Zm4,0a.982.982,0,1,0-.712-.288A.968.968,0,0,0,10,9Zm4,0a.982.982,0,1,0-.712-.288A.968.968,0,0,0,14,9ZM0,20V2A1.926,1.926,0,0,1,.587.587,1.926,1.926,0,0,1,2,0H18a1.926,1.926,0,0,1,1.413.587A1.926,1.926,0,0,1,20,2V14a2.006,2.006,0,0,1-2,2H4Z"
              fill={selectedOption.option1 ? "#eb1700" : ""}
            />
          </svg>
        </div>
        <div
          className={`${selectedOption.option2 ? "bg-grey-custom" : ""} cursor-pointer p-3`}
          onClick={() => {
            setActive("option2");
            setAccordianActive("accorian2");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.012"
            height="20"
            viewBox="0 0 19.012 20"
          >
            <path
              id="Path_14"
              data-name="Path 14"
              d="M3,20V15.7A9.233,9.233,0,0,1,.788,12.663,8.771,8.771,0,0,1,0,9,8.679,8.679,0,0,1,2.625,2.625,8.679,8.679,0,0,1,9,0a8.892,8.892,0,0,1,5.538,1.837,8.358,8.358,0,0,1,3.137,4.788l1.3,5.125a.947.947,0,0,1-.175.863A.961.961,0,0,1,18,13H16v3a2.006,2.006,0,0,1-2,2H12v2H10V16h4V11h2.7l-.95-3.875a6.533,6.533,0,0,0-2.45-3.7A6.915,6.915,0,0,0,9,2,6.787,6.787,0,0,0,4.05,4.025,6.663,6.663,0,0,0,2,8.95a6.819,6.819,0,0,0,.612,2.85A7.5,7.5,0,0,0,4.35,14.2l.65.6V20Zm5-7h2l.15-1.25a2.088,2.088,0,0,0,.363-.175,1.565,1.565,0,0,0,.288-.225l1.15.5,1-1.7-1-.75a1.625,1.625,0,0,0,0-.8l1-.75-1-1.7-1.15.5a1.562,1.562,0,0,0-.288-.225,2.09,2.09,0,0,0-.363-.175L10,5H8L7.85,6.25a2.09,2.09,0,0,0-.362.175A1.562,1.562,0,0,0,7.2,6.65l-1.15-.5-1,1.7,1,.75a1.625,1.625,0,0,0,0,.8l-1,.75,1,1.7,1.15-.5a1.565,1.565,0,0,0,.288.225,2.088,2.088,0,0,0,.362.175Zm1-2.5A1.5,1.5,0,0,1,7.938,7.938a1.5,1.5,0,0,1,2.125,2.125A1.446,1.446,0,0,1,9,10.5Z"
              fill={selectedOption.option2 ? "#ff0000" : "#1c1b1f"}
            />
          </svg>
        </div>
        <div
          className={`${selectedOption.option3 ? "bg-grey-custom" : ""} cursor-pointer p-3`}
          onClick={() => {
            setActive("option3");
            setAccordianActive("accorian3");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="Path_15"
              data-name="Path 15"
              d="M10,20a9.738,9.738,0,0,1-3.9-.788A9.984,9.984,0,0,1,.788,13.9,9.738,9.738,0,0,1,0,10,9.738,9.738,0,0,1,.788,6.1,9.984,9.984,0,0,1,6.1.788,9.738,9.738,0,0,1,10,0a9.738,9.738,0,0,1,3.9.788A9.984,9.984,0,0,1,19.212,6.1,9.738,9.738,0,0,1,20,10v8a2.006,2.006,0,0,1-2,2Zm0-2a7.721,7.721,0,0,0,5.675-2.325A7.721,7.721,0,0,0,18,10a7.721,7.721,0,0,0-2.325-5.675A7.721,7.721,0,0,0,10,2,7.721,7.721,0,0,0,4.325,4.325,7.721,7.721,0,0,0,2,10a8.319,8.319,0,0,0,.075,1.125A7.689,7.689,0,0,0,2.3,12.2L6,8.5l3.3,2.775L12.575,8H11V6h5v5H14V9.425L9.4,14,6.125,11.2l-2.95,2.95a8.118,8.118,0,0,0,2.837,2.788A7.656,7.656,0,0,0,10,18Zm7.5.5a.982.982,0,1,0-.712-.288A.968.968,0,0,0,17.5,18.5Z"
              fill={selectedOption.option3 ? "#ff0000" : "#1c1b1f"}
            />
          </svg>
        </div>
        <div
          className={`${selectedOption.option4 ? "bg-grey-custom" : ""} cursor-pointer p-3`}
          onClick={() => {
            setActive("option4");
            setAccordianActive("accorian4");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
          >
            <g id="Group_26" data-name="Group 26" transform="translate(-2 -1)">
              <path
                id="Path_16"
                data-name="Path 16"
                d="M18,21H7V8l7-7,1.25,1.25a1.313,1.313,0,0,1,.288.475,1.636,1.636,0,0,1,.112.575v.35L14.55,8H21a2.051,2.051,0,0,1,2,2v2a1.551,1.551,0,0,1-.05.375q-.05.2-.1.375l-3,7.05a2.02,2.02,0,0,1-.75.85A1.953,1.953,0,0,1,18,21ZM9,19h9l3-7V10H12l1.35-5.5L9,8.85ZM7,8v2H4v9H7v2H2V8Z"
                fill={selectedOption.option4 ? "#ff0000" : "#1c1b1f"}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default ChatCard;
