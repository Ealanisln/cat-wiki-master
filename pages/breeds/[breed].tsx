import { useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import breedApi from "../../api/breedApi";
import { BreedResponse } from "../../lib/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  breeds: BreedResponse[]; 
}

const BreedPage:NextPage<Props> = ( { breeds } ) => {

  console.log(breeds);

}


export default BreedPage