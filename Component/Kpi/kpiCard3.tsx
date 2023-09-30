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
    title: "Customers",
    metric: "1,072",
    progress: 53.6,
    target: "2,000",
    delta: "10.1%",
    deltaType: "moderateDecrease",
  },
];

export default function KpiCard3() {
  return (
    <Grid numItemsLg={1} className='mt-4 gap-6'>
      {kpiData.map((item) => (
        <Card key={item.title} className='boxshadow carddark'>
          <Flex alignItems='start'>
            <div className='truncate'>
              <Text className='carddark'>{item.title}</Text>
              <Metric className='truncate carddark hoverblue'>$ {item.metric}</Metric>
            </div>
            <BadgeDelta deltaType={item.deltaType} className=''>
              {item.delta}
            </BadgeDelta>
          </Flex>
          <Flex className='mt-4 space-x-2 '>
            <Text className='truncate '>{`${item.progress}% (${item.metric})`}</Text>
            <Text className=''>{item.target}</Text>
          </Flex>
          <ProgressBar value={item.progress} className='mt-2' />
        </Card>
      ))}
    </Grid>
  );
}
