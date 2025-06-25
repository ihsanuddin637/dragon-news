import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center">
      <button className="btn btn-primary">Latest</button>
      <Marquee>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          delectus, eligendi, autem quis quasi doloribus iure labore deleniti
          unde rerum quaerat non quidem optio reprehenderit recusandae eveniet
          veritatis obcaecati, possimus deserunt corporis porro? Vel consectetur
          autem ex totam sint. Temporibus quo, natus unde repellat omnis quidem
          eum enim facere veritatis.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
