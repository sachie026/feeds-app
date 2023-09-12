import React from "react";
import Close from "../../../assets/icons/close";

interface Props {
  children: JSX.Element;
  onClose: () => void;
}

function Modal({ children, onClose }: Props) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 w-full h-full bg-dark-black bg-opacity-75 "></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-opacity-70 ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-opacity-70">
          <div className="relative bg-opacity-10 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              className="absolute right-0 bg-dark-black rounded-full p-2 mr-4 mt-4 cursor-pointer"
              onClick={onClose}
            >
              <Close classes="stroke-white" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
