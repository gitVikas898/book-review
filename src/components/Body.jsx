import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Search from "./Search";
import { Card } from "./Card";
const Body = () => {
  return (
    <div className="grid gap-6 place-items-center">
        <div className="w-full">
            <Search></Search>
        </div>
      <div>
          <Carousel>
            <CarouselContent className="p-8">
              <CarouselItem className="flex items-center justify-center basis-1/4"><div className="h-32 w-32 border-purpleColor border-2 border-solid hover:scale-110 transition-all ease-in"></div></CarouselItem>
              <CarouselItem className="flex items-center justify-center basis-1/4"><div className="h-32 w-32 border-purpleColor border-2 border-solid hover:scale-110 transition-all ease-in"></div></CarouselItem>
              <CarouselItem className="flex items-center justify-center basis-1/4"><div className="h-32 w-32 border-purpleColor border-2 border-solid hover:scale-110 transition-all ease-in"></div></CarouselItem>
              <CarouselItem className="flex items-center justify-center basis-1/4"><div className="h-32 w-32 border-purpleColor border-2 border-solid hover:scale-110 transition-all ease-in"></div></CarouselItem>
              <CarouselItem className="flex items-center justify-center basis-1/4"><div className="h-32 w-32 border-purpleColor border-2 border-solid hover:scale-110 transition-all ease-in"></div></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </div>
      <div className="grid grid-cols-3 gap-8 border border-solid border-rose-500 p-8">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
      </div>
    </div>
  );
};

export default Body;
