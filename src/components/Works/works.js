import React from 'react'
import './works.css'
import res from '../../assets/restaurant.png'
import spam from '../../assets/spam.png'
import mask from '../../assets/facemask.png'
import blog from '../../assets/blog.png'


const works = () => {
  return (
      <section id="works">
      <span className='workTitle'>My Portfolio</span>
      <div className='workBars'>
    <div className='workBar'>
        <img src={res} alt='workImg' className="workImg"/>
        
        <div className='workText'>
            <h2>Restaurant Booking Web Application</h2>
            <p>A Django-based web application that allows users to view the restaurant menu, book tables, and provide feedback. The app is fully functional, with an intuitive interface for seamless booking and interaction. It leverages Django's robust backend features, while the frontend is styled using Bootstrap for responsiveness and ease of use. Also deployed on AWS EC2. </p>
            <br/>
            <p><strong>Tech Stack:</strong><br/>
Backend: Python, Django <br/>
Frontend: HTML, CSS (Bootstrap)<br/>
Database: SQLite<br/>
Other Technologies: JavaScript<br/>
Development Tools: Visual Studio Code, GitHub</p>
<div class = "buttons">
<a href="https://github.com/vallabhpatil777/Restaurant-Booking-WebApplication-Django" rel="noreferrer" target="_blank" className="githubButton">
          View on GitHub
        </a><a href="http://13.53.48.37:8000" rel="noreferrer" target="_blank" className="githubButton">
          View Project
        </a>
        </div>
        </div>
    </div>
    <div className='workBar'>
        <img src={blog} alt='workImg' className="workImg"/>
        
        <div className='workText'>
            <h2>BlogHive Web Application</h2>
            <p>A Django-based blog web application that enables users to create, edit, and delete blog posts, add comments, and manage their profiles. The app features blog post creation, deletion, add comments, user authentication (signup, login, logout) and profile editing functionality. Application is deployed on PythonAnywhere. </p>
            <br/>
            <p><strong>Tech Stack:</strong><br/>
Backend: Python, Django <br/>
Frontend: HTML, CSS (Bootstrap)<br/>
Database: SQLite<br/>
Authentication: Django's built-in authentication system <br/>
Other Technologies: JavaScript<br/>
Development Tools: Visual Studio Code, GitHub</p>
<div class = "buttons">
<a href="https://github.com/vallabhpatil777/Blog-WebApp-Django" rel="noreferrer" target="_blank" className="githubButton">
          View on GitHub
        </a><a href="https://vallabhpatil777.pythonanywhere.com" rel="noreferrer" target="_blank" className="githubButton">
          View Project
        </a>
        </div>
        </div>
    </div>
    <div className='workBar'>
        <img src={mask} alt='workImg' className="workImg"/>
        
        <div className='workText'>
            <h2>Face Mask Detection Web Application </h2>
            <p>A web application built with Flask that detects whether a person is wearing a face mask or not using a fine-tuned VGG16 model. The model was trained on 7,000 images with data augmentation techniques for improved accuracy and generalization. The app provides real-time predictions through a simple interface, with real time detection using webcam. </p>
            <br/>
            <p><strong>Tech Stack:</strong><br/>
            Backend: Python, Flask <br/>
            Frontend: Streamlit<br/>
            Libraries: Numpy, Pandas,  Keras, TensorFlow, OpenCV, Scikit-learn<br/>
            Model: VGG16 (fine-tuned for mask detection using dataset of 7000 Images, Accuracy: 96%) <br/>
            Development Tools: Jupyter Notebook, Visual Studio Code, GitHub</p>
<div class = "buttons">
<a href="https://github.com/vallabhpatil777/Facemask-detection-OpenCV" rel="noreferrer" target="_blank" className="githubButton">
          View on GitHub
        </a>
        </div>
        </div>
    </div>
    <div className='workBar'>
        <img src={spam} alt='workImg' className="workImg"/>
        
        <div className='workText'>
            <h2>Spam Email Detection Web Application </h2>
            <p>A Machine Learning web application designed to classify emails and SMS messages as Spam or Not Spam using Natural Language Processing (NLP). The app provides real-time predictions with a user-friendly interface, achieving high accuracy through effective text preprocessing and model evaluation. Built using Streamlit for the frontend, the app offers seamless interaction and precision in spam detection. </p>
            <br/>
            <p><strong>Tech Stack:</strong><br/>
            Backend: Python <br/>
            Frontend: Streamlit<br/>
            Libraries: Numpy, Pandas, nltk, Scikit-learn<br/>
            Model: Multinomial Naive Bayes with TF-IDF vectorization (Precision : 98%) <br/>
            Development Tools: Jupyter Notebook, Visual Studio Code, GitHub</p>
<div class = "buttons">
<a href="https://github.com/vallabhpatil777/Spam-email-predictor" rel="noreferrer" target="_blank" className="githubButton">
          View on GitHub
        </a>
        </div>
        </div>
    </div>
   </div>    
       </section>
  )
}

export default works
