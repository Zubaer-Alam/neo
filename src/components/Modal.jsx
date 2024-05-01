// import { useState } from "react";
// import { TiWarningOutline } from "react-icons/ti";
// import Button from "./Button";

// export default function Modal1({ openModal, setOpenModal }) {
//   return (
//     <>
//       <div className="mx-auto w-fit">
//         <div
//           onClick={() => setOpenModal(false)}
//           className={`fixed z-[100] flex items-center justify-center ${
//             openModal ? "visible opacity-100" : "invisible opacity-0"
//           } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
//         >
//           <div
//             onClick={(e_) => e_.stopPropagation()}
//             className={`${
//               openModal
//                 ? "scale-1 opacity-1 duration-300"
//                 : "scale-0 opacity-0 duration-150"
//             }`}
//           >
//             <div className="inset-0 z-10 w-screen">
//               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                 <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                   <div className="bg-[#F4FCF9] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                     <div className="sm:flex sm:items-start">
//                       <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                         <TiWarningOutline className="h-6 w-6 text-red-600" />
//                       </div>
//                       <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                         <h3
//                           className="text-base font-semibold leading-6 text-gray-900"
//                           id="modal-title"
//                         >
//                           Delete Product
//                         </h3>
//                         <div className="mt-2">
//                           <p className="text-sm text-gray-500">
//                             Are you sure you want to delete this product?
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-[#F4FCF9] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                     <button
//                       type="button"
//                       className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       onClick={() => setOpenModal(false)}
//                       type="button"
//                       className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// resuable

// import React from "react";
// import { TiWarningOutline } from "react-icons/ti";
// import Button from "./Button";

// export default function Modal({ openModal, setOpenModal, title, description, confirmLabel, cancelLabel, onConfirm }) {
//   return (
//     <>
//       <div className="mx-auto w-fit">
//         <div
//           onClick={() => setOpenModal(false)}
//           className={`fixed z-[100] flex items-center justify-center ${
//             openModal ? "visible opacity-100" : "invisible opacity-0"
//           } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className={`${
//               openModal
//                 ? "scale-1 opacity-1 duration-300"
//                 : "scale-0 opacity-0 duration-150"
//             }`}
//           >
//             <div className="inset-0 z-10 w-screen">
//               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                 <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                   <div className="bg-[#F4FCF9] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                     <div className="sm:flex sm:items-start">
//                       <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                         <TiWarningOutline className="h-6 w-6 text-red-600" />
//                       </div>
//                       <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                         <h3
//                           className="text-base font-semibold leading-6 text-gray-900"
//                           id="modal-title"
//                         >
//                           {title}
//                         </h3>
//                         <div className="mt-2">
//                           <p className="text-sm text-gray-500">
//                             {description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-[#F4FCF9] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-4">
//                     <Button
//                       label={confirmLabel}
//                       onClick={onConfirm}
//                       textColor="white"
//                       bgColor="red-600"
//                       width="small"
//                       focusColor="gray-100"
//                       hoverColor="green-600"
//                       borderColor="green-700"
//                     />
//                     <Button
//                       label={cancelLabel}
//                       onClick={() => setOpenModal(false)}
//                       textColor="gray-900"
//                       bgColor="white"
//                       width="small"
//                       focusColor="gray-100"
//                       hoverColor="green-600"
//                       borderColor="green-700"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// /resuable input


import React, { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import Button from "./Button";

export default function Modal({
  openModal,
  setOpenModal,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  inputLabels,
  inputFields, // New prop for input fields
}) {
  const [inputValues, setInputValues] = useState({}); // State to hold input field values

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };


  console.log(inputFields)

  return (
    <>
      <div className="mx-auto w-fit">
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "visible opacity-100" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            }`}
          >
            <div className="inset-0 z-10 w-screen">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-[#F4FCF9] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <TiWarningOutline className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          {title}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {description}
                          </p>
                          <div className="mt-2 flex items-center gap-3">
                          {/* Render input fields with labels */}
                          {/* {inputFields &&
                            inputFields.map((inputField, index) => (
                              <div key={index} className="mt-2 flex items-center gap-4">
                                <label className="text-sm font-medium" htmlFor={inputField.name}>{inputLabels[index]}</label>
                                <input
                                  type={inputField.type || "date"}
                                  name={inputField.name}
                                  placeholder={inputField.placeholder}
                                  value={inputValues[inputField.name] || ""}
                                  onChange={handleInputChange}
                                  className="border border-gray-300 focus:outline-teal-500 text-sm rounded-md p-2 w-full"
                                />
                              </div>
                            ))} */}
                            {inputFields &&
  inputFields.map((inputField, index) => (
    <div key={index} className="mt-2 flex items-center gap-4">
      <label className="text-sm font-medium" htmlFor={inputField.name}>{inputLabels[index]}</label>
      <input
        type={inputField.type || "date"}
        name={inputField.name}
        placeholder={inputField.placeholder}
        value={inputValues[inputField.name] || ""}
        onChange={handleInputChange}
        className="border border-gray-300 focus:outline-teal-500 text-sm rounded-md p-2 w-full"
      />
    </div>
  ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F4FCF9] px-4 py-3 flex flex-row-reverse md:justify-normal justify-center sm:px-6 gap-4">
                  <Button
  label={confirmLabel}
  onClick={() => {
    console.log('Modal Input Values:', inputValues);
    onConfirm(inputValues);
  }}
  textColor="white"
  bgColor="red-600"
  width="small"
  focusColor="gray-100"
  hoverColor="green-600"
  borderColor="green-700"
/>
                    <Button
                      label={cancelLabel}
                      onClick={() => setOpenModal(false)}
                      textColor="gray-900"
                      bgColor="white"
                      width="small"
                      focusColor="gray-100"
                      hoverColor="green-600"
                      borderColor="green-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
