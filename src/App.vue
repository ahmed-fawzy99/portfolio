<script setup>
import Layout from "@/components/Layout.vue";
import SocialMediaList from "@/components/SocialMediaList.vue";
import SkillList from "@/components/SkillList.vue";
import Project from "@/components/Project.vue";
import {onMounted, ref} from "vue";
import Swal from "sweetalert2";
import Experience from "@/components/Experience.vue";
import ResumeDownload from "@/components/ResumeDownload.vue";
import Certification from "@/components/Certification.vue";

const isSending = ref(false);

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const contactHandler = () => {
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const data = {
    email,
    subject,
    message
  };
  isSending.value = true;
  fetch('https://server.ahmaddeghady.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
      // Clear the form
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
      Toast.fire({
        icon: "success",
        title: "Message sent successfully"
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Error: " + response.status + " - " + response.statusText
      });
    }
  }).catch(error => {
    Toast.fire({
      icon: "error",
      title: "Error: " + error
    });
  }).finally(() => {
    isSending.value = false;
  });
};

onMounted(() => {
  const sections = document.querySelectorAll('section');
  function observe() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          history.replaceState(null, null, `#${entry.target.id}`);
          // const sectionText = document.getElementById(entry.target.id + "-a").innerText;
          // if (!sectionText.startsWith('___')) {
          //   document.getElementById(entry.target.id + "-a").innerText = '___' + document.getElementById(entry.target.id + "-a").innerText + '___';
          // }
          // for (const section of sections) {
          //   if (section.id !== entry.target.id) {
          //     const oldSection = document.getElementById(section.id + "-a");
          //     oldSection.innerText = oldSection.innerText.replaceAll('___', '');
          //   }
          // }
        }
      });
    }, {threshold: 0.5});
    sections.forEach(section => {
      observer.observe(section);

    });
  }
  // Attach the initializeObserver function to user interaction events
  document.getElementById('right-content').addEventListener('scroll', () => {observe()}, { once: true });

});
</script>

<template>
  <Layout>
    <template #left-content>
      <div class="flex flex-col h-full">
        <div class="">
          <h1 class="text-4xl font-bold pt-0 text-center lg:text-start">Ahmed Deghady</h1>
          <h3 class="text-xl text-center lg:text-start">Full-Stack Developer</h3>
          <p class="text-xs text-center lg:text-start">I build web apps. A to Z.</p>
          <div class="flex justify-center lg:justify-start items-center gap-2 mt-4">
            <a href="https://www.credly.com/badges/8243bcfc-60f8-4898-8030-6c68f7e2e209" target="_blank">
              <img src="@/img/ccp-badge.png" alt="AWS Certified Cloud Practitioner Badge" class="w-20" />
            </a>
            <a href="https://www.credly.com/badges/0794644c-c939-4e76-b4c2-7f15e3cde1cd/public_url" target="_blank">
              <img src="@/img/aif-badge.png" alt="AWS Certified AI Practitioner Badge" class="w-20" />
            </a>
            <a href="https://www.credly.com/badges/021daa59-cb49-4323-9282-199cd01032e2" target="_blank">
              <img src="@/img/saa-badge.png" alt="AWS Certified Solutions Architect Badge" class="w-20" />
            </a>
            <a href="https://www.credly.com/badges/d3d0a87e-a516-40ae-a8e4-6e388044018b" target="_blank">
              <img src="@/img/ckad_badge.png" alt="Certified Kubernetes Application Developer Badge" class="w-20" />
            </a>
          </div>
        </div>
        <div class="mt-8">
          <ul class="space-y-2 text-center lg:text-start">
            <li><a id="about-a" href="#about">&#60;About /&#62;</a></li>
            <li><a id="skills-a" href="#skills">&#60;Skills /&#62;</a></li>
            <li><a id="work-a" href="#work">&#60;Experience /&#62;</a></li>
            <li><a id="projects-a" href="#projects">&#60;Projects /&#62;</a></li>
            <li><a id="certifications-a" href="#certifications">&#60;Certifications /&#62;</a></li>
            <li><a id="resume-a" href="#resume">&#60;Resume /&#62;</a></li>
