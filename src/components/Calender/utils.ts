import dayjs from "dayjs";

export const generateData = (year = dayjs().year(), month = dayjs().month()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
    const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

    const arrayOfDate = [];

    for (let i = 0; i < firstDateOfMonth.day(); i++)
        arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) });

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++)
        arrayOfDate.push({
            currentMonth: true,
            date: firstDateOfMonth.date(i),
            today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        });

    const remaining = 42 - arrayOfDate.length;
    for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++)
        arrayOfDate.push({ currentMonth: false, date: lastDateOfMonth.date(i) });

    return arrayOfDate;
}

export const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
}

export const currentDate = dayjs();