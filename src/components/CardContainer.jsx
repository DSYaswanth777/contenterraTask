import React, { useEffect, useState } from "react";
import CardDetail from "./CardDetail";

function CardContainer() {
  const [redditData, setRedditData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setRedditData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCards = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return renderRedditData();
    }
  };

  const renderRedditData = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-left gap-3">
        {redditData &&
          redditData.data.children.map((child) => (
            <CardDetail key={child.data.id} data={child.data} />
          ))}
      </div>
    );
  };

  return (
    <div className="container py-5">
      {renderCards()}
    </div>
  );
}

export default CardContainer;
