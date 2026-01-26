import Hero from "../components/Hero";

import { Container } from "@mui/material";
export default function Home() {
  return (
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        <Hero />
      </Container>
  );
}
