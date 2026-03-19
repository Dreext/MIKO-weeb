// Project groups mapped to act names and files
const projectSections = [
  { title: "Act 1 — Clipping Mask", files: ["act 1.png"] },
  { title: "Act 2 — Brochure", files: [
    { name: "brochure outside act 2.png", label: "Outside" },
    { name: "brochure inside act 2.png", label: "Inside" }
  ] },
  { title: "Act 3 — Layer Mask", files: [
    { name: "act 3.png", label: "Mask Effects" },
    { name: "act 3 (2).png", label: "Text Around Image" }
  ] },
  { title: "Act 4 — Selection", files: ["act 4.png"] },
  { title: "Act 5 — Blending Mode", files: [
    { name: "soft light act 5.png", label: "Soft Light" },
    { name: "overlay act 5.png", label: "Overlay" },
    { name: "screen act 5.png", label: "Screen" },
    { name: "multiply act 5.png", label: "Multiply" }
  ] },
  { title: "Act 6 — Layer Style", files: [
    { name: "creative act6.jpeg", label: "Creative" },
    { name: "Future act 6.jpeg", label: "Future" },
    { name: "never give up act 6.jpeg", label: "Never Give Up" }
  ] }
];

const projectsBtn = document.getElementById('projectsBtn');
const closeBtn = document.getElementById('closeProjects');
const projectsSection = document.getElementById('projects');
const projectsGrid = document.getElementById('projectsGrid');

function showProjects(){
  projectsGrid.innerHTML = '';
  projectSections.forEach(section => {
    const wrapper = document.createElement('div');
    wrapper.className = 'project-group';

    const heading = document.createElement('h3');
    heading.textContent = section.title;
    wrapper.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'project-group-grid';

    section.files.forEach(file => {
      const { name, label } = typeof file === 'string' ? { name: file, label: null } : file;

      const item = document.createElement('div');
      item.className = 'project-item';

      const img = document.createElement('img');
      img.alt = label ? `${label} (${name})` : name;
      // encode spaces and special characters so browser can load the local file
      img.src = encodeURI('./' + name);
      item.appendChild(img);

      if (label) {
        const caption = document.createElement('span');
        caption.className = 'label';
        caption.textContent = label;
        item.appendChild(caption);
      }

      grid.appendChild(item);
    });

    wrapper.appendChild(grid);
    projectsGrid.appendChild(wrapper);
  });
  projectsSection.classList.remove('hidden');
  projectsSection.scrollIntoView({behavior:'smooth'});
}

function hideProjects(){
  projectsSection.classList.add('hidden');
  projectsGrid.innerHTML = '';
}

projectsBtn.addEventListener('click', showProjects);
closeBtn.addEventListener('click', hideProjects);