import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BiPlay } from 'react-icons/bi'
const apikey = 'e07883cf02edb74816eaa8a2306ca43c'
const imgUrl = 'https://image.tmdb.org/t/p/original'

const url = 'https://api.themoviedb.org/3'
const uncoming = 'upcoming'
const popular = 'popular'
const topRated = 'top_rated'
const latest = 'now_playing'
const Home = () => {
  const Card = ({ img }) => <img className='card' src={img} alt='cover' />
  const Row = ({ title, arr = [] }) => (
    <div className='row'>
      <h2>{title}</h2>

      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  )

  const [upcomingMovies, setUpcoming] = useState([])
  const [popularMovies, setpopular] = useState([])
  const [topRatedMovies, settopRated] = useState([])
  const [latestMovies, setlatest] = useState([])
  useEffect(() => {
    const fetchComing = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${uncoming}?api_key=${apikey}`)

      setUpcoming(results)
    }

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}&page=3`)

      setpopular(results)
    }
    const fetchTop = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)

      settopRated(results)
    }
    const fetchLatest = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${latest}?api_key=${apikey}`)

      setlatest(results)
    }

    fetchComing()
    fetchPopular()
    fetchTop()
    fetchLatest()
  }, [])

  return (
    <>
      <section className='home'>
        <div
          className='banner'
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
              : 'rgb(30, 30, 30)',
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
          {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

          <button type='button'>
            Play <BiPlay />
          </button>
        </div>
        <Row title={'Popular on Netflix'} arr={popularMovies} />
        <Row title={'UpComing Movies'} arr={upcomingMovies} />
        <Row title={'Tv Show'} arr={topRatedMovies} />
        <Row title={'Movies'} arr={latestMovies} />
      </section>
    </>
  )
}

export default Home
