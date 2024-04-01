import React from "react";
import mainbanner from "./../assets/main-banner.svg";
import slider from "./../assets/slider.svg";
import banner from "./../assets/banner.svg";
import jambImage from "./../assets/jamb.svg";
import waecImage from "./../assets/waec.svg";
import necoImage from "./../assets/neco.svg";
import nda from "./../assets/nda.svg";
import nabteb from "./../assets/nabteb.svg";
import nimasa from "./../assets/nimasa.svg";
import trcn from "./../assets/trcn.svg";
import unilag from "./../assets/unilag.svg";
import ui from "./../assets/ui.svg";
import lautech from "./../assets/lautech.svg";
import arrow from "./../assets/arrow.svg";

import {
  latestNews,
  otherExaminations,
  popularExaminations,
  resources,
} from "./../constants";

const Content = () => {
  return (
    <section className="flex flex-col mt-[110px] max-lg:p-10 max-md:p-5 lg:flex-row gap-5 lg:ml-[17%] lg:mr-[1%]">
      <div className="bg-white lg:w-[80%] p-4 h-fit lg:pb-32">
        <div className="flexStart gap-2 mb-5 ">
          <a href="/" className="cursor-pointer">
            <img
              src={arrow}
              width={25}
              height={40}
              alt="arrow"
              className="hidden lg:block"
            />
          </a>
          <h3 className="medium-24 text-black hidden lg:block">Education</h3>
        </div>
        <img
          src={mainbanner}
          width={100}
          height={400}
          alt="main-banner"
          className="w-full"
        />
        <div className="flexCenter mt-10">
          <img
            src={slider}
            width={100}
            height={400}
            alt="main-banner"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-7">
          <h3 className="medium-16 lg:medium-20 text-black">
            Popular examinations
          </h3>
          <div className="mt-14 flex flex-col gap-4 ">
            {popularExaminations.map((exam) => (
              <a href={exam.link}>
                <li
                  key={exam.id}
                  className="list-none flex flex-wrap gap-8 bg-gray-10 rounded-xl p-2 "
                >
                  <img
                    src={
                      exam.img === "jamb.svg"
                        ? jambImage
                        : exam.img === "waec.svg"
                        ? waecImage
                        : necoImage
                    }
                    alt={exam.acronomy}
                    width={60}
                    height={50}
                  />
                  <div>
                    <p className="lg:medium-24 medium-20">{exam.acronomy}</p>
                    <p className="lg:regular-20 regular-16">{exam.examBody}</p>
                  </div>
                </li>
              </a>
            ))}
          </div>
          <img
            src={banner}
            width={100}
            height={400}
            alt="ads-banner"
            className="cursor-pointer w-full mt-10"
          />
          <div className="mt-10">
            <h3 className="medium-16 lg:medium-20 text-black">
              Other examinations
            </h3>
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              {otherExaminations.map((exam) => (
                <li
                  key={exam.id}
                  className="list-none flexCenter flex-col text-center bg-gray-20 rounded-xl p-2"
                >
                  <img
                    src={
                      exam.img === "nda.svg"
                        ? nda
                        : exam.img === "nabteb.svg"
                        ? nabteb
                        : exam.img === "nimasa.svg"
                        ? nimasa
                        : trcn
                    }
                    alt={exam.acronomy}
                    width={55}
                    height={50}
                  />
                  <div>
                    <a href={exam.link}>
                      <p className="lg:medium-24 medium-20">{exam.acronomy}</p>
                      <p className="lg:regular-20 regular-16">
                        {exam.examBody}
                      </p>
                    </a>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white lg:w-[40%] h-min-[1000px] p-6  ">
        <h3 className="medium-16 lg:medium-20 text-black">Resources</h3>
        <div className="mt-6 flex flex-col gap-4">
          {resources.map((resource) => (
            <a href={resource.link} className="">
              <li
                key={resource.id}
                className="list-none flex justify-start items-center gap-5 bg-gray-10 rounded-xl p-2"
              >
                <img
                  src={
                    resource.img === "jamb.svg"
                      ? jambImage
                      : resource.img === "nda.svg"
                      ? nda
                      : resource.img === "ui.svg"
                      ? ui
                      : resource.img === "unilag.svg"
                      ? unilag
                      : lautech
                  }
                  alt={resource.acronomy}
                  width={40}
                  height={50}
                />
                <div>
                  <p className="regular-12 lg:regular-16">{resource.about}</p>
                </div>
              </li>
            </a>
          ))}
        </div>
        <h3 className="medium-16 lg:medium-20 text-black mt-5">Latest News</h3>
        <div className="mt-6 flex flex-col gap-4">
          {latestNews.map((news) => (
            <a href={news.link} className="">
              <li
                key={news.id}
                className="list-none flex gap-5 bg-gray-10 rounded-xl p-2 justify-start items-center "
              >
                <img
                  src={
                    news.img === "nda.svg"
                      ? nda
                      : news.img === "jamb.svg"
                      ? jambImage
                      : news.img === "waec.svg"
                      ? waecImage
                      : necoImage
                  }
                  alt={news.acronomy}
                  width={40}
                  height={50}
                />
                <div>
                  <p className="regular-12 lg:regular-16">{news.about}</p>
                </div>
              </li>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
