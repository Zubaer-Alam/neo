import React, { useState } from "react";
import Title from "./Title";
import Category from "./Category";
import Price from "./Price";
import Description from "./Description";
import Button from "../Button";
import Summary from "./Summary";

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
    "Select a price for your product",
    "Summary of your product",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Title formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Category formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Description formData={formData} setFormData={setFormData} />;
    } 
    else if (page === 3) {
      return <Price formData={formData} setFormData={setFormData} />;
    }
    else {
      return <Summary formData={formData} setFormData={setFormData} />;
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
                className="bg-teal-600 h-full"
                style={{
                  width: `${(page + 1) * 25}%`,
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
            <div className="flex justify-between mt-4">
              <div className={`footer ${page === 0 ? "hidden" : "block"}`}>
                <Button
                  width="small"
                  label="Prev"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Prev
                </Button>
              </div>

              <Button
                width="small"
                label={page === FormTitles.length - 1 ? "Submit" : "Next"}
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {/* {page === FormTitles.length - 1 ? "Submit" : "Next"} */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiForm;
