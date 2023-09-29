import React, { useState } from "react";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import AreaCharts from "../charts/chart";
import KpiCard1 from "../Kpi/kpiCard1";
import KpiCard2 from "../Kpi/kpiCard2";
import KpiCard3 from "../Kpi/kpiCard3";
import Circle from "../circle/circle";
import Search from "../searchbar/search";

import Header from "../Header/Header";
import Dashboard from "../dashboard/Dashboard";
const Gridcol = () => {
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
          <Grid numItems={1} numItemsSm={0} numItemsLg={3} className='gap-2 mt-3 mt0 '>
            <Col numColSpan={1} numColSpanLg={2} className='gap-2 mid'>
              <AreaCharts />
              <Search />
            </Col>
            <Col>
              <KpiCard1 />
              <KpiCard3 />
              <Circle />
            </Col>
          </Grid>
        </Col>
      </Grid>
    </div>
  );
};

export default Gridcol;
