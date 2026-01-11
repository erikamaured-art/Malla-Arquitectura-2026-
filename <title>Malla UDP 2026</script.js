script.js
const courses = document.querySelectorAll('.course');
let approved = JSON.parse(localStorage.getItem('approved')) || [];

courses.forEach(course => {
  const id = course.dataset.id;
  const prereq = course.dataset.prereq;

  if (approved.includes(id)) {
    course.classList.add('approved');
  }

  if (prereq && !approved.includes(prereq)) {
    course.classList.add('locked');
  }

  course.addEventListener('click', () => {
    if (course.classList.contains('locked')) return;

    if (!course.classList.contains('active') && !course.classList.contains('approved')) {
      course.classList.add('active');
      return;
    }

    if (course.classList.contains('active')) {
      course.classList.remove('active');
      course.classList.add('approved');
      approved.push(id);
      localStorage.setItem('approved', JSON.stringify(approved));
      location.reload();
    }
  });
});
