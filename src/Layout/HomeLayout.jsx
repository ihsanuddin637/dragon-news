import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import NavBar from "../Components/NavBar/NavBar";
import LatestNews from "../Components/LatestNews/LatestNews";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json()
);

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
        <aside className="col-span-3 sticky top-0 h-fit">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <LeftAside categoryPromise={categoryPromise}></LeftAside>
          </Suspense>
        </aside>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
