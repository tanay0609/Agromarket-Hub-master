import React from 'react'
import IconButton from './IconButton'

const ConfirmationModal = ({ modalData }) => {
    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="w-11/12 max-w-[350px] rounded-lg border-[2px] border-richblue-300 bg-richblue-400 p-6">
                <p className="text-2xl font-bold text-white">
                    {modalData?.text1}
                </p>

                <p className="mt-3 mb-5 leading-6 text-richblack-200">
                    {modalData?.text2}
                </p>

                <div className="flex items-center gap-x-4">
                    <IconButton
                        onclick={modalData?.btn1Handler}
                        text={modalData?.btn1Text}
                    />

                    <button onClick={modalData?.btn2Handler}
                        className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
                    >
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
