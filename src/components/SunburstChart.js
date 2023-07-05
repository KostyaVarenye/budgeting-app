// import React, { useRef, useEffect } from "react";
// import * as d3 from "d3";

// const SunburstChart = ({ data, height, width }) => {
//   const ref = useRef();

//   useEffect(() => {
//     d3.select(ref.current).selectAll("*").remove();

//     const svg = d3
//       .select(ref.current)
//       .attr("height", height)
//       .attr("width", width)
//       .append("g")
//       .attr("transform", `translate(${width / 2}, ${height / 2})`);

//     const radius = Math.min(width, height) / 2;

//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     const partition = d3.partition().size([2 * Math.PI, radius]);

//     const root = d3
//       .hierarchy(data)
//       .sum((d) => d.value)
//       .sort((a, b) => b.value - a.value);

//     partition(root);

//     const arc = d3.arc()
//       .startAngle((d) => d.x0)
//       .endAngle((d) => d.x1)
//       .innerRadius((d) => d.y0)
//       .outerRadius((d) => d.y1);

//     const nodes = svg
//       .selectAll("g")
//       .data(root.descendants())
//       .enter()
//       .append("g");

//     nodes.append("path")
//       .attr("display", (d) => (d.depth ? null : "none"))
//       .attr("d", arc)
//       .style("fill", (d) => color((d.children ? d : d.parent).value))
//       .style("stroke", "#fff")
//       .style("stroke-width", "2");

//     nodes
//       .append("text")
//       .attr("transform", function(d) {
//         return `translate(${arc.centroid(d)}) rotate(${computeTextRotation(d)})`;
//       })
//       .attr("text-anchor", "middle")
//       .attr("alignment-baseline", "middle")
//       .style("fill", "black")
//       .text((d) => d.data.name);
//   }, [data, height, width]);

//   function computeTextRotation(d) {
//     const angle = ((d.x0 + d.x1) / Math.PI) * 90;
//     return angle < 180 ? angle - 90 : angle + 90;
//   }

//   return <svg ref={ref} />;
// };

// export default SunburstChart;
