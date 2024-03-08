import { useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "./components/FormRow";
import { countAge } from "./utils/countAge";

export default function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  // for validation
  const currentYears = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const age = countAge(data);

    setDay(age.day);
    setMonth(age.month);
    setYear(age.year);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-off-white">
      <div className="w-screen max-w-xs px-4 py-8 md:p-12 mx-auto bg-white rounded-br-[128px] rounded-t-2xl md:max-w-2xl rounded-bl-2xl">
        <div className="relative w-full mb-12 md:mb-8">
          <form
            className="flex justify-between md:justify-normal md:gap-8 mb-14 md:mb-8"
            onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="DAY" error={errors?.date?.message}>
              <input
                type="number"
                id="date"
                className={`input ${
                  errors.date ? "border-light-red" : "border-light-grey"
                }`}
                placeholder="DD"
                {...register("date", {
                  required: "This field is required",
                  max: { value: 31, message: "Must be a valid date" },
                  min: { value: 1, message: "Must be a valid date" },
                })}
              />
            </FormRow>

            <FormRow label="MONTH" error={errors?.month?.message}>
              <input
                type="number"
                id="month"
                className={`input ${
                  errors.month ? "border-light-red" : "border-light-grey"
                }`}
                placeholder="MM"
                {...register("month", {
                  required: "This field is required",
                  max: { value: 12, message: "Must be a valid month" },
                  min: { value: 1, message: "Must be a valid day" },
                })}
              />
            </FormRow>

            <FormRow label="YEARS" error={errors?.year?.message}>
              <input
                type="number"
                id="year"
                className={`input ${
                  errors.year ? "border-light-red" : "border-light-grey"
                }`}
                placeholder="YYYY"
                {...register("year", {
                  required: "This field is required",
                  max: {
                    value: currentYears,
                    message: "Must be in the past",
                  },
                  min: { value: 1, message: "Must be a valid year" },
                })}
              />
            </FormRow>

            <button className="absolute bottom-[-24px] md:bottom-[-32px] text-white rounded-full right-1/2 translate-x-1/2 md:right-4 bg-purple p-4 hover:bg-off-black">
              <img
                src="images/icon-arrow.svg"
                alt="button"
                className="w-6 md:w-8"
              />
            </button>
          </form>
          <div className="w-full h-[1px] mb-5 bg-light-grey"></div>
        </div>

        <div className="text-5xl italic font-bold md:text-7xl text-off-black">
          <p>
            <span className="text-purple">{year <= 0 ? "--" : year}</span> years
          </p>
          <p>
            <span className="text-purple">{month <= 0 ? "--" : month}</span>{" "}
            month
          </p>
          <p>
            <span className="text-purple">{day <= 0 ? "--" : day}</span> days
          </p>
        </div>
      </div>
    </div>
  );
}
