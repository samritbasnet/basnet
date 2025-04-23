'use client';

import * as d3 from 'd3';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  value: number;
  category: string;
}

export default function AnimatedSkills() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const skills: Skill[] = [
    { name: 'React', value: 70, category: 'Frontend' },
    { name: 'JavaScript', value: 75, category: 'Frontend' },
    { name: 'HTML/CSS', value: 85, category: 'Frontend' },
    { name: 'Node.js', value: 75, category: 'Backend' },
    { name: 'Express', value: 80, category: 'Backend' },
    { name: 'MongoDB', value: 70, category: 'Backend' },
    { name: 'Git', value: 85, category: 'Tools' },
    { name: 'Docker', value: 70, category: 'Tools' },
    { name: 'AWS', value: 55, category: 'Tools' },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Set dimensions
    const width = 600;
    const height = 400;
    const margin = { top: 40, right: 20, bottom: 40, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('style', 'max-width: 100%; height: auto;');

    // Create container group
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);

    const yScale = d3
      .scaleBand()
      .domain(skills.map((d) => d.name))
      .range([0, innerHeight])
      .padding(0.2);

    // Color scale based on categories
    const colorScale = d3
      .scaleOrdinal()
      .domain(['Frontend', 'Backend'])
      .range(['#3b82f6', '#10b981', '#8b5cf6']);

    // Create and animate bars
    g.selectAll('.bar')
      .data(skills)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', (d) => yScale(d.name) || 0)
      .attr('height', yScale.bandwidth())
      .attr('x', 0)
      .attr('width', 0)
      .attr('fill', (d) => colorScale(d.category) as string)
      .attr('rx', 4)
      .attr('ry', 4)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .attr('width', (d) => xScale(d.value));

    // Add value labels
    g.selectAll('.value-label')
      .data(skills)
      .enter()
      .append('text')
      .attr('class', 'value-label')
      .attr('y', (d) => (yScale(d.name) || 0) + yScale.bandwidth() / 2)
      .attr('x', (d) => xScale(d.value) + 5)
      .attr('dy', '.35em')
      .attr('fill', theme === 'dark' ? '#fff' : '#333')
      .style('font-size', '12px')
      .style('opacity', 0)
      .text((d) => `${d.value}%`)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100 + 500)
      .style('opacity', 1);

    // Add y-axis
    const yAxis = g
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale).tickSize(0));

    // Style y-axis
    yAxis
      .selectAll('text')
      .attr('fill', theme === 'dark' ? '#fff' : '#333')
      .style('font-size', '12px');

    yAxis.select('.domain').remove();

    // Add x-axis grid lines
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickSize(-innerHeight)
          .tickFormat('' as any)
          .ticks(5)
      )
      .selectAll('line')
      .attr('stroke', theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)');

    // Remove x-axis domain and ticks
    g.select('.grid .domain').remove();
    g.selectAll('.grid .tick line').attr('stroke-dasharray', '2,2');

    // Add legend
    const legend = svg.append('g').attr('transform', `translate(${width - 150}, 10)`);

    const categories = ['Frontend', 'Backend'];

    categories.forEach((category, i) => {
      const legendRow = legend.append('g').attr('transform', `translate(0, ${i * 20})`);

      legendRow
        .append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', colorScale(category) as string)
        .attr('rx', 2)
        .attr('ry', 2);

      legendRow
        .append('text')
        .attr('x', 15)
        .attr('y', 10)
        .attr('fill', theme === 'dark' ? '#fff' : '#333')
        .style('font-size', '12px')
        .text(category);
    });
  }, [theme]);

  return (
    <div className="mt-8 overflow-x-auto">
      <svg ref={svgRef} className="mx-auto"></svg>
    </div>
  );
}
