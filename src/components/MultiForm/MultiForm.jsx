import React, { useState } from "react";
import Title from "./Title";
import Category from "./Category";
import Price from "./Price";
import Description from "./Description";

function MultiForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    selectedOptions: "",
    Description: "",
  });

  const FormTitles = [
    "Write a title for your product",
    "Select a category for your product",
    "Write description for your product",
    "Other",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Title formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Category formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Description formData={formData} setFormData={setFormData} />;
    } else {
      return <Price formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <div className="">
        <div className="header">
          <h1 className="text-[22px] text-textDeep font-bold">
            {FormTitles[page]}
          </h1>
        </div>
        <div className="flex justify-center">
          <div>
            {/* Progress Bar Start*/}
            <div className="progressbar w-[400px] h-2 bg-white my-4">
              <div
                className="w-1/3 bg-teal-600 h-full"
                style={{
                  width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
                }}
              ></div>
            </div>
            {/* Progress Bar End */}
            {/* <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <button
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button> */}

            <div>{PageDisplay()}</div>
            <div className="flex justify-between">
              <div className={`footer ${page === 0 ? "hidden" : "block"}`}>
                <button
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </button>
              </div>

              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiForm;
