
import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import Category from "./Category";
import Price from "./Price";
import Description from "./Description";
import Button from "../Button";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

function MotherFormComponent() {
  const { userIdData, tokenData } = useContext(AuthContext);
  const ownerId = userIdData;
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ownerId: "",
    title: "",
    category: "",
    description: "",
    price: "",
    rent: "",
    rent_interval: "",
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      ownerId: ownerId,
    }));
  }, [ownerId]);

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const response = await      fetch(`${import.meta.env.VITE_SERVER}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Sign In failed");
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      toast.success("Product added successfully");
      navigate("/");
    } catch (error) {
      // toast.error('Incorrect details');
    }
  };

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
    } else if (page === 3) {
      return <Price formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;
    }
  };

  const progressPercentage = ((page + 1) / FormTitles.length) * 100;

  return (
    <div>
      <Toaster />
      <div className="">
        <div className="header">
          <h1 className="text-[22px] text-textDeep font-bold">
            {FormTitles[page]}
          </h1>
        </div>
        <div className="flex justify-center">
          <div>
            {/* Progress Bar Start*/}
            {/* <div className="progressbar w-[400px] h-2 bg-white my-4">
              <div
                className="bg-teal-600 h-full"
                style={{
                  width: `${((page + 1) * 100) / FormTitles.length}%`,
                }}
              ></div>
            </div> */}
            {/* Progress Bar End */}

               {/* Progress Bar Start*/}
               <div className="progressbar w-[500px] h-2 bg-white my-4">
               <div
  className="bg-teal-600 h-full"
  style={{
    width: `${page === FormTitles.length - 1 ? 100 : progressPercentage}%`,
  }}
></div>
            </div>
            {/* Progress Bar End */}

            <div>{PageDisplay()}</div>
            <div className="flex justify-between mt-4">
              <div className={`footer ${page === 0 ? "hidden" : "block"}`}>
                <Button
                  textColor="white"
                  bgColor="teal-600"
                  focusColor="gray-100"
                  hoverColor="teal-900"
                  borderColor=""
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
                textColor="white"
                bgColor="teal-600"
                focusColor="gray-100"
                hoverColor="teal-900"
                borderColor=""
                width="small"
                label={page === FormTitles.length - 1 ? "Submit" : "Next"}
                onClick={() => {
                  if (page === FormTitles.length - 2) {
                    console.log(formData);
                    setFormData(formData); // Update the formData state
                  }
                  if (page === FormTitles.length - 1) {
                    handleFormSubmit();
                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotherFormComponent;