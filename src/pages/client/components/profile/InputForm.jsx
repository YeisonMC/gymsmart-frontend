import React from "react";

const InputForm = (props) => {
  const { readOnly, ...otherProps } = props;

  return (
    <input
      className={`w-full border-[1.9px] border-[#d9d9da] h-12 px-2 rounded-lg focus:border-[#AEAFB2] focus:outline-none focus:ring-[#AEAFB2] font-normal transition duration-500 ${
        readOnly ? "cursor-not-allowed" : ""
      }`}
      {...otherProps}
    />
  );
};

export default InputForm;

// import React from "react";

// const InputForm = (props) => {
//   return (
//     // border-[#AEAFB2]
//     <input
//       className="w-full border-[1.9px] border-[#d9d9da] h-12 px-2 rounded-lg focus:border-[#AEAFB2] focus:outline-none focus:ring-[#AEAFB2] font-normal transition duration-500"
//       {...props}
//     ></input>
//   );
// };

// export default InputForm;
