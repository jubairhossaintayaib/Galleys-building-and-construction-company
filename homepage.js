// Homepage preview. Contact links open the visitor's chosen app; no data is collected.
// Proposed services beyond the Facebook-supported scope need customer confirmation.
const homeServices = [
  { id: 'general-building', title: 'General Building', image: 'building', text: 'Practical building work and improvements, shaped around your home.' },
  { id: 'landscaping', title: 'Landscaping', image: 'projects/project-2/image-1', alt: 'Galleys project with light paving, lawn and timber fencing around a rear garden', text: 'Make more of your garden, with outdoor spaces to enjoy every day.' },
  { id: 'fencing-gates', title: 'Fencing & Gates', image: 'projects/project-1/image-3', alt: 'New timber fence panels with concrete posts along a garden boundary', text: 'Define your boundaries with a fresh fence and a welcoming entrance.' },
  { id: 'shed-bases-groundworks', title: 'Shed Bases & Groundworks', image: 'projects/project-1/image-8', alt: 'Timber formwork marking out a prepared shed base beside a garden fence', text: 'A solid starting point, from preparing the ground to a base for your shed.' },
  { id: 'turfing-lawns', title: 'Turfing & Lawn Preparation', image: 'projects/project-2/image-6', alt: 'Finished garden lawn with neat stripes and planted borders', text: 'Ground preparation, topsoiling and plans for a greener garden.' },
  { id: 'patios-paving', title: 'Patios & Paving', image: 'patio', text: 'Space to sit, entertain and enjoy the outdoors, with paths that connect it.' },
  { id: 'brickwork-walls', title: 'Brickwork & Garden Walls', image: 'brickwork', text: 'Bring structure and character to your home and garden.' },
  { id: 'renovations', title: 'Renovations & Alterations', image: 'renovations', text: 'Rethink the space you have and make your home work better for you.' },
  { id: 'extensions', title: 'Extensions & Conversions', image: 'galleys-hero', text: 'Explore the possibilities for extra room as your needs change.' },
  { id: 'kitchens', title: 'Kitchen Fitting', image: 'kitchen', text: 'A fresh heart for your home, planned around the way you live.' },
  { id: 'decking', title: 'Decking & Garden Structures', image: 'decking', text: 'Create a place to relax with timber features for your outdoor space.' },
  { id: 'driveways', title: 'Driveways', image: 'driveway', text: 'Give your home a welcoming approach with a practical outdoor surface.' }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const photo = name => `assets/${name}.jpg`;
document.querySelector('#service-grid').innerHTML = homeServices.map((service, index) => `
  <article class="service-card" id="${service.id}">
    <div class="service-image"><img src="${photo(service.image)}" alt="${escapeHtml(service.alt || `Illustrative stock photograph for ${service.title.toLowerCase()}`)}" loading="lazy" width="900" height="600"><span>${String(index + 1).padStart(2, '0')}</span></div>
    <div class="service-copy"><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.text)}</p><a href="#contact" class="learn" aria-label="Discuss ${escapeHtml(service.title.toLowerCase())}">Let’s talk about it <b aria-hidden="true">↗</b></a></div>
  </article>`).join('');
document.querySelector('#service-links').innerHTML = homeServices.map(service => `<a href="#${service.id}">${escapeHtml(service.title)} <span aria-hidden="true">↗</span></a>`).join('');

// Client-supplied Facebook project photos. Albums 1, 2 and 4 contain selections
// of work, so their copy does not imply every photograph shows the same property.
const projectAlbums = [
  { title: 'Shed bases, fencing & garden preparation', type: 'GROUNDWORKS & GARDEN IMPROVEMENTS', label: 'A SELECTION OF OUR WORK', description: 'A collection of outdoor jobs: preparing shed bases, spreading topsoil ready for turf, and fitting new timber gates and fencing. Practical improvements that give each garden a fresh start.', images: [
    ['projects/project-1/image-3', 'New timber fencing along a garden boundary'],
    ['projects/project-1/image-8', 'Timber formwork for a shed base'],
    ['projects/project-1/image-1', 'Prepared garden soil beside the existing lawn'],
    ['projects/project-1/image-6', 'New timber gate with bracing and latch'],
    ['projects/project-1/image-4', 'Topsoiled roadside strip ready for turf'],
    ['projects/project-1/image-2', 'Levelled garden soil and timber boundary fence'],
    ['projects/project-1/image-5', 'Outside face of the new garden gate'],
    ['projects/project-1/image-7', 'Garden fencing with a trellis end panel'],
    ['projects/project-1/image-9', 'Ground preparation alongside the pavement'] ] },
  { title: 'Patios, lawns & garden landscaping', type: 'LANDSCAPING & OUTDOOR SPACES', label: 'A SELECTION OF OUR WORK', description: 'A selection of garden landscaping, from paved seating areas and timber-edged steps to fencing and neatly finished lawns. Different spaces, each with room to relax and enjoy the outdoors.', images: [
    ['projects/project-2/image-1', 'Paved rear garden with a lawn area and timber fencing'],
    ['projects/project-2/image-2', 'Striped garden lawn leading towards a summerhouse'],
    ['projects/project-2/image-3', 'Paved terrace with a timber-edged step'],
    ['projects/project-2/image-4', 'Paving and fencing beside a garden building'],
    ['projects/project-2/image-6', 'Finished lawn with planted borders'],
    ['projects/project-2/image-5', 'Garden view with lawn, timber decking and a raised pond'],
    ['projects/project-2/image-7', 'Long garden view towards the summerhouse'] ] },
  { title: 'A conservatory given a new home', type: 'CONSERVATORY INSTALLATION', label: 'ESSEX', description: 'A second-hand conservatory, carefully installed for a customer in Essex. Galleys fitted the conservatory onto groundwork and brickwork completed by another contractor, bringing the glazing and roof together in their new setting.', images: [
    ['projects/project-3/image-2', 'Installed conservatory viewed from the garden'],
    ['projects/project-3/image-5', 'Front of the conservatory with glazed sliding doors'],
    ['projects/project-3/image-4', 'Conservatory interior during installation'],
    ['projects/project-3/image-3', 'Conservatory frame and glazing during the work'],
    ['projects/project-3/image-1', 'Conservatory installed against the rear of the house'],
    ['projects/project-3/image-6', 'Detail of the conservatory glazing and opening window'],
    ['projects/project-3/image-7', 'Conservatory roofline against the house'] ] },
  { title: 'Kitchen fitting & roof construction', type: 'KITCHENS & FLAT-ROOF WORK', label: 'BOREHAM & CHELMSFORD', description: 'A collection of building work including a new kitchen in Boreham, a garage flat-roof system, and flat-roof work on a bungalow extension in Chelmsford. From timber construction to the finished kitchen details.', images: [
    ['projects/project-4/image-6', 'Fitted kitchen in Boreham with grey cabinets and timber worktops'],
    ['projects/project-4/image-2', 'Flat-roof deck during construction with an opening framed out'],
    ['projects/project-4/image-3', 'Timber roof structure over blockwork'],
    ['projects/project-4/image-5', 'Finished kitchen showing cabinets, oven and flooring'],
    ['projects/project-4/image-4', 'Timber roof framing during construction'],
    ['projects/project-4/image-1', 'View beneath the timber roof joists'],
    ['projects/project-4/image-7', 'View along the fitted kitchen towards the cooking area'] ] },
  { title: 'A deck made for getting together', type: 'TIMBER DECKING', label: 'CHELMSFORD', description: 'A timber deck for a Chelmsford couple who wanted space to entertain and enjoy a barbecue. The photos follow the work from clearing the area and building the frame to laying the finished decking boards.', images: [
    ['projects/project-5/image-1', 'Finished timber deck along the garden fence'],
    ['projects/project-5/image-3', 'Decking frame and joists under construction'],
    ['projects/project-5/image-2', 'Timber subframe beside the greenhouse'],
    ['projects/project-5/image-5', 'Cleared ground before the decking was installed'],
    ['projects/project-5/image-4', 'The garden corner before ground preparation'] ] },
  { title: 'Patios & paths that connect the garden', type: 'PATHWAYS & PATIO WORK', label: 'CHELMSFORD', description: 'Pathway and patio work in Chelmsford, including slab paving beside the house and a path through the planting. A closer look at the surfaces, edges and details around these outdoor spaces.', images: [
    ['projects/project-6/image-6', 'Slab pathway winding through garden planting'],
    ['projects/project-6/image-1', 'Slab paving beside the brick wall of the house'],
    ['projects/project-6/image-3', 'Paving detail with a gravel margin beside the wall'],
    ['projects/project-6/image-7', 'Paved approach with a channel drain'],
    ['projects/project-6/image-2', 'Detail of slab joints and the wall-side gravel border'],
    ['projects/project-6/image-4', 'Paved side access beside a timber gate'],
    ['projects/project-6/image-5', 'Close-up of the small-format paving surface'] ] }
];
document.querySelector('#project-grid').innerHTML = projectAlbums.map((project, projectIndex) => `<article class="project-card"><div class="project-copy"><p class="project-category">${escapeHtml(project.type)}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p></div><div class="project-mosaic">${project.images.slice(0, 5).map(([src, caption], index) => {
  const hasMore = index === 4 && project.images.length > 5;
  return `<button type="button" data-project="${projectIndex}" data-image="${index}" aria-label="${hasMore ? `View ${project.images.length - 4} more images in` : `Open image ${index + 1} of`} ${escapeHtml(project.title)}"><img src="${photo(src)}" alt="${escapeHtml(caption)}" loading="lazy" decoding="async" width="600" height="450">${hasMore ? `<span class="more-photos">+${project.images.length - 4}<small>View photos</small></span>` : ''}</button>`;
}).join('')}</div><div class="project-foot"><span>${escapeHtml(project.label)}</span><button data-project="${projectIndex}" data-image="0">${project.images.length} photos <span aria-hidden="true">↗</span></button></div></article>`).join('');

const header = document.querySelector('#site-header');
const nav = document.querySelector('#main-nav');
const mobileToggle = document.querySelector('.menu-toggle');
const serviceNav = document.querySelector('.services-nav');
const serviceToggle = document.querySelector('#services-toggle');
const serviceMenu = document.querySelector('#services-menu');
const desktop = window.matchMedia('(min-width: 1081px)');
const hoverPointer = window.matchMedia('(hover: hover)');
function setServices(open) { serviceToggle.setAttribute('aria-expanded', String(open)); serviceMenu.hidden = !open; }
function setNavigation(open) { mobileToggle.setAttribute('aria-expanded', String(open)); mobileToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); header.classList.toggle('menu-open', open); if (!open) setServices(false); }
serviceToggle.addEventListener('click', () => setServices(serviceToggle.getAttribute('aria-expanded') !== 'true'));
serviceNav.addEventListener('pointerenter', () => { if (desktop.matches && hoverPointer.matches) setServices(true); });
serviceNav.addEventListener('pointerleave', () => { if (desktop.matches && !serviceNav.contains(document.activeElement)) setServices(false); });
serviceNav.addEventListener('focusout', event => { if (!serviceNav.contains(event.relatedTarget)) setServices(false); });
mobileToggle.addEventListener('click', () => setNavigation(mobileToggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => { if (event.target.closest('a')) setNavigation(false); });
document.addEventListener('click', event => { if (!header.contains(event.target)) setNavigation(false); });
desktop.addEventListener('change', () => setNavigation(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.open) { if (!serviceMenu.hidden) { setServices(false); serviceToggle.focus(); } else if (header.classList.contains('menu-open')) { setNavigation(false); mobileToggle.focus(); } } });

