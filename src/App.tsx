import "../features.json";
import { Map, Marker } from "pigeon-maps";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

export default function App() {
  return (
    <div className="flex w-full h-[80vh]">
      <div className="w-2/3 h-full">
        {/* put map here */}
        <Map
          height={840}
          width={1000}
          defaultCenter={[54.02013940885722, -4.462459976422213]}
          defaultZoom={6}
        >
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
