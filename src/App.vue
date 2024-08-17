<script setup>
import Layout from "@/components/Layout.vue";
import SocialMediaList from "@/components/SocialMediaList.vue";
import SkillList from "@/components/SkillList.vue";
import Project from "@/components/Project.vue";
import {onMounted, ref} from "vue";
import Swal from "sweetalert2";

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
  fetch('http://127.0.0.1:3000/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify(data)
  }).then(response => {
    if (response.ok) {
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
          const sectionText = document.getElementById(entry.target.id + "-a").innerText;
          if (!sectionText.startsWith('___')) {
            document.getElementById(entry.target.id + "-a").innerText = '___' + document.getElementById(entry.target.id + "-a").innerText + '___';
          }
          for (const section of sections) {
            console.log(`${section.id} - ${entry.target.id}`);
            if (section.id !== entry.target.id) {
              const oldSection = document.getElementById(section.id + "-a");
              oldSection.innerText = oldSection.innerText.replaceAll('___', '');
            }
          }
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
          <h3 class="text-xl text-center lg:text-start">Junior Full-Stack Developer</h3>
          <p class="text-xs text-center lg:text-start">I build web applications and automate tasks.</p>
        </div>
        <div class="mt-8">
          <ul class="space-y-2 text-center lg:text-start">
            <li><a id="about-a" href="#about">&#60;About&#62;</a></li>
            <li><a id="skills-a" href="#skills">&#60;Skills&#62;</a></li>
            <li><a id="projects-a" href="#projects">&#60;Projects&#62;</a></li>
            <li><a id="contact-a" href="#contact">&#60;Contact&#62;</a></li>
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
          <p class="text-justify text-base-300 text-xs text-sans">
            A highly motivated junior full-stack developer with a passion for building web applications. Love
            problem-solving and finding optimal solutions for recurring problems. I believe that if I have to do a job,
            it has to be done perfectly with high attention to detail. Only fine lines divide between perfection and
            "just average".
            <!--            While all roads lead to Rome, I believe we have to choose the most optimal road to reach it. The destination is not all that matters, as the journey is as important as the destination itself. -->
            <!--            I chose to specialize in full-stack web development because, well, everything is-->
          </p>
          <p class="text-justify text-base-300 text-xs text-sans">
            I enjoy building web applications, scraping data, and automating tedious tasks.
            I have 3 years skills with Laravel, Vue.js, TailwindCSS, and Inertia.js. I occasionally use Python and
            Node.js for automation. I am looking for opportunities to work on projects that help me grow as a developer
            and contribute to the community.
          </p>
        </section>
        <section id="skills">
          <h2 class="text-2xl font-bold mb-2 text-center lg:text-start">Skills</h2>
          <ul>
            <SkillList>Laravel</SkillList>
            <SkillList>Vue.js</SkillList>
            <SkillList>TailwindCSS</SkillList>
            <SkillList>Inertia.js</SkillList>
            <SkillList>Plain Javascript</SkillList>
            <SkillList>Python</SkillList>
            <SkillList>PHP</SkillList>
            <SkillList>PostgreSQL</SkillList>
            <SkillList>GraphQL</SkillList>
            <SkillList>Linux Adminstration</SkillList>
            <SkillList>Bash Scripting</SkillList>
            <SkillList>Data Scraping</SkillList>
            <SkillList>Nginx</SkillList>
            <SkillList>C++</SkillList>
            <SkillList>Bootstrap</SkillList>
            <SkillList>Git</SkillList>
            <SkillList>Docker</SkillList>
            <SkillList>HTML5</SkillList>
            <SkillList>CSS3</SkillList>
            <SkillList>Graphic Design (Adobe Photoshop)</SkillList>
            <SkillList>Video Editing (Adobe Premiere Pro)</SkillList>
          </ul>
        </section>

        <section id="projects" class="space-y-2">
          <h2 class="text-2xl font-bold text-center lg:text-start">Projects</h2>
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
                   link="https://landreg.almoroj.com/"
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

        <section id="contact">
          <h2 class="text-2xl font-bold text-center lg:text-start">Contact</h2>
          <form class="w-full p-1 font-mono" @submit.prevent="contactHandler">
            <div class="mb-2">
              <label for="email" class="block mb-1 text-xs font-medium text-base-200">Your email</label>
              <input  id="email"
                     class="shadow-sm bg-transparent border border-base-300 text-base-200 placeholder-base-200/50 text-xs rounded-lg focus:ring-base-500 focus:border-base-300 block w-full p-2"
                     placeholder="Ahmeddeghady99@gmail.com" required/>
            </div>
            <div class="mb-2">
              <label for="subject" class="block mb-1 text-xs font-medium text-base-200">Subject</label>
              <input type="text" id="subject"
                     class="shadow-sm bg-transparent border border-base-300 text-base-200 placeholder-base-200/50 text-xs rounded-lg focus:ring-base-500 focus:border-base-300 block w-full p-2"
                     placeholder="Project Inquiry" required/>
            </div>
            <div class="mb-4">
              <label for="message" class="block mb-1 text-xs font-medium text-base-200">Message</label>
              <textarea
                  type="text" id="message"
                  class="w-full block shadow-sm bg-transparent border border-base-300 text-base-200 text-xs
                         placeholder-base-200/50 rounded-lg focus:ring-base-500 focus:border-base-300 p-2 no-scrollbar"
                  rows="3"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
            Made with 💚 with Vue.js + TailwindCSS, and a touch of NodeJS to receive your messages.
            Deployed on Google E2-micro. Coded on Webstorm.
          </p>
        </footer>
      </div>

    </template>

  </Layout>
</template>

