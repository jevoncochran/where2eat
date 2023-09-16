"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CategoryList from "@/components/home/CategoryList";
import RangeSelect from "@/components/home/RangeSelect";
import RatingSelect from "@/components/home/RatingSelect";
import GoogleMapView from "@/components/home/GoogleMapView";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen p-3">
      <div className="">
        <CategoryList />
        <RangeSelect />
        <RatingSelect />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  );
}
