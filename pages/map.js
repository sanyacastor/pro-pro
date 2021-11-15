import Map from "../components/map";
import "mapbox-gl/dist/mapbox-gl.css";

import { promises as fs } from "fs";
import path from "path";

export default function Home({ points }) {
  return <Map points={points} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/public/assets/points.json");
  const fileContents = await fs.readFile(filePath, "utf-8");

  return {
    props: {
      points: JSON.parse(fileContents),
    },
  };
}
