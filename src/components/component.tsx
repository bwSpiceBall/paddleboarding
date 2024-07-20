import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="flex w-full h-[80vh]">
      <div className="w-2/3 h-full">
        <img
          src="/placeholder.svg"
          alt="Paddleboarding Spot Map"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/3 h-full p-6 overflow-auto">
        <div className="grid gap-4">
          <div className="font-bold text-2xl">Paddleboarding Spots</div>
          <div className="flex gap-4 overflow-x-auto">
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 1"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Lake Tahoe</div>
                <p className="text-muted-foreground">
                  Serene waters and stunning mountain views.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 2"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Puget Sound</div>
                <p className="text-muted-foreground">
                  Explore the serene waters of the Pacific Northwest.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 3"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Miami Beach</div>
                <p className="text-muted-foreground">
                  Paddle along the iconic South Florida coastline.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-4 overflow-x-auto">
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 4"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Oahu, Hawaii</div>
                <p className="text-muted-foreground">
                  Paddle through the crystal-clear waters of the Pacific.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 5"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Lake Minnetonka</div>
                <p className="text-muted-foreground">
                  Explore the serene lakes of the Midwest.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 w-[300px]">
              <CardContent className="flex flex-col gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Spot 6"
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="font-medium text-lg">Biscayne Bay</div>
                <p className="text-muted-foreground">
                  Paddle through the crystal-clear waters of South Florida.
                </p>
                <Button size="sm">Choose</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