<!--            <li><a id="blog-a" href="#blog">&#60;Blog /&#62;</a></li>-->
            <li><a id="contact-a" href="#contact">&#60;Contact /&#62;</a></li>
          </ul>
        </div>
        <div class="h-full flex flex-col justify-end mb-10">
          <div class="mt-8">
            <SocialMediaList/>
          </div>
        </div>
      </div>
    </template>

    <template #right-content>
      <div class="flex flex-col gap-8 mb-2">
        <section id="about">
          <h2 class="text-2xl font-bold text-center lg:text-start">About</h2>
          <p class="text-justify text-base-300 text-sans">
            Full-stack developer with 3 years of experience delivering scalable, high-performance web applications using Laravel and Next.js. Proven track record in optimizing performance, leading full-stack migrations, and building automation tools that reduce operational costs. AWS Certified Cloud Practitioner and Solutions Architect (Associate), with hands-on experience designing and deploying secure, scalable cloud architectures. Passionate about clean architecture, maintainable code, and open-source collaboration.
        </p>
        </section>
        <section id="skills">
          <h2 class="text-2xl font-bold mb-2 text-center lg:text-start">Skills</h2>
          <ul class="text-center lg:text-start">
            <SkillList>⭐ Laravel</SkillList>
            <SkillList>⭐ API Development</SkillList>
            <SkillList>⭐ Next.js</SkillList>
            <SkillList>⭐ React</SkillList>
            <SkillList>⭐ TypeScript</SkillList>
            <SkillList>⭐ Vue.js</SkillList>
            <SkillList>⭐ TailwindCSS</SkillList>
            <SkillList>AWS</SkillList>
            <SkillList>Nuxt.js</SkillList>
            <SkillList>Livewire</SkillList>
            <SkillList>FilamentPHP</SkillList>
            <SkillList>Python</SkillList>
            <SkillList>PHP</SkillList>
            <SkillList>PostgreSQL</SkillList>
            <SkillList>Redis</SkillList>
            <SkillList>Meilisearch</SkillList>
            <SkillList>Web Scraping</SkillList>
            <SkillList>WordPress Development</SkillList>
            <SkillList>Bubble.io</SkillList>
            <SkillList>DigitalOcean</SkillList>
            <SkillList>Cloudflare</SkillList>
            <SkillList>Vercel</SkillList>
            <SkillList>AWS Bedrock</SkillList>
            <SkillList>AWS SageMaker</SkillList>
            <SkillList>LangChain</SkillList>
            <SkillList>RAGs</SkillList>
            <SkillList>OpenAI API</SkillList>
            <SkillList>Anthropic API</SkillList>
            <SkillList>Git</SkillList>
            <SkillList>GitHub Actions</SkillList>
            <SkillList>Docker</SkillList>
            <SkillList>Kubernetes (Basics)</SkillList>
            <SkillList>Nginx</SkillList>
            <SkillList>Linux OS</SkillList>
            <SkillList>Pest</SkillList>
            <SkillList>Jest</SkillList>
            <SkillList>Testing Library</SkillList>
            <SkillList>Stripe</SkillList>
            <SkillList>Paddle</SkillList>
            <SkillList>MUX</SkillList>
            <SkillList>Loops.so</SkillList>
            <SkillList>PostHog</SkillList>
            <SkillList>Sentry</SkillList>
            <SkillList>Weglot</SkillList>
            <SkillList>Cloudflare Workers</SkillList>
            <SkillList>Twilio</SkillList>
            <SkillList>HTML5</SkillList>
            <SkillList>CSS3</SkillList>
            <SkillList>Bootstrap</SkillList>
          </ul>
        </section>

        <section id="work" class="space-y-2">
          <h2 class="text-2xl font-bold text-center lg:text-start">Work Experience</h2>
          <Experience
              title="Full-Stack Developer"
              company="Coachlife.com"
              location="Remote - Full-time Contract"
              start-date="Dec 2024"
              end-date="Present"
          >
            <ul class="">
              <li>- Led the end-to-end migration from Bubble.io (no-code platform) to a fully custom Next.js and Laravel stack, serving as the sole developer for the project, reducing page load times by 75% and cutting costs by 60% enabling higher concurrent user capacity in the process.</li>
              <li>- Oversaw the complete process, including architecture design, data migration, and feature parity, delivering a faster, more scalable, and cost-efficient platform.</li>
              <li>- Developed and deployed new features to enhance functionality and boost user engagement.</li>
              <li>- Diagnosed and resolved bugs to ensure a smooth, error-free user experience.</li>
              <li>- Monitored and maintained website performance to ensure stability and reliability.</li>
            </ul>
          </Experience>
          <Experience
              title="Full-Stack Developer"
              company="Almoroj.com - Part-Time"
              start-date="Jan 2023"
              end-date="Sep 2025"
              :skills="['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'API Development', 'Web Scraping', 'Nuxt.js', 'PostgreSQL', 'WordPress', 'Bubble.io', 'Stripe Integration']"
          >
            <ul class="">
              <li>- Developed and maintained 2 internal ERP systems to manage the organization management.</li>
              <li>- Developed customer-facing multi-lingual websites to help the organization attract international customers.</li>
              <li>- Developed mini automation tools to help basic workflows.</li>
            </ul>
          </Experience>
          <Experience
              title="Full-Stack Developer"
              company="Freelance & Open-Source"
              start-date="Jan 2023 – Dec 2024"
              end-date="Dec 2025 - Present"
              :skills="['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'API Development', 'Web Scraping', 'Nuxt.js', 'PostgreSQL', 'WordPress', 'Bubble.io', 'Stripe Integration']"
          >
            <ul class="">
              <li>- Designed, developed, and deployed dynamic full-stack web applications, web scrapers, and APIs for startups and freelance clients, enhancing their operational efficiency.</li>
              <li>- Created, maintained, and delivered front-end and back-end solutions, ensuring clean, maintainable code and user-friendly interfaces.</li>
              <li>- Contributed to the open-source community with several web-based tools and applications.</li>
            </ul>
          </Experience>
        </section>

        <section id="projects" class="space-y-2">
          <h2 class="text-2xl font-bold text-center lg:text-start">Projects</h2>
          <Project title="Coachlife.com"
                   description="- Led migration from Bubble.io to a custom stack, designing a Laravel API backend with role-based access control and an admin dashboard built with Filament
                    - Developed a high-performance Next.js frontend using Static Site Generation (SSG) and Incremental Static Regeneration (ISR) to maximize speed and scalability.
                    - Implemented SEO best practices and styled the interface with TailwindCSS for a responsive, modern design.
                    - Built and launched new features to enhance functionality, while monitoring performance, diagnosing issues, and resolving bugs to maintain a smooth user experience.
