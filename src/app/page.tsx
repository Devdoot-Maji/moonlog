"use client"

import Image from "next/image";
import { useState, useRef } from "react";
import localFont from "next/font/local";
import { Fredoka } from "next/font/google";
import BlossomScene from "./components/BlossomScene";

const scriptinaFont = localFont({
  src: "../../public/SCRIPTIN.ttf",
  variable: "--font-scriptin",
});

const fredokaFont = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContinue = () => {
    if (!nickname.trim()) return;
    
    if (nickname.trim() !== "Aashu") {
      setShowErrorModal(true);
      return;
    }
    
    localStorage.setItem("nickname", nickname);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(2);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(3);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextToFinal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(4);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="page">
      {showErrorModal && (
        <div className="modal-overlay" onClick={() => setShowErrorModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className={fredokaFont.className}>Oops! 🙈</h2>
            <p className={fredokaFont.className}>You are not the expected person</p>
            <button 
              className={fredokaFont.className} 
              onClick={() => {
                setShowErrorModal(false);
                setTimeout(() => inputRef.current?.focus(), 100);
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      {currentPage === 1 && (
        <div className={isTransitioning ? "page-content fade-out" : "page-content fade-in"}>
          <div className="cloud-wrapper">
            <Image
              src="/wavy-shape.svg"
              alt=""
              fill
              className="cloud-card"
              priority
            />
          </div>

          <div className="content-wrapper">
            <div className="card-content">
              <h1 className={fredokaFont.className}>Hi There!🌸</h1>

              <input
                ref={inputRef}
                className={fredokaFont.className}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Your Nickname here…"
              />
              <small className={fredokaFont.className} style={{ fontStyle: 'italic' }}>Hint: 5 letters, starts with A</small>

              <button className={fredokaFont.className} onClick={handleContinue}>Continue →</button>
            </div>
          </div>

          <div className="lily-wrapper">
            <Image src="/lily.png" alt="" height={200} width={200} className="lily" />
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className={isTransitioning ? "page-content fade-out" : "page-content fade-in"}>
          <div className="cloud-wrapper">
            <Image
              src="/wavy-shape.svg"
              alt=""
              fill
              className="cloud-card"
              priority
            />
          </div>

          <div className="content-wrapper">
            <div className="card-content">
              <div className="moon-container">
                <Image 
                  src="/space.png" 
                  alt="Space background" 
                  width={230}
                  height={230}
                  className="space-bg"
                />
                <Image 
                  src="/moon.png" 
                  alt="Moon" 
                  width={150}
                  height={150}
                  className="moon-img"
                />
              </div>

              <p className="moon-text">
                This was the moon<br />
                on the night you were born
              </p>

              <p className="date-text">
                — 12th February, 97 —
              </p>

              <button onClick={handleNext}>Next →</button>

              <Image 
                src="/aquarius-constellation.png" 
                alt="Aquarius constellation" 
                width={120}
                height={120}
                className="constellation-img"
              />
            </div>
          </div>
        </div>
      )}

      {currentPage === 3 && (
        <div className={isTransitioning ? "page-content fade-out" : "page-content fade-in"}>
          <div className="cloud-wrapper">
            <Image
              src="/wavy-shape.svg"
              alt=""
              fill
              className="cloud-card"
              priority
            />
          </div>

          <div className="content-wrapper">
            <div className="card-content">
              <h2 className="page3-title">You in little things…</h2>

              <div className="moments-list">
                <p className="moment-item">
                  The way you love yapping<br />
                  and sharing your day-to-day stories,
                </p>

                <p className="moment-item">
                  The random hehehe's and khikhikhikhi's<br />
                </p>

                <p className="moment-item">
                  The hopping around when you're excited,<br />
                </p>

                <p className="moment-item">
                  And your never-ending love<br />
                  for lip products.
                </p>
              </div>

              <button onClick={handleNextToFinal}>Next →</button>
            </div>
          </div>

          <div className="lily-wrapper">
            <Image src="/aquarius.png" alt="" height={200} width={200} className="lily" />
          </div>
        </div>
      )}

      {currentPage === 4 && (
        <div className="page-content fade-in">
          <BlossomScene />
          
          <div className="cloud-wrapper">
            <Image
              src="/wavy-shape.svg"
              alt=""
              fill
              className="cloud-card"
              priority
            />
          </div>

          <div className="content-wrapper">
            <div className="card-content">
              <h1>
                <span className={`${fredokaFont.className} wish-header`}>Happy Birthday,</span>
                <br />
                <span className={`${scriptinaFont.className} scriptina-fix`}>Shivani! </span>🌸
              </h1>
              
              <Image 
                src="/her-image.png" 
                alt="" 
                width={200}
                height={200}
                className="her-image"
                style={{ width: 'auto', height: 'auto', maxWidth: '200px' }}
              />

              <Image src="/cake.png" alt="" height={150} width={150} className="lily" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// https://dribbble.com/shots/24987302-Grooming-Services-Mobile-Website