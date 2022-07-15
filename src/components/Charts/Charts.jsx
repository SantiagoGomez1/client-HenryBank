import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import { useDispatch, useSelector } from "react-redux";
import { pricesCharts } from "../../redux/actions";

export default function Charts({ id }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.logIn.token);
  const chart = useSelector((state) => state.charts);

  useEffect(() => {
    dispatch(pricesCharts(id, token));
  }, []);

  //Refactorizacion para poder hacer el grafico
  let arrayChart = [];
  for (let i = 0; i < chart.length; i++) {
    arrayChart.push({ x: i, y: chart[i] });
  }
  return (
    <View>
      {chart.length ? (
        <Chart
          style={{ height: 200, width: 360 }}
          data={arrayChart}
          padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
          xDomain={{ min: 0, max: 30 }}
          yDomain={{ min: 0, max: id === "bitcoin" ? 28000 : 5000 }}
        >
          <VerticalAxis
            tickCount={11}
            theme={{
              labels: {
                formatter: (v) => v.toFixed(2),
                label: { color: "white" },
              },
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
                from: { color: "#00A6C2" },
                to: { color: "#00A6C2", opacity: 0.4 },
              },
            }}
          />
          <Line
            theme={{
              stroke: { color: "#02CBED", width: 5 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