"
                   link="https://www.coachlife.com"
                   year="2025"
                   :skills="['Laravel', 'Next.js', 'TailwindCSS']"
          />
          <Project title="Time Logger"
                   description="An open-source time logging application for tracking and analyzing work sessions, featuring efficient session management and a clean, user-friendly interface."
                   link="https://github.com/ahmed-fawzy99/time-logger"
                   year="2024"
                   :skills="['Laravel', 'React', 'TailwindCSS']"
          />
          <Project title="HR Management System"
                   description="A web application that helps HR departments manage their employees, salaries, and attendance."
                   link="https://github.com/ahmed-fawzy99/hr-management-system"
                   year="2023"
                   :skills="['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS']"
          />
          <Project title="MyRepo: An End-to-End Encryption Cloud Storage System"
                   description="MyRepo offers the advantage of encrypting files on the client side before uploading them to the server. This ensures that the server cannot access the files."
                   link="https://github.com/ahmed-fawzy99/my-repo"
                   year="2022"
                   :skills="['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS', 'CryptoJS', 'Elliptic']"
          />
          <Project title="Al-Shahd Land-Registry System [Proprietary]"
                   description="An ERP system to manage Organization's Land assets, their owners, payment systems and data visualization for both the business managers and the land owners."
                   link="https://almoroj.com/"
                   year="2023"
                   :skills="['Laravel', 'Livewire', 'Blade', 'Bootstrap']"
          />
          <Project title="Quran App"
                   description="An eye-relieving SPA to browse the Quran, listen to its recitations via different readers, and show different tafsirs for each ayah."
                   link="https://github.com/ahmed-fawzy99/quran-app"
                   year="2024"
                   :skills="['Vue.js', 'TailwindCSS']"
          />
          <Project title="Egyptian National ID Data Extractor"
                   description="A mini tool to extract information about a citizen based only on their national ID number."
                   link="https://github.com/ahmed-fawzy99/national_id_exractor"
                   year="2023"
                   :skills="['Laravel', 'Vue.js', 'Inertia.js', 'TailwindCSS']"
          />
        </section>


        <section id="certifications" class="space-y-2">
          <h2 class="text-2xl font-bold text-center lg:text-start">Trainings & Certifications</h2>
          <Certification title="Certified Kubernetes Application Developer (CKAD)"
                         issuer="The Linux Foundation"
                         date="May 2026"
                         link="https://www.credly.com/badges/d3d0a87e-a516-40ae-a8e4-6e388044018b/public_url"
          >
            <div>
              <p>- Validated hands-on skills in designing, building, configuring, and exposing cloud-native applications on Kubernetes.</p>
              <p>- Demonstrated proficiency with core Kubernetes primitives, multi-container pods, observability, and application lifecycle management.</p>
            </div>
          </Certification>
          <Certification title="AWS Certified Solutions Architect – Associate"
                         issuer="Amazon Web Services"
                         date="Dec 2025"
                         link="https://www.credly.com/badges/021daa59-cb49-4323-9282-199cd01032e2/public_url"
          >
            <div>
              <p>- Validated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.</p>
              <p>- Demonstrated ability to select appropriate AWS services to meet specific technical requirements and optimize performance.</p>
            </div>
          </Certification>
          <Certification title="AWS Certified AI Practitioner"
                         issuer="Amazon Web Services"
                         date="Dec 2025"
                         link="https://www.credly.com/badges/0794644c-c939-4e76-b4c2-7f15e3cde1cd/public_url"
          >
            <p>- Validated knowledge of AI and ML concepts and AWS services related to AI/ML.</p>
            <p>- Demonstrated ability to build, train, and deploy machine learning models using AWS services.</p>
          </Certification>
          <Certification title="AWS Certified Cloud Practitioner"
                         issuer="Amazon Web Services"
                         date="Nov 2025"
                         link="https://www.credly.com/badges/8243bcfc-60f8-4898-8030-6c68f7e2e209/public_url"
          >
            <p>- Validated foundational knowledge of AWS cloud concepts, services, and terminology.</p>
            <p>- Demonstrated understanding of AWS core services, security, architecture, pricing, and support.</p>
          </Certification>
          <Certification title="Cisco Certified Network Associate CCNA Training"
                         issuer="NTI"
                         date="2022"
                         link="https://pub-2d4798b44c2c47d1adecc6c62bf47f38.r2.dev/img/certs/nti_ccna.jpg"
          >
            <p>- Completed comprehensive training on networking fundamentals, IP connectivity, security fundamentals, and automation.</p>
            <p>- Gained practical skills in configuring and troubleshooting Cisco routers and switches.</p>
          </Certification>
          <Certification title="Front-End Development Booster"
                         issuer="Sprints"
                         date="2021"
                         link="https://pub-2d4798b44c2c47d1adecc6c62bf47f38.r2.dev/img/certs/sprints_fe_booster.pdf"
          >
            <p>- Hands-on training in HTML, CSS, and JavaScript fundamentals for building modern web interfaces.</p>
            <p>- Introduced to npm and the front-end tooling ecosystem for managing packages and project workflows.</p>
          </Certification>
          <Certification title="Blockchain Workshop"
                         issuer="iHub"
                         date="2020"
                         link="https://pub-2d4798b44c2c47d1adecc6c62bf47f38.r2.dev/img/certs/blockchain_ihub.pdf"
          >
            <p>- Learned Solidity for writing smart contracts on the Ethereum blockchain.</p>
            <p>- Gained hands-on experience deploying and testing contracts using Ganache and core blockchain development tools.</p>
          </Certification>
        </section>


        <section id="resume" class="space-y-2 max-lg:mx-auto">
          <h2 class="text-2xl font-bold text-center lg:text-start">Resume</h2>
          <ResumeDownload />
        </section>

