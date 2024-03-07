// @ts-nocheck
import React, { useState } from "react";
import PieChart from "../Charts/PieChart";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import Chart from "../Charts/page";
import ChartThree from "../Charts/ChartThree";

const TableOne = (props: { conversation: any; tableData: any }) => {
  const [isShowTable, setIsShowTable] = useState(true);
  const { tableData, conversation } = props;

  console.log("conversation", conversation.id);

  const formatColumnName = (columnName: string) => {
    return columnName
      .replace(/_/g, " ")
      .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());
  };

  return (
    <div className="search-record-data mx-auto w-full">
      <div className="first-child relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
        <div className="second-child mb-0 rounded-t border-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="left-heading-bar relative w-full max-w-full flex-1 flex-grow px-4 text-base font-semibold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <h3 className="text-blueGray-700 text-base font-semibold">
                Data Source:{" "}
                <span className="text-blue-900">
                  {conversation.id === 1 && (
                    <span className="text-blue-900">Regulatory Submission</span>
                  )}
                  {conversation.id === 2 && (
                    <span className="text-blue-900">
                      Structured Product Labelling
                    </span>
                  )}
                  {conversation.id !== 1 && conversation.id !== 2 && (
                    <span className="text-blue-900">
                      Registration and Listing
                    </span>
                  )}
                  </span>
              </h3>
            </div>
            <div className="relative flex w-full max-w-full flex-1 flex-grow justify-end gap-4   px-4 text-right">
              <div
                onClick={() => setIsShowTable(false)}
                className="cursor-pointer"
              >
                <svg
                  height={24}
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  stroke={!isShowTable ? "#ff0000" : ""}
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
                    <path
                      d="M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div
                onClick={() => setIsShowTable(true)}
                className="cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  stroke={isShowTable ? "#ff0000" : ""}
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
                      d="M9 4L9 20M15 4L15 20M3 9H21M3 15H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z"
                      stroke={isShowTable ? "#ff0000" : "#000000"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  height="24px"
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
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 5C6.5 4.44772 6.94772 4 7.5 4H9H15H16.5C17.0523 4 17.5 4.44772 17.5 5C17.5 5.55228 17.0523 6 16.5 6H16.095L16.9132 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H16H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V17H8H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H7.08679L7.90497 6H7.5C6.94772 6 6.5 5.55228 6.5 5ZM9.91321 6L9.09503 15H12H14.905L14.0868 6H9.91321Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  height={24}
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
                    <path
                      d="M4 9V5.6C4 5.03995 4 4.75992 4.10899 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109C4.75992 4 5.03995 4 5.6 4L9 4M4 15V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20L9 20M15 4H18.4C18.9601 4 19.2401 4 19.454 4.10899C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C20 4.75992 20 5.03995 20 5.6V9M20 15V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20H15"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height={24}
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
                    <path
                      d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {!isShowTable && (
          <div className="block w-full overflow-x-auto">
            <div className="pieChart-container">
              <PieChart
                dataId={conversation.id}
                labels={tableData.col_keys}
                series={tableData.result}
              />
            </div>
          </div>
        )}

        {isShowTable && (
          <div className="table-parent block w-full overflow-x-auto">
            <h6 className=" mb-2 ml-4 text-[13px] text-base font-semibold">
              <span className="text-black"> Metrics:</span>{" "}
              <span className="text-blue-900">Count of Request</span>
            </h6>
            <table className="w-full border-collapse items-center bg-transparent text-base font-semibold text-black">
              <thead>
                <tr>
                  {tableData &&
                    tableData.col_keys &&
                    Array.isArray(tableData.col_keys) &&
                    tableData.col_keys.map((col: string, index: number) => (
                      <th
                        key={index}
                        className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                      >
                        {formatColumnName(col)}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {tableData &&
                  tableData.col_keys &&
                  Array.isArray(tableData.result) &&
                  tableData.result.map((row: any, key: number) => (
                    <tr key={key}>
                      {row.map((data: string | number | boolean, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          key={index}
                          className="text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs"
                        >
                          {data}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default TableOne;
