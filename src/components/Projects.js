
import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        <h3>Major Projects</h3>
        <div className="project">
          <h4>JEWELERY – Application</h4>
          <p>A feature-rich Flutter shopping app built with MVVM architecture and GetX. It includes Firebase Auth, Firestore backend, and Stripe payments. Core features: user auth, product filtering, cart, order history, and checkout. Enhanced with Lottie and smooth animations for great UX.</p>
          <a href="https://github.com/alanvz2212/test_app.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>JOURNAL – Application</h4>
          <p>A Flutter journal app with Hive storage, calendar view, audio notes, local notifications, and background task support. Includes chart visualization and a smooth, modern UI.</p>
          <a href="https://github.com/alanvz2212/Journal_App.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>NETFLIX CLONE – Application</h4>
          <p>A sleek Flutter-based streaming UI clone using HTTP for API calls, Lottie for smooth animations, and CachedNetworkImage for optimized image loading. Styled with Google Fonts and FontAwesome icons to deliver a visually rich and responsive user experience.</p>
          <a href="https://github.com/alanvz2212/Netfilx_Clone.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>NEWS – Application</h4>
          <p>Developed a dynamic news application in Flutter with real-time API integration, efficient state management (bloc), and local data caching. Included a featured news carousel, formatted timestamps, and custom launcher icons for a polished look.</p>
          <a href="https://github.com/alanvz2212/news_app.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
      <div>
        <h3>Mini Projects</h3>
        <div className="project">
          <h4>CHATBOT – Application</h4>
          <p>Built a chat-based mobile app using Flutter, featuring Firebase Authentication (email, Google, phone), local storage with Shared Preferences, and chatbot functionality via OpenRouter API. Integrated international phone input and custom launcher icons for enhanced user experience.</p>
          <a href="https://github.com/alanvz2212/Chat_Bot.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>MCET – College Application</h4>
          <p>I built this application for my college using technologies like Firebase, Bloc, Provider, and Rich UI. This was my dream project, and I successfully launched it on the Play Store.</p>
          <a href="https://github.com/alanvz2212/Mcet_App.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>CARSNOW – Application</h4>
          <p>A stylish Flutter car rental app featuring smooth onboarding with animated splash screens, calendar scheduling, carousels, and GetX for efficient state management. Enhanced with Lottie animations, custom sliders, and intuitive UI components like Convex Bottom Bar and staggered page transitions.</p>
          <a href="https://github.com/alanvz2212/Carsnow.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
        <div className="project">
          <h4>STUDENT MANAGEMENT (PROVIDER & GETX) – Application</h4>
          <p>Developed a Flutter app to manage student records with full CRUD functionality, local database storage (sqlflite), state management (provider, Getx ), image selection for profiles, and file handling. Designed with platform-consistent UI elements for a smooth user experience.</p>
          <a href="https://github.com/alanvz2212/Student_Management_Getx.git" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
