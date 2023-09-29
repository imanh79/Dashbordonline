import React from "react";

import { BadgeDelta, Card, Grid, DeltaType, Flex, Metric, ProgressBar, Text } from "@tremor/react";

type Kpi = {
  title: string;
  metric: string;
  progress: number;
  target: string;
  delta: string;
  deltaType: DeltaType;
};

const kpiData: Kpi[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
];

export default function KpiCardGrid() {
  return (
    <Grid numItemsLg={1} className=' gap-1'>
      {kpiData.map((item) => (
        <Card key={item.title} className='carddark boxshadow'>
          <Flex alignItems='start'>
            <div className='truncate'>
              <Text className='carddark'>{item.title}</Text>
              <Metric className='truncate carddark' style={{ color: "white" }}>
                {item.metric}
              </Metric>
            </div>
            <BadgeDelta className='' deltaType={item.deltaType}>
              {item.delta}
            </BadgeDelta>
          </Flex>
          <Flex className='mt-4 space-x-2'>
            <Text className='truncate '>{`${item.progress}% (${item.metric})`}</Text>
            <Text className=''>{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className='mt-2' />
        </Card>
      ))}
    </Grid>
  );
}
