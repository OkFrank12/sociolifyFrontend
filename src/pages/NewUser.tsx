import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationSearching } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserAPI } from "../api/userAPI";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { onUserState } from "../global/globalState";

const NewUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const model = yup.object({
    name: yup.string().required(),
    email: yup.string().email().trim().lowercase().required(),
    location: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmission = handleSubmit(async (data: any) => {
    createUserAPI(data).then((res: any) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: "you have joined socioLify",
          timer: 3000,
          timerProgressBar: false,
        });
        navigate("/");
        dispatch(onUserState(res))
      } else {
        Swal.fire({
          icon: "error",
          text: "check your credentials",
          timer: 3000,
          timerProgressBar: false,
        });
      }
    });
  });
  return (
    <>
      <div className="w-full h-[calc(100vh-70px)] items-center  flex justify-center bg-emerald-100">
        <form
          onSubmit={onSubmission}
          className="w-[380px] smartPhone:w-[280px] flex items-center flex-col p-4 min-h-[500px] shadow-3xl rounded-md bg-white"
        >
          <p className="font-bold">
            Welcome to{" "}
            <span className="text-[30px]">
              <span className="text-emerald-400 text-[15px]">s</span>P
            </span>
          </p>
          {/** */}
          <div className="w-full shadow-md border p-2 rounded-md">
            <p className="text-[13px] text-slate-400">what is your name?</p>
            <div className="flex items-center">
              <FaUser className="text-emerald-400" />
              <input
                type="text"
                placeholder="@franklin"
                {...register("name")}
                className={`ml-2 ${
                  errors.name?.message
                    ? "outline-rose-400"
                    : "outline-emerald-400"
                } text-slate-400  pl-2 flex-1 h-[30px]`}
              />
            </div>
          </div>
          <br />
          <div className="w-full shadow-md border p-2 rounded-md">
            <p className="text-[13px] text-slate-400">so we can email you?</p>
            <div className="flex items-center">
              <AiOutlineMail className="text-emerald-400" />
              <input
                type="text"
                {...register("email")}
                placeholder="franklin@test.com"
                className={`ml-2 text-slate-400 ${
                  errors.email?.message
                    ? "outline-rose-400"
                    : "outline-emerald-400"
                } pl-2 flex-1 h-[30px]`}
              />
            </div>
          </div>
          <br />
          <div className="w-full shadow-md border p-2 rounded-md">
            <p className="text-[13px] text-slate-400">
              your location is vital?
            </p>
            <div className="flex items-center">
              <MdLocationSearching className="text-emerald-400" />
              <input
                {...register("location")}
                type="text"
                placeholder="Lagos, Nigeria"
                className={`ml-2 text-slate-400 ${
                  errors.location?.message
                    ? "outline-rose-400"
                    : "outline-emerald-400"
                } pl-2 flex-1 h-[30px]`}
              />
            </div>
          </div>
          <br />
          {/** */}
          <button
            type="submit"
            className="w-full h-[40px] capitalize text-white rounded-md bg-emerald-300 hover:bg-emerald-500 font-bold transition-all duration-300"
          >
            join
          </button>
          <br />
          <p className="text-slate-500 smartPhone:text-[9px] text-[12px] text-center">
            Sociopath is a dynamic social networking platform that fosters
            authentic connections. With an emphasis on meaningful interactions,
            it empowers users to share their passions, collaborate, and engage
            in vibrant communities.
          </p>
        </form>
      </div>
    </>
  );
};

export default NewUser;
