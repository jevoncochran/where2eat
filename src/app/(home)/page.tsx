"use client";

import { useContext, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CategoryList from "@/components/home/CategoryList";
import RangeSelect from "@/components/home/RangeSelect";
import RatingSelect from "@/components/home/RatingSelect";
import GoogleMapView from "@/components/home/GoogleMapView";
import * as globalApi from "@/shared/globalApi";
import { UserLocationContext } from "@/context/UserLocationContext";
import BusinessList from "@/components/home/BusinessList";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  const [category, setCategory] = useState<string>("");
  const [radius, setRadius] = useState<number>(2500);
  const [businesses, setBusinesses] = useState<any[]>([]);

  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const onCategoryChange = (category: string) => {
    setCategory(category);
  };

  const onRadiusChange = (radius: number) => {
    setRadius(radius);
  };

  const getGooglePlace = () => {
    globalApi
      .getGooglePlace(category, radius, userLocation.lat, userLocation.lng)
      .then((res) => {
        console.log(res.data.product.results);
        setBusinesses(res.data.product.results);
      });
  };

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen p-3">
      <div className="">
        <CategoryList onCategoryChange={onCategoryChange} />
        <RangeSelect onRadiusChange={onRadiusChange} />
        <RatingSelect />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
        <div className="relative md:absolute w-[90%] md:w-[71%] ml-6 md:m1-10 bottom-36 md:bottom-3">
          <BusinessList businesses={businesses} />
        </div>
      </div>
    </div>
  );
}
