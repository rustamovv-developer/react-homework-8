import React, { memo, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import img from "../../assets/images/user.png";
import "../../sass/product.scss";

function Product() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && (
        <div id="loading">
          <span class="loader"></span>
        </div>
      )}
      <div className="container">
        <div className="col">
          <div className="col__left">
            <div className="col__left__box">
              <img src={img} alt="img" className="col__img" />
              <div className="col__images">
                <img src={img} alt="img" className="col__images__img" />
                <img src={img} alt="img" className="col__images__img" />
                <img src={img} alt="img" className="col__images__img" />
              </div>
            </div>
            <h2 className="col__left__title">{data?.data?.name}</h2>
            <p className="col__left__text">{data?.data?.username}</p>
          </div>
          <div className="col__center">
            <h2 className="col__center__title">Address</h2>
            <h3 className="col__center__h3">{data?.data?.address?.street}</h3>
            <h3 className="col__center__h3">{data?.data?.address?.suite}</h3>
            <h3 className="col__center__h3">{data?.data?.address?.city}</h3>
            <h2 className="col__center__title">Phone</h2>
            <a className="col__center__link" href="tel:+998887041980">
              {data?.data?.phone}
            </a>
          </div>
          <div className="col__right">
            <h2 className="col__center__title">Company</h2>
            <h3 className="col__center__h3">{data?.data?.company?.name}</h3>
            <h3 className="col__center__h3">
              {data?.data?.company?.catchPhrase}
            </h3>
            <h3 className="col__center__h3">{data?.data?.company?.bs}</h3>
            <h2 className="col__center__title">Email</h2>
            <a className="col__center__link" href="tel:+998887041980">
              {data?.data?.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return <></>;
}

export default memo(Product);
