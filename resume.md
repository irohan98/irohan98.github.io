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
            <li>Improved detection accuracy by 20% and reduced false positives by 50% through data augmentation, fine-tuning, and transfer learning.</li>
            <li>Boosted inference speed by 20% and reduced model size by 50% using quantization and pruning for mobile execution.</li>
            <li>Designed an end-to-end AWS MLOps sampling pipeline with ECS, DynamoDB Streams, and Lambda to surface low-confidence detections.</li>
            <li>Collaborated with Android engineers on ML pre/post-processing, improving APK response time by 25% and inference accuracy by 50%.</li>
            <li>Shipped an on-device NLP model (BERT, MobileBERT, DistilBERT) for grooming detection with 92% accuracy.</li>
            <li>Optimized tokenization and preprocessing to cut latency by 30% and memory by 40% using TensorFlow Lite.</li>
            <li>Built a suspicious-contacts feature with Step Functions, Lambda, and Twilio for real-time verification and alerts.</li>
            <li>Delivered OCR with CRAFT and PARSeq (85% accuracy) and a CNN-RNN video classifier improving accuracy by 80%.</li>
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
          <p>Multi-model vision stack for mobile safety, reaching 94% precision with low-latency inference.</p>
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
          <p>Automated feedback loop for low-confidence sessions to improve production model performance.</p>
          <div class="pill-row">
            <span class="pill">ECS</span>
            <span class="pill">Lambda</span>
            <span class="pill">DynamoDB</span>
          </div>
        </div>
        <div class="project-card">
          <h4>OCR + Video Intelligence</h4>
          <p>CRAFT + PARSeq OCR and CNN-RNN video classification with faster frame processing.</p>
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
          <span class="pill">Scikit-Learn</span>
          <span class="pill">TensorFlow</span>
          <span class="pill">PyTorch</span>
          <span class="pill">ONNX</span>
          <span class="pill">OpenCV</span>
          <span class="pill">PIL</span>
          <span class="pill">NLTK</span>
          <span class="pill">Keras</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>Model Optimization & Deployment</h4>
        <div class="pill-row">
          <span class="pill">Quantization</span>
          <span class="pill">Pruning</span>
          <span class="pill">TensorFlow Lite</span>
          <span class="pill">PyTorch Mobile</span>
          <span class="pill">ML Kit</span>
          <span class="pill">MediaPipe</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>LLMs & Generative AI</h4>
        <div class="pill-row">
          <span class="pill">AI Agents</span>
          <span class="pill">RAG</span>
          <span class="pill">Prompt Engineering</span>
          <span class="pill">Hugging Face</span>
          <span class="pill">LangChain</span>
          <span class="pill">FAISS</span>
          <span class="pill">Agentic Workflows</span>
          <span class="pill">Google ADK</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>Cloud & Deployment</h4>
        <div class="pill-row">
          <span class="pill">AWS</span>
          <span class="pill">SageMaker</span>
          <span class="pill">Bedrock</span>
          <span class="pill">Lambda</span>
          <span class="pill">DynamoDB</span>
          <span class="pill">ECS</span>
          <span class="pill">SQS</span>
          <span class="pill">Kinesis</span>
          <span class="pill">CloudWatch</span>
          <span class="pill">Rekognition</span>
          <span class="pill">AppSync</span>
          <span class="pill">Docker</span>
          <span class="pill">FastAPI</span>
          <span class="pill">GCP</span>
          <span class="pill">Elasticsearch</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>MLOps & Monitoring</h4>
        <div class="pill-row">
          <span class="pill">CometML</span>
          <span class="pill">Databricks</span>
          <span class="pill">Deepchecks</span>
          <span class="pill">Roboflow</span>
          <span class="pill">Neptune</span>
          <span class="pill">MLflow</span>
          <span class="pill">Datadog</span>
        </div>
      </div>
      <div class="skill-card">
        <h4>Developer Tools</h4>
        <div class="pill-row">
          <span class="pill">Git</span>
          <span class="pill">Jira</span>
          <span class="pill">Postman</span>
          <span class="pill">GraphQL</span>
          <span class="pill">Android Studio</span>
          <span class="pill">VS Code</span>
          <span class="pill">RStudio</span>
          <span class="pill">CI/CD</span>
        </div>
      </div>

      <!-- Education + certifications -->
<h3 class="section-subtitle">Education & Certifications</h3>
      <div class="project-card">
        <h4>M.S. Computer Engineering</h4>
        <p>The University of Texas at Dallas · Computer Systems · Jul 2021 – May 2023</p>
      </div>
      <div class="project-card">
        <h4>B.Tech. Electronics & Communication</h4>
        <p>Amrita School of Engineering · Bengaluru, India · Jul 2016 – Aug 2020</p>
      </div>
      <div class="project-card">
        <h4>Certifications</h4>
        <p>Mathematics for Machine Learning (Oct 2020) · Deep Learning Specialization (Aug 2020) · SQL for Data Science (May 2020)</p>
      </div>

      <!-- Publications + patent -->
      <h3 class="section-subtitle">Publications & Patent</h3>
      <div class="project-card">
        <h4>US-20260019493 · USPTO Patent Application</h4>
        <p>Patent application filed Jan 2026 covering advanced ML-driven monitoring systems.</p>
      </div>
      <div class="project-card">
        <h4>Object Detection using Thermal Imaging · IEEE</h4>
        <p>Publication (Dec 2020) on thermal imagery for robust object detection.</p>
      </div>
    </div>
  </div>
</section>
