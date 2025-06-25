import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const CategoryNews = () => {
  const { id } = useParams();
  const convertedId = parseInt(id);
  const data = useLoaderData();
  const [categoryNews, SetCategoryNews] = useState([]);

  useEffect(() => {
    if (convertedId === 0) {
      SetCategoryNews(data);
      return;
    } else if (convertedId === 1) {
      const filternews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      SetCategoryNews(filternews);
    } else {
      const filterNews = data.filter(
        (news) => news.category_id === convertedId
      );
      SetCategoryNews(filterNews);
    }
  }, [data, convertedId]);
  return (
    <div>
      <h1>Dragon News Home {categoryNews.length}</h1>
      <div>
        {categoryNews.map((card) => (
          <CategoryCard key={card.id} card={card}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
