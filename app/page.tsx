import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch("http://localhost:4000/recipes", {
    headers: { "Content-Type": "application/json" },
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await response.json();
}

async function Home() {
  const recipes = await getRecipes();
  return (
    <div className="grid grid-cols-3 gap-4">
      {recipes.map((recipe: Recipe, idx: number) => {
        return (
          <Card key={idx}>
            <CardHeader className="flex flex-row gap-2 min-h-[15%]">
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt="@shadcn" />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="min-h-[35%]">
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between min-h-[10%]">
              <Button size="sm">View Recipe</Button>
              {recipe.vegan && (
                <Badge variant="secondary" className="text-green-400">
                  Vegan
                </Badge>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
export default Home;
