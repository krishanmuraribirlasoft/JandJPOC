// @ts-nocheck
"use client";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import { promptData } from "../../constants/search";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchClickTrue } from "@/lib/features/searchSlice";
import { topTrendingQuestions } from "../../constants/search";
interface ToolCall {}

interface ContentFilterResults {
  hate: {
    filtered: boolean;
    severity: string;
  };
  sexual: {
    filtered: boolean;
    severity: string;
  };
  violence: {
    filtered: boolean;
    severity: string;
  };
  selfHarm: {
    filtered: boolean;
    severity: string;
  };
}

interface Message {
  role: string;
  question: string;
  answer: string;
  toolCalls: ToolCall[];
}

interface DataItem {
  index: number;
  logprobs: null | any;
  finishReason: string;
  message: Message;
  contentFilterResults: ContentFilterResults;
}

interface APIResponse {
  success: boolean;
  data: any;
}

type ApiResponse = {
  query: string;
  col_keys: string[];
  result: any[][];
};

interface Record {
  submission_count(submission_count: any): number;
  country: any;
  labels: string[];
  series: number[];
  legend: boolean;
}

interface ChartData {
  country: string;
  submission_count: number;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { searchClicked } = useSelector((state: any) => state.search);
  // console.log("searchClicked searchClicked", searchClicked);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [conversation, setConversation] = useState<any>("");

