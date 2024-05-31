// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, modalTitle }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto border w-1/2 shadow-lg rounded-md bg-white ">
                <div className="modal-header p-3 border-b-2">
                    <div className="modal-title">
                    <h2 className="text-lg font-semibold">{modalTitle}</h2>
                    </div>
                    <button className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-3xl hover:text-red-600 active:ring" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body p-3">
                    <p className="mt-2">This is the modal content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus nam itaque! Eligendi non aut alias ipsa laboriosam aliquid corporis ut. Sint non numquam sapiente unde fuga qui aspernatur perferendis sequi quisquam. Porro animi sunt deserunt quaerat aliquid sequi dignissimos at tenetur! Architecto, debitis impedit animi voluptate culpa velit blanditiis?</p>
                </div>
                <div className="modal-footer grid mt-10 p-3 border-t-2">
                    <button
                        className="justify-self-end bg-red-500 text-white px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
