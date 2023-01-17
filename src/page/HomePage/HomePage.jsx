import Hero from 'components/Hero';
import Categories from 'components/Categories/Categories';
import RegistrationBaner from 'components/RegistrationBaner.js/RregistrationBaner';
import Header from '../../components/Header';
import {
  Container,
  Main,
  SectionActors,
  SectionBaner,
  SectionCategories,
  SectionFooter,
  SectionHero,
  SectionRegistrationBaner,
  SectionTrendingMovies,
  SectionTrendingTVShows,
} from './HomePage.styled';
import Actors from 'components/Actors/Actors';
import Baner from 'components/Baner/Baner';
import Footter from 'components/Footter/Footter';
import TrendingTVShows from 'components/TrendingTVShows';
import TrendingMovies from 'components/TrendingMovies';

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />

        <Main>
          <SectionHero>
            <Hero />
          </SectionHero>
          <SectionTrendingTVShows>
            <TrendingTVShows>Trending TV Shows</TrendingTVShows>
          </SectionTrendingTVShows>
          <SectionTrendingMovies>
            <TrendingMovies>Trending Movies</TrendingMovies>
          </SectionTrendingMovies>
          <SectionCategories>
            <Categories>Popular Genres</Categories>
          </SectionCategories>
          <SectionActors>
            <Actors>Popular Actors & Directors</Actors>
          </SectionActors>
          <SectionBaner>
            <Baner />
          </SectionBaner>

          <SectionRegistrationBaner>
            <RegistrationBaner />
          </SectionRegistrationBaner>
        </Main>
        <SectionFooter><Footter/></SectionFooter>
        
      </Container>
    </>
  );
};

export default HomePage;