  const [tableData, setTableData] = useState<ChartData[]>([]);

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRes, setSearchRes] = useState<ApiResponse | null>(null);
  const [isSearched, setIsSearched] = useState(searchClicked);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsSearched(searchClicked);
  }, [searchClicked]);
  //  const location = useLocation()
  //  console.log("location",location);
  const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const submitSearchQuery = async (question) => {
    // console.log("submitSearchQuery", searchQuery, promptData);
    try {
      const filterdObj = promptData.filter((obj) => {
        if (question) {
          return obj.question === question;
        } else {
          return obj.question === searchQuery;
        }
      });
      console.log("filterdObj", filterdObj);
      if (filterdObj.length) {
        const response = await fetch(`/data/${filterdObj[0].fileName}`);
        const text = await response.text();
        const rows = text.split("\n");
        const headers = rows[0].split(",");
        const filteredHeaders = headers.filter(
          (header) => header.trim() !== "",
        );
        const formattedData = {
          col_keys: filteredHeaders,
          result: [],
        };
        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i].split(",");
          if (columns.length === filteredHeaders.length) {
            formattedData.result.push(columns);
          }
        }
        formattedData.col_keys = formattedData.col_keys.map((col_keys) =>
          col_keys.trim(),
        );
        formattedData.result = formattedData.result.map((row) =>
          row.map((column) => column.trim()),
        );
        setConversation(filterdObj[0]);
        setChartData(formattedData as ChartData[]);
        setTableData(formattedData as ChartData[]);

        setIsSearched(true);
        // setSearchQuery("");
        setIsLoading(false);
        dispatch(setSearchClickTrue(true));
      }
    } catch (error) {
      console.error("Error fetching CSV data", error);
    }
  };

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleQuestionClick = (question) => {
    setSearchQuery(question);
    submitSearchQuery(question);
  };
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex-container search-section items-center justify-center bg-white">
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              changeTextColor();
            }}
            className={`relative z-20 w-50 appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
              isOptionSelected ? "text-black dark:text-white" : ""
            }`}
          >
            {["RIMS", "e-CTD", "CTMS", "Drug Safety Reporting", "QMS"].map(
              (opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="text-body dark:text-bodydark"
                >
                  {opt}
                </option>
              ),
            )}
          </select>
          <span className="upDownSvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 9l5 5 5-5" />
            </svg>
          </span>

          <input
            onChange={searchQueryHandler}
            className="w-full rounded border border-stroke bg-gray py-3 !pr-14 pl-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            id="search"
            placeholder="Type your query"
            type="text"
            value={searchQuery}
          />
          <div className="search-icon" onClick={submitSearchQuery}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff0000"
              width="28px"
              height="26px"
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
                <g>
                  {" "}
                  <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                  <path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="bg-gray-100 three-box flex items-center justify-center">
          <div className="row justify-content-center">
            <div className="col-md-6 text-base font-semibold text-black">
              Requesting data...
            </div>
          </div>
        </div>
      )}

      {!isSearched && (
        <div className="bg-gray-100 three-box flex items-start justify-center">
          <div className="w-full p-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="card overflow-hidden rounded-md bg-white shadow-md">
              <div className="card-header bg-gray-300 text-gray-800 rounded-t-md px-4 py-2">
                <h6 className="my-0  flex  text-lg font-semibold text-black">
                  <svg
                    width="28px"
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
                      <g clip-path="url(#ff0000clip0_429_10973)">
                        {" "}
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="#ff0000"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M17 7H21V11"
                          stroke="#ff0000"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                      <defs>
                        {" "}
                        <clipPath id="clip0_429_10973">
                          {" "}
                          <rect width="24" height="24" fill="white"></rect>{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                    </g>
                  </svg>{" "}
                  <div className="ml-2"> Top Trending Questions</div>
                </h6>
              </div>
              <div className="card-body p-1">
                <ul className="list-unstyled mb-4 mt-3">
                  {topTrendingQuestions.map((data) => (
                    <li
                      key={data.id}
                      className="m-2 flex cursor-pointer text-base font-semibold text-black"
                    >
                      <div className="mt-1">
                        <svg
                          width="28px"
                          height="28px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#ff0000"
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
                            <g>
                              {" "}
                              <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                              <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                      <div
                        className="ml-3.5"
                        onClick={() => handleQuestionClick(data.question)}
                      >
                        {" "}
                        {data.question}
                      </div>
                    </li>
                  ))}

                  {/* <li className="m-2 flex text-base font-semibold text-black">
                    <div className="mt-1">
                      <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff0000"
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
                          <g>
                            {" "}
                            <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                            <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3.5">
                      {" "}
                      How many tracking id is reported for the question?
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full p-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="card overflow-hidden rounded-md bg-white shadow-md">
              <div className="card-header bg-gray-300 text-gray-800 rounded-t-md px-4 py-2">
                <h6 className="my-0 flex text-lg   font-semibold text-black">
                  <svg
                    fill="#ff0000"
                    width="28px"
                    viewBox="0 0 24 24"
                    id="chart-colum"
                    data-name="Line Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon line-color"
                    stroke="#ff0000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        id="secondary"
                        x="10.5"
                        y="3"
                        width="3"
                        height="18"
                        // style="fill: none; stroke: #ff0000ff0000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
                      ></rect>
                      <path
                        id="primary"
                        d="M6,21H3V12H6ZM21,7H18V21h3Z"
                        // style="fill: none; stroke: #ff0000ff0000000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
                      ></path>
                    </g>
                  </svg>
                  <div className="ml-2"> Common Metrics</div>
                </h6>
              </div>
              <div className="card-body p-1">
                <ul className="list-unstyled mb-4 mt-3">
                  <li className="m-2 flex text-base font-semibold text-black">
                    <div className="mt-1">
                      <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff0000"
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
                          <g>
                            {" "}
                            <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                            <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3.5">
                      {" "}
                      How many tracking id is reported for the question?
                    </div>
                  </li>
                  <li className="m-2 flex text-base font-semibold text-black">
                    <div className="mt-1">
                      <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff0000"
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
                          <g>
                            {" "}
                            <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                            <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3.5">
                      {" "}
                      How many tracking id is reported for the question?
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full p-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="card overflow-hidden rounded-md bg-white shadow-md">
              <div className="card-header bg-gray-300 text-gray-800 rounded-t-md px-4 py-2">
                <h6 className="my-0 flex text-lg   font-semibold text-black">
                  <svg
                    width="28px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ff0000"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="#ff0000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="ml-2"> Favorite Queries</div>
                </h6>
              </div>
              <div className="card-body p-1">
                <ul className="list-unstyled mb-4 mt-3">
                  <li className="m-2 flex text-base font-semibold text-black">
                    <div className="mt-1">
                      <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff0000"
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
                          <g>
                            {" "}
                            <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                            <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3.5">
                      {" "}
                      How many tracking id is reported for the question?
                    </div>
                  </li>
                  <li className="m-2 flex text-base font-semibold text-black">
                    <div className="mt-1">
                      <svg
                        width="28px"
                        height="28px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff0000"
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
                          <g>
                            {" "}
                            <path fill="none" d="M0 0H24V24H0z"></path>{" "}
                            <path d="M11 2.05v3.02C7.608 5.557 5 8.475 5 12c0 3.866 3.134 7 7 7 1.572 0 3.024-.518 4.192-1.394l2.137 2.137C16.605 21.153 14.4 22 12 22 6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13c-.2 2.011-.994 3.847-2.207 5.328l-2.137-2.136c.687-.916 1.153-2.006 1.323-3.192h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022c-.438-3.065-2.863-5.49-5.928-5.929V2.049z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3.5">
                      {" "}
                      How many tracking id is reported for the question?
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearched && (
        <>
          {/* <div className="flex justify-center items-center bg-gray-100 three-box">
          <div className="w-full mt-4">
            <div className="card bg-white p-2 rounded-md overflow-hidden shadow-md query-holder mt-3">
              <div className="card-body p-1">
                <h5>{searchRes.query}</h5>
              </div>
            </div>
          </div>
        </div> */}

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <>
              <div className="col-span-12 xl:col-span-8">
                <TableOne conversation={conversation} tableData={tableData} />
              </div>
              <ChatCard conversation={conversation} />
            </>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