<!--        <section id="blog" class="space-y-2 max-lg:mx-auto">-->
<!--          <h2 class="text-2xl font-bold text-center lg:text-start">Blog</h2>-->
<!--          <ResumeDownload text="View Blog" link="https://blog.ahmaddeghady.com/"/>-->
<!--        </section>-->

        <section id="contact">
          <h2 class="text-2xl font-bold text-center lg:text-start">Contact</h2>
          <form class="w-full p-1 font-mono" @submit.prevent="contactHandler">
            <div class="mb-2">
              <label for="email" class="block mb-1 text-xs font-medium text-base-200">Your email</label>
              <input  id="email"
                     class="shadow-sm bg-transparent border border-base-300 text-base-200 placeholder-base-200/50 text-xs rounded-lg focus:ring-base-500 focus:border-base-300 block w-full p-2"
                     placeholder="ahmaddeghady99@gmail.com" required/>
            </div>
            <div class="mb-2">
              <label for="subject" class="block mb-1 text-xs font-medium text-base-200">Subject</label>
              <input type="text" id="subject"
                     class="shadow-sm bg-transparent border border-base-300 text-base-200 placeholder-base-200/50 text-xs rounded-lg focus:ring-base-500 focus:border-base-300 block w-full p-2"
                     placeholder="Subject" required/>
            </div>
            <div class="mb-4">
              <label for="message" class="block mb-1 text-xs font-medium text-base-200">Message</label>
              <textarea
                  type="text" id="message"
                  class="w-full block shadow-sm bg-transparent border border-base-300 text-base-200 text-xs
                         placeholder-base-200/50 rounded-lg focus:ring-base-500 focus:border-base-300 p-2 no-scrollbar"
                  rows="3"
                  placeholder="Hi there, what's up?"
                  required/>
            </div>
            <button type="submit"
                    class="w-full font-mono text-base-200 border border-base-300 hover:bg-base-800 focus:ring-2 focus:outline-none focus:ring-base-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    :class="{ 'cursor-not-allowed ': isSending }"
            >
              <span v-if="!isSending">Submit</span>
              <span v-else>Sending, Please Wait...</span>
            </button>
          </form>
        </section>

        <footer>
          <p class="text-justify text-base-300 text-xs text-sans mb-6">
            Made with 💚 using Vue.js + TailwindCSS, and a touch of NodeJS to receive your messages.
            Deployed on Cloudflare Pages and Google E2-micro. Coded on Webstorm.
          </p>
        </footer>
      </div>

    </template>

  </Layout>
</template>

