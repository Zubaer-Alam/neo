import { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";

export default function Modal1({ openModal, setOpenModal }) {
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
            onClick={(e_) => e_.stopPropagation()}
            className={`${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            }`}
          >
            <div class="inset-0 z-10 w-screen">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <TiWarningOutline class="h-6 w-6 text-red-600" />
                      </div>
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          class="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Delete Product
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            Are you sure you want to delete this product?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setOpenModal(false)}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${
            openModal ? "visible opacity-100" : "invisible opacity-0"
          } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${
              openModal
                ? "scale-1 opacity-1 duration-300"
                : "scale-0 opacity-0 duration-150"
            }`}
          >
            <h1 className="mb-2 text-2xl font-semibold">
              Welcome to NavigateUI!
            </h1>
            <p className="mb-5 text-sm opacity-80">
              Elevate your React projects with beautifully crafted components
              designed for TailwindCSS.
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setOpenModal(false)}
                className="me-2 rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white"
              >
                Ok
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
