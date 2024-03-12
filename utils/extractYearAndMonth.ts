export const extractYearAndMonth = (activeMonth: string) => {
  // 형식 : '2024-03'
  const [year, month] = activeMonth.split("-");

  return {
    year,
    month,
  };
};
