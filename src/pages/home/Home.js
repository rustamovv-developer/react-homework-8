import React, { memo } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";
import "../../sass/home.scss";

function Home() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  let users = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <Link to={`/users/${el.id}`}>
        <img src={user} alt="wolf" className="card__img" />
      </Link>
      <h2 className="card__title">{el.name}</h2>
      <p className="card__text">{el.username}</p>
    </div>
  ));
  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div className="container">
        <div className="box">{users}</div>
      </div>
    </>
  );
}

export default memo(Home);
