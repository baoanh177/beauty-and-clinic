import image from "@/assets/images/login-img.jpg";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingTitle from "@/components/HeadingTitle";
import useFetchStatus from "@/hooks/useFetchStatus";
import { RootStateType } from "@/services/reducers";
import { AppDispatch } from "@/services/store";
import { resetStatus } from "@/services/store/auth/auth.slice";
import { register as registerAccount } from "@/services/store/auth/auth.thunk";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { status, message } = useSelector((state: RootStateType) => state.auth);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string, name: string }>();

  useFetchStatus({
    module: "auth",
    reset: resetStatus,
    actions: {
      success: () => {
        toast.success(message)
        navigate(`/login?email=${getValues("email")}`)
      },
      error: {
        message,
      },
    },
  });

  const onSubmit = (data: { email: string; password: string; name: string }) => {
    dispatch(registerAccount({ body: data }));
  };

  return (
    <>
      <section className="container !mt-[100px] flex justify-between gap-[125px]">
        <figure className="absolute inset-0 -z-10 max-w-[500px] shrink-0 opacity-10 lg:static lg:-translate-y-14 lg:translate-x-0 lg:opacity-100">
          <img src={image} alt="" />
        </figure>
        <article className="flex w-full flex-col items-center">
          <HeadingTitle children="Register" className="w-full text-center lg:pl-3 lg:text-left" />
          <HeadingDesc children="Welcome back you've been missed!" className="mt-2 w-full text-center lg:pl-3 lg:text-left" />
          <form action="" className="mt-10 flex w-full max-w-[500px] flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col gap-1">
              <input
                type="text"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  minLength: { value: 2, message: "Name must have at least 2 characters" },
                })}
                placeholder="Please enter your name..."
                className={clsx(
                  "box-border block h-[61px] w-full rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
                  "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
                )}
              />
              <span className="text-sm text-red-500">{errors.name?.message}</span>
            </div>
            <div className="flex w-full flex-col gap-1">
              <input
                type="text"
                {...register("email", {
                  required: { value: true, message: "Please enter your email" },
                  pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Email invalid" },
                })}
                placeholder="Please enter your email..."
                className={clsx(
                  "box-border block h-[61px] w-full rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
                  "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
                )}
              />
              <span className="text-sm text-red-500">{errors.email?.message}</span>
            </div>
            <div className="flex w-full flex-col gap-1">
              <input
                type="password"
                {...register("password", {
                  required: { value: true, message: "Please enter your password" },
                  minLength: { value: 6, message: "Password must have at least 6 characters" },
                })}
                placeholder="Please enter your password..."
                className={clsx(
                  "placeholder:-translate-y-[1.9px] placeholder:translate-x-[3.2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
                  "box-border block h-[61px] w-full rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
                )}
              />
              <span className="text-sm text-red-500">{errors.password?.message}</span>
            </div>
            <button
              className={clsx(
                "ml-[2px] mt-[30px] min-h-[58px] w-full min-w-[248px] pb-4 pl-[37px] pr-[38px] pt-[13px] shadow-[0px_17px_22px_0px_#ffedf6]",
                "button hover:shadow",
              )}
            >
              Login
            </button>
            <div className="flex flex-wrap justify-end gap-1">
              <span>Have an account?</span>
              <Link children="Login here." to="/login" className="block transition-colors hover:text-pink-600" />
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default Register;
