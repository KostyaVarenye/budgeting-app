import * as d3 from "d3";
import { useEffect, useRef } from "react";
const Barchart = ({ data, cWidth, cHeight }) => {
  const ref = useRef();

  useEffect(() => {
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = cWidth - margin.left - margin.right,
      height = cHeight - margin.top - margin.bottom;

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.category))
      .padding(0.2);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear().domain([0, 600]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Budget bars
    svg
      .selectAll("budgetBar")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.category))
      .attr("y", (d) => y(d.budget))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.budget))
      .attr("fill", "green");

    // Expenditure bars
    svg
      .selectAll("expenditureBar")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.category))
      .attr("y", (d) => y(d.budget)) // start red bar where green bar starts
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.expenditure)) // height is just the expenditure
      .attr("fill", "red");
  });

  return <svg width={cWidth} height={cHeight} ref={ref} />;
};

export default Barchart;
