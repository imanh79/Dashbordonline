import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const PageDetails = (props) => {
  const { img, fullName, role, email, salaryExpectation, about } = props;
  console.log(img);
  return (
    <div>
      <div>
        <div className='px-4 sm:px-0 flex justify-between items-center carddark'>
          <div>
            <h3 className='text-base font-semibold leading-7 '>Applicant Information</h3>
            <p className='mt-1 max-w-2xl text-sm leading-6 '>Personal details and application.</p>
          </div>
          <img className='imgpage' src={img} alt='' />
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 '>Full name</dt>
              <dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>{fullName}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 '>Application for</dt>
              <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>{role}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 '>Email address</dt>
              <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>{email}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 '>Salary expectation</dt>
              <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>{salaryExpectation}</dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 '>About</dt>
              <dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>{about}</dd>
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
                        <span className='truncate font-medium'>resume_back_end_developer.pdf</span>
                        <span className='flex-shrink-0 text-gray-400'>2.4mb</span>
                      </div>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
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
                      <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
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
    </div>
  );
};

export default PageDetails;
