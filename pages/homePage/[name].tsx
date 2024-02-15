import { IUsersData } from "@/interfaces/login";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


export default function HomePage() {
  const router = useRouter()
  console.log("check router", router)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((json) => setData(json))
  }, [])

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2">
        Hello {router?.query?.name} Welcome to Home Page!
      </Typography>
      <Box>
        {data?.map((item: IUsersData) => {
          return <Box padding={'10px'}>{item?.username}</Box>
        })}
      </Box>
    </Container>
  )
}