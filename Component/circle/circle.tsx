import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "Italy",
    sales: 2400,
  },
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Circle() {
  return (
    <Card className='max-w-lg outline-none mt-4 carddark boxshadow '>
      <Title className='carddark'>Sales</Title>
      <DonutChart
        className='mt-6 outline-none circlech carddark'
        data={cities}
        category='sales'
        index='name'
        valueFormatter={valueFormatter}
        colors={["rose", "violet", "indigo", "cyan", "amber"]}
      />

      <ul className='flex justify-between items-center mt-2 px-4 flex-wrap flex-col '>
        <li className='marks'>New York</li>
        <li className='marks'>London</li>
        <li className='marks'>Hong Kong</li>
        <li className='marks'>Italy</li>
      </ul>
    </Card>
  );
}
