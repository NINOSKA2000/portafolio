import React from "react";

import ButtonLink from "./../../utils/buttonLink";
import { infoBlog } from "./data";

import { FormattedMessage, FormattedDate } from "react-intl";

const CajaBlog = () => {
  return (
    <>
      <div className="notes">
        {infoBlog.map((blog, ind) => (
          <div key={ind} className="card">
            <div className="card-header">
              <img
                src={blog.img}
                alt={`Notes sobre ${blog.alt}`}
                className="card__image"
              />
            </div>
            <div className="card_body">
              <span className="card_body-title"> {blog.title} </span>
              <div className="card_body-info">
                <span>
                  <FormattedDate value={blog.data} month="long" day="numeric" />
                </span>
                <span>|</span>
                <span>
                  <FormattedMessage id={blog.area} defaultMessage={blog.area} />
                </span>
              </div>
              <div className="card_body-descripcion">
								<FormattedMessage id={blog.description} defaultMessage={blog.description}  />
              </div>
            </div>
            <div className="card_footer">
              <ButtonLink text="blog-read" href={blog.url} target="_black" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CajaBlog;
