import { CaretDown } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputWrapper } from "./InputWrapper";
import { UserInfo } from "../../context/UserContext";

interface Step1Props {
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  userInfo: UserInfo;
}

export function Step1({ setUserInfo, userInfo }: Step1Props) {
  const [days, setDays] = useState<number[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  const months = Array.from({ length: 12 }, (_, index) => {
    const month = new Date(0, index).toLocaleString("en-US", { month: "long" });
    return { value: index + 1, label: month };
  });

  function getDaysInMonth(month: number, year: number): number[] {
    const data = new Date(year, Number(month), 0);
    const arrDays = Array.from({ length: data.getDate() }, (_, index) => {
      return index + 1;
    });

    return arrDays;
  }

  function getYears() {
    const currentYear = new Date().getFullYear();
    const endYear = currentYear - 120;

    const arrYears = Array.from(
      { length: currentYear - endYear + 1 },
      (_, index) => {
        return currentYear - index;
      }
    );

    return arrYears;
  }

  useEffect(() => {
    setDays(getDaysInMonth(selectedMonth, selectedYear));
    setYears(getYears());
  }, [selectedMonth, selectedYear]);

  return (
    <div className="pb-6">
      <div>
        <InputWrapper
          inputName="Name"
          maxLengthCaracters={50}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
        <InputWrapper
          inputName="Login"
          maxLengthCaracters={20}
          setUserInfo={setUserInfo}
          userInfo={userInfo}
        />
      </div>

      <div>
        <p className="font-bold leading-5 mb-2">Data de nascimento</p>
        <p className="text-mute text-sm mb-5">
          Isso não será exibido publicamente. Confirme sua própria idade, mesmo
          se esta conta for de empresa, de um animal de estimação ou outros.
        </p>

        <div className="flex gap-3">
          <div className="group flex-grow-[1]">
            <div className="relative rounded outline outline-[1px] outline-[#cfd9de] group-focus-within:outline-twitterBlue">
              <label htmlFor="month" className="selectLabel">
                Month
              </label>

              <select
                id="month"
                onChange={(e) => {
                  setSelectedMonth(parseInt(e.target.value, 10));
                  setUserInfo({
                    ...userInfo,
                    birthdayDate: {
                      ...userInfo.birthdayDate,
                      month: Number(e.target.value),
                    },
                  });
                }}
                className="selectSignup"
              >
                <option value="" hidden></option>
                {months.map((month) => {
                  return (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  );
                })}
              </select>

              <CaretDown
                size={18}
                className="absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none group-focus-within:text-twitterBlue sm:hidden"
              />
            </div>
          </div>

          <div className="group flex-1">
            <div className="relative rounded outline outline-[1px] outline-[#cfd9de] group-focus-within:outline-twitterBlue">
              <label htmlFor="days" className="selectLabel absolute">
                Day
              </label>

              <select
                id="days"
                className="selectSignup"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    birthdayDate: {
                      ...userInfo.birthdayDate,
                      day: Number(e.target.value),
                    },
                  });
                }}
              >
                <option value="" hidden></option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <CaretDown
                size={18}
                className="absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none group-focus-within:text-twitterBlue sm:hidden"
              />
            </div>
          </div>

          <div className="group flex-1">
            <div className="relative rounded outline outline-[1px] outline-[#cfd9de] group-focus-within:outline-twitterBlue">
              <label htmlFor="years" className="selectLabel">
                Year
              </label>

              <select
                id="years"
                onChange={(e) => {
                  setSelectedYear(Number(e.target.value))
                  setUserInfo({
                    ...userInfo,
                    birthdayDate: {
                      ...userInfo.birthdayDate,
                      year: Number(e.target.value),
                    },
                  });
                }}
                className="selectSignup"
              >
                <option value="" hidden></option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <CaretDown
                size={18}
                className="absolute top-[50%] -translate-y-[50%] right-3 pointer-events-none group-focus-within:text-twitterBlue sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
