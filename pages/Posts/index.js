import { Card, Col, Grid } from "@tremor/react";
import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Dashboard from "../../Component/dashboard/Dashboard";
import { userRows } from "../../Component/Data";

const Index = () => {
  const itemsPerPage = 3;
  const cardColors = ["bg-[#9d789b]", "bg-[#7a81a8]", "bg-[#6d5b98]"];

  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = userRows.slice(startIndex, endIndex);

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(userRows.length / itemsPerPage);
  const [isHidden, setIsHidden] = useState(true);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
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
              <Card className='carddark boxshadow'>
                <div className='mx-auto text-center md:max-w-xl lg:max-w-3xl'>
                  <h3 className='mb-6 text-3xl font-bold'>Testimonials</h3>
                  <p className='mb-6 pb-2 md:mb-6 md:pb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam eum porro a pariatur veniam.
                  </p>
                </div>
                <section className='text-neutral-700 dark:text-neutral-300 '>
                  <div className='grid gap-6 text-center md:grid-cols-3 '>
                    {currentTestimonials.map((testimonial, index) => (
                      <div key={testimonial.id}>
                        <div
                          className={`block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 cardstyle2 `}
                          style={{ height: "480px", overflow: "hidden" }}
                        >
                          <div
                            className={`h-28 overflow-hidden rounded-t-lg ${cardColors[index]} bg-opacity-75`}
                          ></div>
                          <div className='mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800'>
                            <img
                              src={testimonial.img}
                              alt={testimonial.fullName}
                              className='imgS'
                            />
                          </div>
                          <div className='p-6'>
                            <h4 className='mb-4 text-2xl font-semibold'>{testimonial.fullName}</h4>
                            <hr />
                            <p className='mt-4'>{testimonial.about}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <nav className='pagination'>
                  <ul className='list-none flex space-x-2 justify-center mt-8 '>
                    {Array.from({ length: pageCount }).map((_, index) => (
                      <li key={index}>
                        <a
                          className={`px-2 py-1 rounded text-center transition-all ${
                            index === currentPage
                              ? "font-bold bg-[#756fde] text-white"
                              : "pghver carddark border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                          }`}
                          href='#!'
                          onClick={() => setCurrentPage(index)}
                        >
                          {index + 1}
                          {index === currentPage && (
                            <span className='-m-px h-px w-px absolute overflow-hidden bg-[#756fde] text-white'>
                              (current)
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Card>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </div>
  );
};

export default Index;
