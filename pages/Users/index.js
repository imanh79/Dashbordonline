import { Card, Col, Grid } from "@tremor/react";
import React, { useState } from "react";
import Dashboard from "../../Component/dashboard/Dashboard";
import Header from "../../Component/Header/Header";
import Link from "next/link";
import { userRows } from "../../Component/Data";

const Index = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setvalue] = useState("");
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  const filter = userRows.filter((person) => {
    return person.fullName.toLowerCase().includes(value.toLowerCase());
  });
  const changehandler = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div>
      <Header toggleHidden={toggleHidden} />
      <Grid numItemsLg={5} numItemsSm={4}>
        <Grid numItemsSm={1}>
          <Dashboard isHidden={isHidden} />
        </Grid>
        <Col numColSpan={3} numColSpanLg={4}>
          <Grid numItems={1} numItemsSm={0} numItemsLg={2} className='gap-2 mt-3 mt0 card-pd'>
            <Col numColSpan={1} numColSpanLg={2} className='gap-2 mid'>
              <Card className='boxshadow carddark'>
                <i className='fa-regular fa-magnifying-glass'></i>
                <input
                  value={value}
                  onChange={changehandler}
                  type='text'
                  placeholder='Search Name'
                  className='carddark'
                />

                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                      <table className='min-w-full text-left text-sm font-normal'>
                        <thead className='border-b font-medium dark:border-neutral-500'>
                          <tr>
                            <th scope='col' className='px-6 py-4 table-t'>
                              Id
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              FullName
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              Avatar
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              Email
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              Role
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              status
                            </th>
                            <th scope='col' className='px-6 py-4 table-t'>
                              Salary expectation
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filter.map((item) => (
                            <tr className='border-b dark:border-neutral-500 list-s' key={item.id}>
                              <td className='whitespace-nowrap px-6 py-4 font-medium'>{item.id}</td>
                              <td className='whitespace-nowrap px-6 py-4'>{item.fullName}</td>
                              <td className='whitespace-nowrap px-6 py-4'>
                                <img className='imgpage2' src={item.img} alt={item.fullName} />
                              </td>
                              <td className='whitespace-nowrap px-6 py-4'>{item.email}</td>
                              <td className='whitespace-nowrap px-6 py-4'>{item.role}</td>
                              <td className='whitespace-nowrap px-6 py-4'>{item.status}</td>
                              <td className='whitespace-nowrap px-6 py-4'>
                                {item.salaryExpectation}
                              </td>
                              <td className='whitespace-nowrap px-2 py-4'>
                                <Link href={`/Pages/${item.id}`}>
                                  <i className='fa-solid fa-eye'></i>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </div>
  );
};

export default Index;
