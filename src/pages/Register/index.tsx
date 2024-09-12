import image from "@/assets/images/login-img.jpg";
import Container from "@/components/Container";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ContentWrapper, ErrorMessage, Form, FormGroup, ImageWrapper, OptionWrapper, Section } from "./style";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { message } = useSelector((state: RootStateType) => state.auth);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string; name: string }>();

  useFetchStatus({
    module: "auth",
    reset: resetStatus,
    actions: {
      success: () => {
        toast.success(message);
        navigate(`/login?email=${getValues("email")}`);
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
      <Section>
        <Container className="flex justify-between gap-[125px]">
          <ImageWrapper>
            <img src={image} alt="" />
          </ImageWrapper>
          <ContentWrapper>
            <HeadingTitle children="Register" className="w-full text-center lg:pl-3 lg:text-left" />
            <HeadingDesc children="Welcome back you've been missed!" className="mt-2 w-full text-center lg:pl-3 lg:text-left" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
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
                <ErrorMessage children={errors.name?.message} />
              </FormGroup>
              <FormGroup>
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
                <ErrorMessage children={errors.email?.message} />
              </FormGroup>
              <FormGroup>
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
                <ErrorMessage children={errors.password?.message} />
              </FormGroup>
              <button
                className={clsx(
                  "ml-[2px] mt-[30px] min-h-[58px] w-full min-w-[248px] pb-4 pl-[37px] pr-[38px] pt-[13px] shadow-[0px_17px_22px_0px_#ffedf6]",
                  "button hover:shadow",
                )}
              >
                Register
              </button>
              <OptionWrapper>
                <span>Have an account?</span>
                <Link children="Login here." to="/login" className="block transition-colors hover:text-pink-600" />
              </OptionWrapper>
            </Form>
          </ContentWrapper>
        </Container>
      </Section>
    </>
  );
};

export default Register;
