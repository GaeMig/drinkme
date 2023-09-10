import React, { useEffect, useState } from "react";
import useTitle from "../useTitle";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import { useGlobalContext } from "../context";
const HomeScreen = () => {
  const {
    data,
    isLoading,
    isError,
    searchCocktail,
    query,
    count,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useTitle("HOME");
  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">DRINK ME</h2>
              <h4>Tutti i cocktail del mondo a portata di click</h4>
            </div>
          </div>
          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={350}
            />
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Cerca il tuo drink</h4>
              </label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{count} risultati</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
      <div className="cita">
      <p><cite className="citazione">
      "Il mio problema con il resto del mondo è che tutti hanno bevuto qualche drink meno di me"
      </cite>
       </p>
      <p><cite className="citaName">(cit. Humphrey Bogart)</cite></p>
      </div>
    </>
  );
};

export default HomeScreen;