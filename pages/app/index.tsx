import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../../components/Navigation/Navigation";
import { Container } from "../../components/Layout/Layout";
import { FeedbackForm } from "../../components/FeedbackForm";

const App: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>
          Big L Driving School | Driving Lessons North Shore, Auckland
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className="py-6">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
          Student Feedback
        </h1>
        <FeedbackForm />
      </Container>
    </div>
  );
};

export default App;
