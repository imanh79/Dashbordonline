import React, { useState } from "react";
import { Card } from "@tremor/react";
import Link from "next/link";
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
const Search = () => {
  const [cardHeight, setCardHeight] = useState("19rem");
  const [name, setName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    const maxHeight = 547;
    const newHeight = parseInt(cardHeight) + 545;
    if (!isExpanded && newHeight >= maxHeight) {
      setIsExpanded(true);
      setCardHeight(`${maxHeight}px`);
    } else if (isExpanded) {
      setIsExpanded(false);
      setCardHeight("303px");
    } else {
      setCardHeight(`${newHeight}px`);
    }
  };
  const iconClassName = isExpanded
    ? "fa-solid fa-chevron-up arrowdown"
    : "fa-solid fa-chevron-down arrowdown";
  const filterPeople = () => {
    return userRows.filter((person) => {
      const nameMatched = person.fullName.toLowerCase().includes(name.toLowerCase());
      if (selectedRole === "") {
        return nameMatched;
      } else {
        return nameMatched && person.role === selectedRole;
      }
    });
  };
  const filteredPeople = filterPeople();

  return (
    <div>
      <Card className='cardsearch mt-6 carddark boxshadow' style={{ height: cardHeight }}>
        <div className='flex justify-between items-center borderin pb-3 '>
          <div className='flex justify-center items-center'>
            <i className='fa-regular fa-magnifying-glass'></i>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Search'
              className='inpt carddark'
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className='selct carddark'
          >
            <option value=''>All Roles</option>
            <option value='Co-Founder / CEO'>Co-Founder / CEO</option>
            <option value='Front-end Developer'>Front-end Developer</option>
            <option value='Director of Product'>Director of Product</option>
            <option value='Designer'>Designer</option>
          </select>
        </div>
        <ul role='list' className='divide-y divide-gray-100 '>
          {filteredPeople.map((person, index) => (
            <Link href={`Pages/${person.id}`} key={index}>
              <li
                key={index}
                className='sr-list flex w-full p-4 justify-between  gap-x-6 py-5 sr-list items-center'
                style={{
                  borderBottom:
                    index === filteredPeople.length - 1
                      ? "none"
                      : "1px solid rgb(209 210 214 / 49%)",
                }}
              >
                <div className='flex min-w-0 gap-x-4 items-end'>
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    className='h-10 rounded flex-none mr-3 bg-gray-50'
                    src={person.img}
                    alt=''
                  />
                  <div className='min-w-0 flex-auto  sr-list'>
                    <p className='text-sm font-semibold leading-6 sr-list'>{person.fullName}</p>
                    <p className='mt-1 truncate text-xs leading-5 sr-list gray'>{person.email}</p>
                  </div>
                </div>
                <div className=' shrink-0 sm:flex sm:flex-col sm:items-end  sr-list'>
                  <p className='text-sm leading-6  '>{person.role}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Card>
      <div className='text-center ch flex justify-center '>
        <i className={iconClassName} onClick={handleClick}></i>
      </div>
    </div>
  );
};

export default Search;
