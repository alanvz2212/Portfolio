
import React from 'react';

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>Postman</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>OOP</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Familiar With</h3>
          <ul>
            <li>Bloc</li>
            <li>GetX</li>
            <li>Provider</li>
            <li>MVC</li>
            <li>MVVM</li>
            <li>RESTful API</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Payment Integrations</h3>
          <ul>
            <li>Stripe</li>
            <li>Razorpay</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