// Native details elements retain keyboard and screen-reader support, even without JS.
const faqItems = [...document.querySelectorAll('.faq-list details')];
faqItems.forEach(item => item.addEventListener('toggle', () => { if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; }); }));

const lightbox = document.querySelector('#project-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const thumbnails = document.querySelector('#lightbox-thumbnails');
let currentProject = 0;
let currentImage = 0;
let galleryOpener = null;
function renderGalleryImage() {
  const album = projectAlbums[currentProject];
  const [source, caption] = album.images[currentImage];
  lightboxImage.src = photo(source);
  lightboxImage.alt = caption;
  document.querySelector('#lightbox-caption').textContent = caption;
  document.querySelector('#lightbox-count').textContent = `${currentImage + 1} / ${album.images.length}`;
  thumbnails.querySelectorAll('button').forEach((button, index) => button.setAttribute('aria-pressed', String(index === currentImage)));
}
function openGallery(projectIndex, imageIndex, opener) {
  currentProject = projectIndex;
  currentImage = imageIndex;
  galleryOpener = opener;
  const album = projectAlbums[currentProject];
  document.querySelector('#lightbox-title').textContent = album.title;
  thumbnails.innerHTML = album.images.map(([source, caption], index) => `<button data-thumb="${index}" aria-label="Show image ${index + 1}: ${escapeHtml(caption)}" aria-pressed="false"><img src="${photo(source)}" alt="" width="96" height="64"></button>`).join('');
  renderGalleryImage();
  lightbox.showModal();
  document.body.classList.add('modal-open');
  document.querySelector('.lightbox-close').focus();
}
function moveGallery(direction) { currentImage = (currentImage + direction + projectAlbums[currentProject].images.length) % projectAlbums[currentProject].images.length; renderGalleryImage(); }
document.querySelector('#project-grid').addEventListener('click', event => { const button = event.target.closest('[data-project]'); if (button) openGallery(Number(button.dataset.project), Number(button.dataset.image), button); });
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => moveGallery(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => moveGallery(1));
thumbnails.addEventListener('click', event => { const button = event.target.closest('[data-thumb]'); if (button) { currentImage = Number(button.dataset.thumb); renderGalleryImage(); } });
lightbox.addEventListener('keydown', event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); moveGallery(event.key === 'ArrowRight' ? 1 : -1); } });
lightbox.addEventListener('click', event => { if (event.target !== lightbox) return; const bounds = lightbox.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close(); });
lightbox.addEventListener('close', () => { document.body.classList.remove('modal-open'); galleryOpener?.focus({ preventScroll: true }); });
document.querySelector('#year').textContent = new Date().getFullYear();
