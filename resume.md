---
layout: page
title: Resume
---

<!-- Resume page content -->
<section class="section">
  <div class="section-header">
    <h2>Resume</h2>
    <p>Experience, education, and the systems I build.</p>
  </div>

  <!-- Two-column layout: experience + skills -->
  <div class="resume-grid">
    <div class="resume-column">
      <!-- Work experience timeline -->
      <h3 class="section-subtitle">Experience</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-meta">
            <span>Machine Learning Engineer · Cyber Dive Corp.</span>
            <span>Mesa, AZ · May 2022 – Jan 2026</span>
          </div>
          <p>
            Led ML initiatives for the Aqua One smartphone, delivering real-time safety features for
            families through edge vision, NLP, and production MLOps.
          </p>
          <ul class="bullet-list">
            <li>Built on-device content moderation using YOLO, SSD-MobileNet, and EfficientDet, reaching 94% precision with 4x multi-GPU training.</li>
            <li>Improved detection accuracy by 20% and reduced false positives by 50% through augmentation and transfer learning.</li>
            <li>Boosted inference speed by 20% and reduced model size by 50% using quantization and pruning for mobile execution.</li>
            <li>Deployed an AWS MLOps sampling pipeline with ECS, DynamoDB Streams, and Lambda to surface low-confidence detections automatically.</li>
            <li>Shipped an on-device NLP model (BERT, MobileBERT, DistilBERT) for grooming detection with 92% accuracy.</li>
            <li>Delivered OCR and video classification systems that improved accuracy by 80% and throughput by 40%.</li>
          </ul>
          <div class="pill-row">
            <span class="pill">TensorFlow Lite</span>
            <span class="pill">PyTorch</span>
            <span class="pill">AWS</span>
            <span class="pill">Android</span>
            <span class="pill">MLOps</span>
          </div>
        </div>
      </div>

      <!-- Highlighted project systems -->
      <h3 class="section-subtitle">Selected Systems</h3>
      <div class="card-grid">
        <div class="project-card">
          <h4>Edge Content Moderation</h4>
          <p>Multi-model vision stack for mobile safety, optimized for low latency and smaller model footprints.</p>
          <div class="pill-row">
            <span class="pill">YOLO</span>
            <span class="pill">EfficientDet</span>
            <span class="pill">Quantization</span>
          </div>
        </div>
        <div class="project-card">
          <h4>Grooming Detection NLP</h4>
          <p>On-device transformer pipeline that detects risky conversations with 92% accuracy.</p>
          <div class="pill-row">
            <span class="pill">BERT</span>
            <span class="pill">DistilBERT</span>
            <span class="pill">TensorFlow Lite</span>
          </div>
        </div>
        <div class="project-card">
          <h4>Production MLOps Sampling</h4>
          <p>Automated feedback loop for low-confidence sessions to improve model performance in production.</p>
          <div class="pill-row">
            <span class="pill">ECS</span>
            <span class="pill">Lambda</span>
            <span class="pill">DynamoDB</span>
          </div>
        </div>
        <div class="project-card">
          <h4>OCR + Video Intelligence</h4>
          <p>Hybrid OCR and CNN-RNN models for frame-level text capture and video classification.</p>
          <div class="pill-row">
            <span class="pill">CRAFT</span>
            <span class="pill">PARSeq</span>
            <span class="pill">CNN-RNN</span>
          </div>
        </div>
      </div>
    </div>

    <div class="resume-column">
      <!-- Skills blocks -->
      <h3 class="section-subtitle">Skills</h3>
      <div class="skill-card">
        <h4>Languages</h4>
        <div class="pill-row">
          <span class="pill">Python</span>
          <span class="pill">Kotlin</span>
          <span class="pill">JavaScript</span>
          <span class="pill">TypeScript</span>
          <span class="pill">SQL</span>
          <span class="pill">R</span>
          <span class="pill">C</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>ML Frameworks</h4>
        <div class="pill-row">
          <span class="pill">TensorFlow</span>
          <span class="pill">PyTorch</span>
          <span class="pill">ONNX</span>
          <span class="pill">OpenCV</span>
          <span class="pill">Scikit-Learn</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>Optimization</h4>
        <div class="pill-row">
          <span class="pill">Quantization</span>
          <span class="pill">Pruning</span>
          <span class="pill">TensorFlow Lite</span>
          <span class="pill">PyTorch Mobile</span>
          <span class="pill">ML Kit</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>Cloud + MLOps</h4>
        <div class="pill-row">
          <span class="pill">AWS</span>
          <span class="pill">SageMaker</span>
          <span class="pill">ECS</span>
          <span class="pill">Docker</span>
          <span class="pill">MLflow</span>
          <span class="pill">Datadog</span>
        </div>
      </div>

      <!-- Education + certifications -->
      <h3 class="section-subtitle">Education & Certifications</h3>
      <div class="project-card">
        <h4>M.S. Computer Engineering</h4>
        <p>The University of Texas at Dallas · Computer Systems</p>
      </div>
      <div class="project-card">
        <h4>B.Tech. Electronics & Communication</h4>
        <p>Amrita School of Engineering · Bengaluru, India</p>
      </div>
      <div class="project-card">
        <h4>Certifications</h4>
        <p>Mathematics for Machine Learning · Deep Learning Specialization · SQL for Data Science</p>
      </div>

      <!-- Publications + patent -->
      <h3 class="section-subtitle">Publications & Patent</h3>
      <div class="project-card">
        <h4>US-20260019493 · USPTO Patent Application</h4>
        <p>Patent application covering advanced ML-driven monitoring systems.</p>
      </div>
      <div class="project-card">
        <h4>Object Detection using Thermal Imaging · IEEE</h4>
        <p>Publication focused on leveraging thermal imagery for robust object detection.</p>
      </div>
    </div>
  </div>
</section>
