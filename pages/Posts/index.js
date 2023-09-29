import { Card, Col, Grid } from "@tremor/react";
import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import Dashboard from "../../Component/dashboard/Dashboard";

const userRows = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullName: "Eula Hubbard",
    email: "kewez@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "online",
    about:
      "She's an avid traveler who finds her greatest joys exploring the world. Her main interests include hiking, photography, and trying out exotic cuisines.",
    role: "Front-end Developer",
    salaryExpectation: "$90,000",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Stella Manning",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "online",
    about:
      "She's a fitness guru who's always on the move. You can find her at the gym, practicing yoga, or taking part in marathons. Health and wellness are her top priorities.",
    role: "Business Relations",
    salaryExpectation: "$85,000",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullName: "Mary Greer",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "online",
    about:
      "She's a tech enthusiast with a passion for coding and building software. In her free time, she enjoys gaming and staying up-to-date with the latest tech trends.",
    role: "Co-Founder / CEO",
    salaryExpectation: "$120,000",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

    fullName: "Mildred Williamson",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "online",
    about:
      "He's a music aficionado with an extensive vinyl collection. When he's not spinning records, he's probably attending live concerts or exploring underground music scenes.",
    role: "Director of Product",
    salaryExpectation: "$110,000",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Jose Gross",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "online",
    about:
      "She's a dedicated environmentalist on a mission to save the planet. You'll often find him participating in tree-planting events and advocating for sustainability.",
    role: "Designer",
    salaryExpectation: "$95,000",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Jeremy Sharp",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "offline",
    about:
      "He's a dedicated software engineer, driven by a profound fascination with technology and its limitless possibilities. His days are spent coding, problem-solving, and architecting innovative solutions. In his leisure hours, he dives into the virtual realm, gaming and keeping abreast of the latest tech trends. His curiosity knows no bounds.",
    role: "Front-end Developer",
    salaryExpectation: "$95,000",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",

    fullName: "Christina Lowe",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "online",
    about:
      "She's a fitness enthusiast with an unquenchable thirst for physical challenges. Her mornings begin with yoga and her evenings with marathon training. Health and wellness are the cornerstones of her life, and she encourages those around her to embrace an active lifestyle.",
    role: "Business Relations",
    salaryExpectation: "$90,000",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Garrett Dean",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "offline",
    about:
      "He's a music aficionado who lives and breathes the art of sound. His collection of vinyl records is a testament to his devotion to music. When he's not immersed in his record collection, he's attending live concerts, exploring underground music scenes, and discovering new sonic landscapes.",
    role: "Director of Product",
    salaryExpectation: "$110,000",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fullName: "Leah Parsons",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "online",
    about:
      "She's a dedicated animal lover who finds joy in caring for our furry companions. Volunteering at the local animal shelter is a regular part of her life, and she dreams of establishing a haven where every animal can find love and shelter.",
    role: "Designer",
    salaryExpectation: "$95,000",
  },
  {
    id: 10,

    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Elnora Reid",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "offline",
    about:
      "She's a fashion maven who has an innate sense of style. Her closet is a curated collection of timeless pieces and high fashion. Whether she's attending fashion shows, curating her wardrobe, or sharing her fashion finds with her followers, she's always setting trends.",
    role: "Designer",
    salaryExpectation: "$95,000",
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Gertrude Dunn",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
    status: "online",
    about:
      "He's a cinephile with a profound appreciation for the art of filmmaking. His weekends are dedicated to the silver screen, whether at the cinema or hosting movie nights with friends. He believes that every film is a journey into a new world, and he's always ready for the next cinematic adventure.",
    role: "Director of Product",
    salaryExpectation: "$110,000",
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Mark Williams",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "offline",
    about:
      "He's an aspiring artist, deeply connected to the world of creativity and self-expression. His days are filled with sketching, painting, and bringing his imaginative visions to life on canvas. When he's not in his studio, he explores art galleries and draws inspiration from the world around him.",
    role: "Designer",
    salaryExpectation: "$95,000",
  },
  {
    id: 13,

    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Charlotte Cruz",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "offline",
    about:
      "He's a dedicated scientist, committed to unraveling the mysteries of the universe. Her laboratory is her sanctuary, where he conducts experiments and pushes the boundaries of human knowledge. In his free time, he enjoys stargazing and contemplating the wonders of the cosmos.",
    role: "Co-Founder / CEO",
    salaryExpectation: "$120,000",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    fullName: "Sara Harper",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "online",
    about:
      "She's a humanitarian at heart, dedicated to making the world a better place. Her life revolves around volunteering for various causes, from humanitarian aid missions to local community projects. She envisions a future where compassion and kindness are the guiding principles of society.",
    role: "Business Relations",
    salaryExpectation: "$85,000",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    fullName: "Eric Griffin",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: "online",
    about:
      "He's an adrenaline junkie, always in pursuit of the next thrill. Whether he's scaling mountains, skydiving, or tackling extreme sports, he lives for the rush of adventure. When he's not seeking adrenaline highs, he enjoys sharing his experiences and inspiring others to push their limits.",
    role: "Front-end Developer",
    salaryExpectation: "$90,000",
  },
];

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
          <Grid numItems={1} numItemsSm={0} numItemsLg={2} className='gap-2 mt-3 mt0'>
            <Col numColSpan={1} numColSpanLg={2} className='gap-2 mid'>
              <Card className='carddark boxshadow'>
                <div class='mx-auto text-center md:max-w-xl lg:max-w-3xl'>
                  <h3 class='mb-6 text-3xl font-bold'>Testimonials</h3>
                  <p class='mb-6 pb-2 md:mb-6 md:pb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam eum porro a pariatur veniam.
                  </p>
                </div>
                <section className='text-neutral-700 dark:text-neutral-300 '>
                  <div className='grid gap-6 text-center md:grid-cols-3'>
                    {currentTestimonials.map((testimonial, index) => (
                      <div key={testimonial.id}>
                        <div
                          className={`block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 cardstyle`}
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
                              ? "font-bold bg-blue-600 text-white"
                              : "pghver carddark border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
                          }`}
                          href='#!'
                          onClick={() => setCurrentPage(index)}
                        >
                          {index + 1}
                          {index === currentPage && (
                            <span className='-m-px h-px w-px absolute overflow-hidden bg-blue-600 text-white'>
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
