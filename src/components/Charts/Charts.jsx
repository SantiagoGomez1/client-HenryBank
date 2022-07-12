import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";

export default function Charts() {
  return (
    <Chart
      style={{ height: 200, width: 360 }}
      data={[
        { x: 1655064110321, y: 27504.645441386823 },
        { x: 1655067698154, y: 27417.844669521008 },
        { x: 1655071228278, y: 27430.930462051212 },
        { x: 1655074908432, y: 27081.503690661604 },
        { x: 1655078511495, y: 26767.269173221313 },
        { x: 1655082159148, y: 26389.12501208166 },
        { x: 1655085770694, y: 25828.020775605466 },
      ]}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 1655064110321, max: 1655085770694 }}
      yDomain={{ min: 25828.020775605466, max: 28000 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{
          labels: { formatter: (v) => v.toFixed(2), label: { color: "white" } },
        }}
      />
      <HorizontalAxis
        tickCount={5}
        theme={{
          labels: {
            formatter: (v) => v.toFixed(2),
            label: {
              color: "white",
            },
          },
        }}
      />
      <Area
        theme={{
          gradient: {
            from: { color: "#ffa502" },
            to: { color: "#ffa502", opacity: 0.4 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: "#ffa502", width: 5 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}

const styles = StyleSheet.create({});
