import { useEffect, useRef, useState } from "react";

interface InputWrapperProps {
  inputName: string;
  maxLengthCaracters: number;
}

function InputWrapper(props: InputWrapperProps) {
  const [isFocused, setIsFocused] = useState<boolean | string>(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      setIsFocused(true);
      inputRef.current.focus();
    }
  }

  return (
    <div
      className="relative h-14 border-[2px] focus-within:border-twitterBlue group rounded mb-6"
      onClick={handleClick}
    >
      <label htmlFor={`user${props.inputName}Input`} className="sr-only">
        {props.inputName}
      </label>
      <input
        type="text"
        name={`user${props.inputName}Input`}
        ref={inputRef}
        className="w-full h-5 outline-none mt-6 px-2 text-sm"
        maxLength={props.maxLengthCaracters}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => {
          if (inputRef.current) {
            if (inputRef.current?.value.length > 0) {
              setIsFocused("hasCaracters");
              return;
            }
          }

          setIsFocused(false);
        }}
      />
      <span
        data-isfocused={isFocused}
        className="absolute opacity-70 px-2 pt-4 left-0 transition-all duration-200 data-[isfocused=true]:text-twitterBlue data-[isfocused=true]:text-xs data-[isfocused=true]:pt-2 data-[isfocused=hasCaracters]:text-xs data-[isfocused=hasCaracters]:pt-2"
      >
        {props.inputName}
      </span>
      <p className="hidden absolute right-0 top-0 px-2 pt-2 text-xs group-focus-within:block">
        {inputValue.length} / {props.maxLengthCaracters}
      </p>
    </div>
  );
}

export function Step1() {
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
    <div>
      <div>
        <InputWrapper inputName="Name" maxLengthCaracters={50} />
        <InputWrapper inputName="Login" maxLengthCaracters={20} />
      </div>

      <div>
        <p>Data de nascimento</p>
        <p>
          Isso não será exibido publicamente. Confirme sua própria idade, mesmo
          se esta conta for de empresa, de um animal de estimação ou outros.
        </p>

        <div>
          <select
            id="month"
            onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
          >
            {months.map((month) => {
              return (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              );
            })}
          </select>

          <select id="days">
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select
            id="years"
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
