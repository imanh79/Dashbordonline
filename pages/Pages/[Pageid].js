import React, { useState } from "react";
import Header from "../../Component/Header/Header";

import { Grid, Col, Card } from "@tremor/react";
import Dashboard from "../../Component/dashboard/Dashboard";
import { useRouter } from "next/router";
import PageDetails from "./PageDetails";
import { userRows } from "../../Component/Data";
const Index = () => {
  const Route = useRouter();
  const newroute = Route.query.Pageid;
  const newusers = userRows[newroute - 1];
  console.log(newusers);
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
          <Grid numItems={1} numItemsSm={0} numItemsLg={2} className='gap-2 mt-3 card-pd'>
            <Col numColSpan={1} numColSpanLg={2} className='gap-2 mid'>
              <Card className='ring-0 carddark boxshadow'>
                <PageDetails {...newusers} />
              </Card>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </div>
  );
};

export default Index;

// export async function getStaticPaths() {
//   const res = await fetch("https://usersapi-chi.vercel.app/userRows/");
//   const userRows = await res.json();
//   const paths = userRows.map((user) => ({
//     params: { Pageid: user.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch("https://usersapi-chi.vercel.app/userRows");
//   const userRows = await res.json();
//   const Pageid = parseInt(params.Pageid, 10);
//   const newusers = userRows.find((user) => user.id === Pageid);
//   console.log(newusers);
//   return {
//     props: { user: userRows, newusers },
//   };
// }
