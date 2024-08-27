import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { validationSchema } from "../../schema/validationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <form
      className="space-y-4 md:space-y-6 w-4/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl id="email">
        <FormLabel>User Name</FormLabel>

        <input
          className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out"
          id="text"
          type="text"
          placeholder="Enter your Username"
          {...register("UserName")}
        />
        {errors.UserName && (
          <p className="text-red-500">{errors.UserName.message}</p>
        )}
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email address</FormLabel>

        <input
          className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out"
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </FormControl>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out pr-10"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A9.96 9.96 0 0012 19c-4.477 0-8.268-2.943-9.542-7 .73-2.392-2.462-4.309-4.543-5.376M9.53 9.53a3 3 0 004.94 4.94m1.44 1.44A9.96 9.96 0 0012 19c-4.477 0-8.268-2.943-9.542-7 .73-2.392-2.462-4.309-4.543-5.376m6.664 6.664a9.96 9.96 0 01-2.217 3.387"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.73 2.392-2.462 4.309-4.543 5.376M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.042 4.042A9.953 9.953 0 0112 19c-4.477 0-8.268-2.943-9.542-7-.73-2.392-2.462-4.309-4.543-5.376"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition duration-200 ease-in-out pr-10"
            id="confirm password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A9.96 9.96 0 0012 19c-4.477 0-8.268-2.943-9.542-7 .73-2.392-2.462-4.309-4.543-5.376M9.53 9.53a3 3 0 004.94 4.94m1.44 1.44A9.96 9.96 0 0012 19c-4.477 0-8.268-2.943-9.542-7 .73-2.392-2.462-4.309-4.543-5.376m6.664 6.664a9.96 9.96 0 01-2.217 3.387"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.73 2.392-2.462 4.309-4.543 5.376M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.042 4.042A9.953 9.953 0 0112 19c-4.477 0-8.268-2.943-9.542-7-.73-2.392-2.462-4.309-4.543-5.376"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Stack spacing={2} className="justify-center">
        <a
          className="w-full flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer dark:text-teal-500 "
          type="submit"
        >
          <button
            className="px-4 py-3 w-full text-center text-gray-600 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign up"}
          </button>
        </a>
      </Stack>

      <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <Link
          to="/auth/signin"
          className="font-medium text-teal-600 hover:underline dark:text-teal-500"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
