import { render } from "@testing-library/react";
import ChartComponent from "../components/ChartComponent";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null,
}));

test("renders chart on screen", async () => {
  const labels = ["HP", "ATK", "DEF", "SPD", "EXP"];
  const dataLabel = "Stat";
  const backgroundColor = [
    "rgba(221, 2, 2, 1)",
    "rgba(255, 159, 46, 1)",
    "rgba(46, 174, 255, 1)",
    "rgba(135, 135, 135, 1)",
    "rgba(0, 163, 18, 1)",
  ];

  const chartData = [1, 2, 3, 4, 5];

  const { container } = render(
    <ChartComponent
      data={chartData}
      labels={labels}
      dataLabel={dataLabel}
      backgroundColor={backgroundColor}
      borderColor={backgroundColor}
      displayLegend={false}
    />
  );

  expect(container).toBeTruthy();
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.getElementsByClassName("chart").length).toBe(1);
});
