import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdCloudDownload } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./Home.css"

import angular from "../assets/images/angular.png";
import bootstrap from "../assets/images/Bootstrap.png";
import css from "../assets/images/css.png";
import express from "../assets/images/express.png";
import firebase from "../assets/images/firebase.png";
import git from "../assets/images/git.png";
import graphQL from "../assets/images/GraphQL.png";
import html from "../assets/images/HTML.png";
import javascript from "../assets/images/Javascript.png";
import laravel from "../assets/images/laravel.png";
import mongoDB from "../assets/images/MongoDB.png";
import mySQL from "../assets/images/MySQL.png";
import next from "../assets/images/next.png";
import node from "../assets/images/node.png";
import electron from "../assets/images/electron.png";
import php from "../assets/images/php.png";
import tailwind from "../assets/images/tailwind-dark.jpg";
import typescript from "../assets/images/typescript.png";
import vue from "../assets/images/vue.png";
import wordpress from "../assets/images/wordPress.png";
import joomla from "../assets/images/joomla.png";
import sql from "../assets/images/SQL.png";
import reactJs from "../assets/images/react-js.png";
import reactNative from "../assets/images/react-Native.png";
import dart1 from '../assets/images/dart1.png';
import flutter1 from '../assets/images/flutter1.png';
import profilePics from "../assets/images/profilepics.png";
import bongs from "../assets/images/bongs.png";
import dpanalytics from '../assets/images/dpAnalytics.png';
import dparagons from '../assets/images/dparagons.png';
import bongsMobile from '../assets/images/bongs_mobile.png';

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row mt-5 shadow' style={{ borderBottom: "5px solid #646CFF" }}>
        <div className='col-12 col-lg-5 mb-3 mb-lg-0' style={{ letterSpacing: "5px", color: "#747BFF" }}>
          First <b>Solve The Problem,</b> Then Write The Code
        </div>
        <div className='col-12 col-lg-7 d-flex justify-content-end align-items-center flex-wrap' style={{ color: "#AC6AB5" }}>
          <sup>
            <Link to='+2348163960501' className='mx-2 fs-3' > <FaPhoneVolume />  </Link>
            <Link to='mailto:olutayostephen@gmail.com' className='mx-2 fs-3'> <MdMarkEmailUnread /> <span></span>  </Link>
            <Link to='https://wa.me/8163960501' className='mx-2 fs-3'> <IoLogoWhatsapp /> </Link>
            <Link to='https://facebook.com/Iamolutayostephen' className='mx-2 fs-3'> <FaFacebook /> </Link>
            <Link to='https://www.linkedin.com/in/ayanrinde-olutayo-stephen' className='mx-2 fs-3'><FaLinkedin /></Link>
            <Link to='https://twitter.com/OlutayoStephen1' className='mx-2 fs-3'><FaSquareXTwitter /></Link>
            <Link to='https://github.com/olutayo333' className='mx-2 fs-3'><FaGithub /></Link>
          </sup>
        </div>
      </div>
      {/* PROFILE STATEMENT AND PROFILE PICTURE */}
      <div className='row justify-content-center shadow bg-dark text-white mx-1 my-1 animate__animated animate__zoomIn animate_slower'>
        <div className='col-12 col-lg-7 text-center mx-auto align-self-center justify-content-center align-items-center py-2'>
          <p className='text-center mx-auto fs-1'>Ayanrinde Olutayo Stephen</p>
          <p className='fs-3'> Software Engineer (Web, Mobile, Native)</p> <hr />
          <p className='fs-5 ps-2' style={{ textAlign: 'justify' }}>
            I am a skilled, resourceful, quality-focused & highly proficient Software Engineer with a broad knowledge of Web and Native Application Programming. I am proficient in both FrontEnd and BackEnd Development and adept with the latest technological trends in Software Development.  I have acquired years of professional experience working at reputable organizations across many sectors. I am deeply rooted in Project Implementation, Human Resource Technology, with progressive background in Customer Relationship Management. I am a Proficient Communicator, Team Builder/Player with Practical Problem Solving Techniques and innovatively oriented while finding a way of maintaining standard. Always ready to learn and easily adapted to constantly changing work environment, with the ability to Multi-Task.
          </p>
        </div>
        <div className='col-12 col-lg-5 d-flex justify-content-center'>
          <img className="img-fluid profile-img" src={profilePics} alt="" />
        </div>
      </div>
      <hr />

      {/* SKILLS */}
      <p className='fs-2 ms-2 ms-md-5 mt-3 mb-5 section-title'><b>My Skills</b></p>
      <div className='row justify-content-center px-1 px-md-3 mx-auto mb-2 animate__animated animate__pulse animate__delay-2s animate__infinite infinite animate__slower 5s'>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={reactJs} alt="" />
          <img className='w-50 mx-1 img-fluid' src={reactNative} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={angular} alt="" />
          <img className='w-50 mx-1 img-fluid' src={bootstrap} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={css} alt="" />
          <img className='w-50 mx-1 img-fluid' src={express} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={firebase} alt="" />
          <img className='w-50 mx-1 img-fluid' src={git} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={dart1} alt="" />
          <img className='w-50 mx-1 img-fluid' src={html} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={javascript} alt="" />
          <img className='w-50 mx-1 img-fluid' src={laravel} alt="" />
        </div>
      </div>
      <div className='row mb-3 d-flex justify-content-center px-1 px-md-3 mx-2 animate__animated animate__pulse animate__delay-4s animate__infinite infinite animate__slower 10s'>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={joomla} alt="" />
          <img className='w-50 mx-1 img-fluid' src={sql} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={mongoDB} alt="" />
          <img className='w-50 mx-1 img-fluid' src={mySQL} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={next} alt="" />
          <img className='w-50 mx-1 img-fluid' src={node} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={flutter1} alt="" />
          <img className='w-50 mx-1 img-fluid' src={php} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={tailwind} alt="" />
          <img className='w-50 mx-1 img-fluid' src={typescript} alt="" />
        </div>
        <div className='col-6 col-sm-4 col-md-2 d-flex mb-2'>
          <img className='w-50 mx-1 img-fluid' src={vue} alt="" />
          <img className='w-50 mx-1 img-fluid' src={wordpress} alt="" />
        </div>
      </div>
      <div className='row bg-white text-dark d-flex justify-content-center mx-1 mx-md-5 text-center my-5'>
        <div className='col-10 col-md-4 rounded shadow mb-3 mb-md-0'>
          <h1 style={{ letterSpacing: "20px" }}><b> 100+</b></h1>
          <h5 style={{ letterSpacing: "10px" }}><b>Projects Done </b></h5>
        </div>
      </div>
      <div className='row d-flex justify-content-center my-3'>
        <div className='col-12 text-center justify-content-center'>
          <a
            className='text-center justify-content-center'
            href='https://docs.google.com/document/d/14rsRJHg61w0CfOcSs6irjDN4I8UvifWY'
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{ color: "", letterSpacing: "15px" }}
              className='btn btn-lg w-100 w-md-75 shadow btn-dark text-center justify-content-center'
            >
              <p className='justify-content-center text-center pt-1 animate__animated animate__flash animate__delay-4s  animate__infinite infinite animate__slower'>
                <span className='me-5 text-center justify-content-center'><IoMdCloudDownload /></span> <b className='lg:tracking-widest'>View My Resume</b>
              </p>
            </button>
          </a>
        </div>
      </div>
      {/* PROJECTS */}
      <div className='row animate__animated animate__zoomIn animate__delay-10s animate_slower'>
        <div className='row mt-5 mb-3'>
          <div className='col-12 col-lg-12 col-11 mx-auto text-center'>
            <p className='fs-1 d-flex justify-content-rigth ms-2 ms-md-5' style={{ borderBottom: "3px solid #646CFF", width: "80vw", maxWidth: 300, letterSpacing: "4px" }}> <b>My Projects</b></p>
          </div>
        </div>
        <div className='row mx-1 px-1 py-3 my-2 d-flex text-white justify-content-center'>
          {/* Repeat this block for each project */}
          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1' style={{ border: '2px solid black' }}>
            <Link to='https://stagingv2.dpanalyticsolution.com/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src={bongs} alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Bongs ERP Software</b></u> </p>
            <span>
              NEXT JS, TAILWIND CSS, MySQL, LARAVEL, REDUX TOOL-KIT, CLOUDINARY, TYPESCRIPT, RTK QUERY, etc.
              A scalable web application for vessels and barges, designed to support operations across various fleet types, including offshore barges, vessels, rigs, and platforms.
            </span>
          </div>

          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1' style={{ border: '2px solid black' }}>
            <Link to='https://dpanalyticsolution.com/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src={dpanalytics} alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Company Website</b></u> </p>
            <span>
              WORDPRESS.
              A Company website developed with Content Management Sysytem (Wordpress) .
            </span>
          </div>

          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1' style={{ border: '2px solid black' }}>
            <Link to='https://dparagons.com/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src={dparagons} alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>WORDPRESS </b></u> </p>
            <span>
              WORDPRESS
              Company website developed with Content Management Sysytem (Wordpress) .
            </span>
          </div>

          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1' style={{ border: '2px solid black' }}>
            {/* <Link to='https://stagingv2.dpanalyticsolution.com/'> */}
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src={bongsMobile} alt="" />
            {/* </Link> */}
            <p style={{ textAlign: "center" }}> <u> <b>Bongs ERP Mobile App</b></u> </p>
            <span>
              REACT NATIVE, MySQL, LARAVEL, REDUX TOOL-KIT, CLOUDINARY, TYPESCRIPT.
              A scalable web application for vessels and barges, designed to support operations across various fleet types, including offshore barges, vessels, rigs, and platforms.
            </span>
          </div>

          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1' style={{ border: '2px solid black' }}>
            <Link to='https://interswitch-group5-ecommerce-app.vercel.app' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714078621/portfolio%20gif/eccomerec-interswitch.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>A Multi Tenant Eccomerce Application </b></u> </p>
            <span>
              REACT JS, BOOTSTRAP, CSS MONGO DB, NODE JS, REDUX TOOL-KIT, CLOUDINARY, JAVA SPRING BOOT, LOMBOK, SPRING DATA JPA, and MySQL -
              The system was designed as a collection of microservices for both Merchant and Customers
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://react-cbt-4pg5.vercel.app/admin' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714073758/portfolio%20gif/kccmgngzlpbp8iygr6i1.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Computer Based Test(C.B.T) Application </b></u> </p>
            <span>
              REACT JS, BOOTSTRAP, CSS, MONGO DB, NODE JS -
              A CBT System that provides Examiners the functionality to set and edit multiple choice questions, options and correct answer.
              The App also provides a friendly interface for students to answer questions withing the specified time.
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://womenreform.ng' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074894/portfolio%20gif/fio1idszw5rlw8dqruey.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>N.G.O Website </b></u> </p>
            <span>
              WORDPRESS, HTML, CSS -
              A website for a Non Govermental Organization in Lagos State, that dynamically showcase, information about the company with friendly User Interface and other functionalities
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://olutayo333.github.io/bankApp/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714057735/xutijatlzf0jioaljjyz.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Online Banking Application </b></u> </p>
            <span>
              JAVASCRIPT, HTML, CSS -
              Some functionalities of this application include customer registration, login, password retrieval, deposit, withdraw, transfer funds, and transaction history amongst others
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://olutayo333.github.io/bitcoin-converter' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074370/portfolio%20gif/jah9cpezsyolfjm32apu.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>BitCoin Converter </b></u> </p>
            <span>
              JAVASCRIPT, HTML, CSS -
              An application that convert the current price of BitCoin to  Dollar, Euro and Pounds
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://olutayo333.github.io/weatherAPI' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074617/portfolio%20gif/fbq2otgdscltitrpdtuq.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Weather Application </b></u> </p>
            <span>
              JAVASCRIPT, HTML, CSS -
              An application that fetches and diplay the weather conditions of a specified location
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://react-bank-app-hazel.vercel.app/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714073666/portfolio%20gif/aevbxd3aqx6xj9bvvquc.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Web Banking Application</b></u> </p>
            <span>
              REACT JS, BOOTSTRAP, CSS, MONGO DB, NODE JS -
              Some functionalities of this application include customer registration, login, password retrieval, deposit, withdraw and transfer, amongst others
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://pyrafieldhomes.com.ng' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074241/portfolio%20gif/wk4yetpdu50ytsja6mti.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>A Real Estate Website </b></u> </p>
            <span>
              WORDPRESS, HTML, CSS -
              A website for a real estate company in Ogun State, that dispay dynamically, information about the company with visually apealing User Interface and other functionalities
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://zoe.sch.ng/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714075066/portfolio%20gif/zoegif.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>A School Website </b></u> </p>
            <span>
              WORDPRESS, HTML, CSS -
              A website for a School in Oyo State, that dispays dynamically, information about the School with visually apealing User Interface and other functionalities
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://olutayo333.github.io/Scrambled-Word-Game/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074823/portfolio%20gif/zfegtxzocbzf9icxfkom.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Scrambled Word Game </b></u> </p>
            <span>
              JAVASCRIPT, HTML, CSS -
              A game that test the reasoning ability of players by scrambling words and demanding the player to re-arrange the scrambled words. It has an admin panel where words to be scrambled can be set.
            </span>
          </div>

          <div className='text-center  col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://react-cap-plc-case-study-git-master-olutayo-stephens-projects.vercel.app/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1722414434/portfolio%20gif/taskManagementSystem.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Task Management System </b></u> </p>
            <span>
              ReactJS, JAVASCRIPT, HTML, CSS, Nodejs, MongoDB -
              A task MAnagement Application for employees to submit thier daily report.
            </span>
          </div>

          <div className='text-center col-12 col-md-6 col-lg-5 col-11 my-1 bg-dark rounded py-3 mx-1'>
            <Link to='https://vue-lernly-app-eccomerce-updated.vercel.app/' target="_blank" rel="noopener noreferrer">
              <img className="img-fluid" style={{ borderRadius: "20px", width: "100%", height: 400 }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1722414242/portfolio%20gif/learnify-eccomerce-gif.gif" alt="" />
            </Link>
            <p style={{ textAlign: "center" }}> <u> <b>Merchant Eccomerce App </b></u> </p>
            <span>
              VUEjs, NODEjs, JAVASCRIPT, HTML, CSS, Bootstrap, MongoDB
              An Eccomerce Application that allows users to register, login, upload product and edit product.
            </span>
          </div>

          <Link className=' text-center d-flex col-11 justify-content-center my-3' to='https://github.com/olutayo333?tab=repositories'>
            <button style={{ letterSpacing: "15px" }} className='btn btn-lg w-75 shadow btn-dark animate__animated animate__pulse pt-1 animate__delay-2s  animate__infinite	infinite animate__slower ' >
              <p className=' pt-2 animate__animated animate__flash animate__delay-2s  animate__infinite	infinite animate__slower'><b>View More Of My Projects</b> </p>
            </button>
          </Link>

        </div>
      </div>
      <hr />

      {/* RECOMMENDATIONS */}
      <p className='fs-1 d-flex ms-2 ms-md-5 justify-content-start' style={{ borderBottom: "3px solid #646CFF", width: "80vw", maxWidth: 400, letterSpacing: "4px" }} > <b>Recomendations</b> </p>
      <div className='row d-flex mx-auto justify-content-center mb-1 pb-3 bg-dark rounded py-2 px-2'>
        <div className='col-12 col-lg-10 col-10'>
          <img className="img-fluid" style={{ borderRadius: "20px", width: "100%" }} src="https://res.cloudinary.com/di01u7dxt/image/upload/v1714074473/portfolio%20gif/h2odcoevrlgvqiunp4e7.gif" alt="" />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-lg-11 col-10'>
          <Link
            style={{ borderBottom: "3px solid #646CFF" }}
            className='d-flex mx-auto justify-content-center mb-1 pb-3'
            to='https://www.linkedin.com/in/ayanrinde-olutayo-stephen/details/recommendations'
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='btn btn-lg btn-dark px-1 pt-3 mx-auto fs-2 recommendation-btn-font' style={{ color: "", letterSpacing: "1px" }}>
              <b>
                <p className='px-2'> View More Of My Recommendations </p>
              </b>
            </button>
          </Link>
        </div>
      </div>

      {/* CONTACT */}
      <div className='row d-flex justify-content-center bg-dark py-3 my-2 shadow'>
        <div className='col-12 col-lg-10 col-10 mx-auto text-center ' style={{ letterSpacing: "5px" }}>
          <Link className='mx-3' to='+2348163960501'> <span className='ms-5' >Phone: +234 8163960501</span> </Link>
          <Link to='mailto:olutayostephen@gmail.com'> <span>Email: olutayostephen@gmail.com</span>  </Link>
        </div> <hr />
        <div className='col-12 col-lg-10 col-10 mx-auto fs-1 text-center' >
          <Link className='mx-2' to='https://wa.me/8163960501'> <IoLogoWhatsapp /> </Link>
          <Link className='mx-2' to='https://facebook.com/Iamolutayostephen'> <FaFacebook /> </Link>
          <Link className='mx-2' to='https://www.linkedin.com/in/ayanrinde-olutayo-stephen'><FaLinkedin /></Link>
          <Link className='mx-2' to='https://twitter.com/OlutayoStephen1'><FaSquareXTwitter /></Link>
          <Link className='mx-2' to='https://github.com/olutayo333'><FaGithub /></Link>
          <Link className='mx-2' to='mailto:olutayostephen@gmail.com'> <MdMarkEmailUnread /> </Link>
          <Link className='mx-2' to='+2348163960501'> <FaPhoneVolume /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
