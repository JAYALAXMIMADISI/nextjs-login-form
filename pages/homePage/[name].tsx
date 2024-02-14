import { useRouter } from "next/router";
import React from "react";


export default function HomePage() {
    const router = useRouter()
    console.log("check router",router)

    return (
        <>
          Hello {router?.query?.name}
        </>
    )
}