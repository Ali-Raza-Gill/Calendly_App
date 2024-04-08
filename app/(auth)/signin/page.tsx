// "use client";
// import Button from "@/app/(components)/Button";
// import axios from "axios";
// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import router from "next/router";
// import { useState } from "react";
// // import toast from "react-hot-toast";

// export default function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     // e.preventDefault();
//     // setLoading(true);
//     // try {
//     //   await signIn("credentials", {
//     //     email,
//     //     password,
//     //     redirect: false,
//     //   });
//     //   toast.success("User login successfully");
//     //   const res = await fetch("api/register", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //       name,
//     //       email,
//     //       password,
//     //     }),
//     //   });
//     //   console.log(res);
//     // } catch (error: any) {
//     //   console.log("error", error);
//     //   toast.error(error?.response?.data);
//     // } finally {
//     //   setLoading(false);
//     // }
//   };
//   return (
//     <div className="bg-white">
//       <div className="text-white-500 text-md flex justify-center items-center gap-10 font-bold p-10 ">
//         <Link href="/" className="hover:underline shadow-2xl">
//           Login
//         </Link>
//       </div>
//       <div className="  flex justify-center">
//         <div className="bg-white shadow-2xl rounded px-8 pb-8 mb-4 w-[600px]">
//           <div className="mb-4 mt-10">
//             <label
//               className="block text-gray-700 text-sm  mb-2"
//               htmlFor="email"
//             >
//               Email Address
//             </label>
//             <input
//               className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
//               id="email"
//               type="text"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm  mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
//             Error message
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
//               type="button"
//             >
//               Sign In
//             </button>

//             <Link href="/signup">
//               <Button name="Sign Up" onClick={() => {}} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//====================================

"use client";
import Button from "@/app/(components)/Button";
import InputField from "@/app/(components)/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import SignupLogo from "../../(asset)/images/auth_images/signup_logo_calendly.png";
import Openeye from "../../(asset)/images/auth_images/Open-eye.png";
import Closeeye from "../../(asset)/images/auth_images/Closed-eye.png";
import toast from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("api/register", {
        email,
        password,
      });
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      toast.success("User created successfully");
      router.push("/");
      // const res = await fetch("api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     password,
      //   }),
      // });
      console.log(res);
    } catch (error: any) {
      // console.log("error", error);
      toast.error(error?.response?.data);
    }
  };
  // const submitfrom = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //       }),
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="bg-white mt-10">
      <div className=" text-md flex justify-center items-center">
        <Image
          src={SignupLogo}
          width={100}
          height={50}
          alt="logo"
          className="h-14 w-40 mb-5"
        />
      </div>
      <div className="flex justify-center items-center">
        <form className="bg-white shadow-black shadow-md rounded-lg px-8 pb-4 mb-3 w-[440px] ">
          <div className="text-white-500 text-md flex justify-center items-center font-bold mt-8">
            <Link href="" className="hover:underline text-center">
              Sign In with Calendly for <br /> free
            </Link>
          </div>
          <div className=" pt-6">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="email"
            >
              Enter Email
            </label>

            <InputField
              name="email"
              value={email}
              id="email"
              placeholder=" Email"
              type="email"
              className="shadow-xl h-12 border rounded w-full py-2 px-3 text-gray-700 "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled={false}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 mt-3"
              htmlFor="password"
            >
              Enter Password
            </label>
            <InputField
              name="password"
              value={password}
              id="password"
              placeholder=" Password"
              type={!isPasswordVisible ? "password" : "text"}
              className="shadow-xl h-12 border rounded w-full py-2 px-3 text-gray-700 "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              disabled={false}
            />
            <div
              onClick={togglePasswordVisibility}
              className="cursor-pointer relative left-[330px] bottom-11 inline-flex  justify-end rounded-full p-2"
            >
              <Image
                src={isPasswordVisible ? Openeye : Closeeye}
                alt="eye"
                className="h-6 w-6"
              />
            </div>
          </div>

          <div className="mb-4 ">
            <div className="text-red-500 mx-5 text-sm">
              Use a few words, avoid common phrases <br />
              No need for symbols, digits, or uppercase letters
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
              {error}
            </div>
          )}
          <div className="flex items-center justify-center mt-4">
            <Button
              name="Sign In "
              onClick={() => {
                handleSubmit;
              }}
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="text-sm text-center">
              Don't have an account?
              <span className="text-blue-700 hover:underline hover: cursor-pointer">
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
