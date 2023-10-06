import React, { useState } from "react";
import GridLayout from "../../Component/Grid/GridLayout";
import Header from "../../Component/Header/Header";
import { PaperClipIcon } from "@heroicons/react/20/solid";

import { Grid, Col, Card } from "@tremor/react";
import Dashboard from "../../Component/dashboard/Dashboard";


const Index = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div>
      <Header toggleHidden={toggleHidden} />
      <Grid numItemsLg={5} numItemsSm={4}>
        <Grid numItemsSm={0}>
          <Dashboard isHidden={isHidden} />
        </Grid>
        <Col numColSpan={3} numColSpanLg={4}>
          <Grid numItems={1} numItemsSm={0} numItemsLg={2} className='gap-2 mt-3 mt0 card-pd'>
            <Col numColSpan={1} numColSpanLg={2} className='gap-2 mid'>
              <Card className='boxshadow carddark'>
                <div>
                  <div className='px-4 sm:px-0 flex justify-between items-center carddark'>
                    <div>
                      <h3 className='text-base font-semibold leading-7 '>Applicant Information</h3>
                      <p className='mt-1 max-w-2xl text-sm leading-6 '>
                        Personal details and application.
                      </p>
                    </div>
                    <img
                      className='imgpage'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='mt-6 border-t '>
                    <dl className='divide-y divide-gray-100'>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>Full name</dt>
                        <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>
                          Eula Hubbard
                        </dd>
                      </div>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>Application for</dt>
                        <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>
                          Front-end Developer
                        </dd>
                      </div>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>Email address</dt>
                        <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>
                          kewez@gmail.com
                        </dd>
                      </div>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>Salary expectation</dt>
                        <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>$90,000</dd>
                      </div>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>About</dt>
                        <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>
                          She is an avid traveler who finds her greatest joys exploring the world.
                          Her main interests include hiking, photography, and trying out exotic
                          cuisines.
                        </dd>
                      </div>
                      <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 '>Attachments</dt>
                        <dd className='mt-2 text-sm  sm:col-span-2 sm:mt-0'>
                          <ul
                            role='list'
                            className='divide-y divide-gray-100 rounded-md border border-gray-200'
                          >
                            <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                              <div className='flex w-0 flex-1 items-center'>
                                <PaperClipIcon
                                  className='h-5 w-5 flex-shrink-0 text-gray-400'
                                  aria-hidden='true'
                                />
                                <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                                  <span className='truncate font-medium'>
                                    resume_back_end_developer.pdf
                                  </span>
                                  <span className='flex-shrink-0 text-gray-400'>2.4mb</span>
                                </div>
                              </div>
                              <div className='ml-4 flex-shrink-0'>
                                <a
                                  href='#'
                                  className='font-medium text-indigo-600 hover:text-indigo-500'
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                              <div className='flex w-0 flex-1 items-center'>
                                <PaperClipIcon
                                  className='h-5 w-5 flex-shrink-0 text-gray-400'
                                  aria-hidden='true'
                                />
                                <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                                  <span className='truncate font-medium'>
                                    coverletter_back_end_developer.pdf
                                  </span>
                                  <span className='flex-shrink-0 text-gray-400'>4.5mb</span>
                                </div>
                              </div>
                              <div className='ml-4 flex-shrink-0'>
                                <a
                                  href='#'
                                  className='font-medium text-indigo-600 hover:text-indigo-500'
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
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
