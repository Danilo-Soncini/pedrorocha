import { useState } from "react"
import styles from "./parceiros.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation, Pagination } from "swiper"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

interface ParceirosInterface {
  img: string
  link: string
}

export function Parceiros() {
  const [parceiros, setParceiros] = useState<ParceirosInterface[]>([
    {
      img: "/images/boldSnacksLogo.jpg",
      link: "https://www.instagram.com/boldsnacks/"
    },
    {
      img: "/images/odinFitLogo.jpg",
      link: "https://www.instagram.com/odinfit/"
    },
    {
      img: "/images/gravityFitnessLogo.jpg",
      link: "https://www.instagram.com/gravity.fitness/"
    },
    {
      img: "/images/aHeadSportsLogo.jpg",
      link: "https://www.instagram.com/aheadsports/"
    }
  ])

  return (
    <section className={styles.parceiros_section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.parceiros_major_content}>
              <h3>parceiros</h3>

              <Swiper
                navigation={{ nextEl: "#swiperParceiros-forward", prevEl: "#swiperParceiros-back" }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  }
                }}
                className="mySwiper"
              >
                {parceiros.map(({ img, link }, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={styles.card} key={i}>
                        <a href={link} target="_blank">
                          <img src={img} alt="" />
                        </a>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              <div className={styles.cotainer_buttons}>
                <button id="swiperParceiros-back" className={styles.back_swiper_button}>
                  <IoIosArrowDropleftCircle />
                </button>
                <button id="swiperParceiros-forward" className={styles.next_swiper_button}>
                  <IoIosArrowDroprightCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
