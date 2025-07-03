## PoC: Client-Side Layouts & Server-Side Charts with Next.js
This Proof of Concept (PoC) demonstrates a hybrid rendering approach using Next.js to efficiently deliver web applications. The core idea is to leverage Client-Side Rendering (CSR) for application layouts, providing a highly interactive and fluid user experience, while utilizing Server-Side Rendering (SSR) for data-intensive components like charts to ensure fast initial load times and improved SEO.

## Technologies Used
Next.js: The React framework for building full-stack web applications.

Shadcn/ui: A collection of re-usable components built with Radix UI and Tailwind CSS.

Recharts: A composable charting library built on React components.

## Recharts, chart.js or Nivo ? 
Recharts stood out due to its native React component architecture and SVG rendering. This perfectly aligns with Next.js's component-based approach and ensures crisp, scalable graphics, which is crucial for server-side pre-rendering. While Chart.js offers excellent Canvas-based performance and Nivo provides advanced animations, Recharts' strong composability and seamless integration with the React ecosystem made it the ideal fit for demonstrating this hybrid rendering strategy. It allows us to easily build complex charts declaratively and ensures a smooth server-side rendering process for optimal performance and SEO.

## Key Features
Hybrid Rendering: Layouts are rendered on the client-side for dynamic interactions, while charts are pre-rendered on the server-side to optimize performance and initial content display.

Optimized Performance: By rendering charts on the server, we reduce the amount of JavaScript shipped to the client initially, leading to faster Time To Interactive (TTI).

Improved SEO: Server-rendered charts ensure that search engines can crawl and index the data presented in the graphs, which is beneficial for SEO.

Modern UI Components: Integration with Shadcn/ui provides a robust and aesthetically pleasing set of UI components, enhancing the overall user experience.

Data Visualization: Recharts is used for creating highly customizable and responsive charts, allowing for clear and effective data representation.


