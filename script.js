
function generateCV() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const experience = document.getElementById('experience').value;

  const content = `
    اسم: ${name}\n
    بريد إلكتروني: ${email}\n
    مؤهل علمي:\n${education}\n
    المهارات:\n${skills}\n
    الخبرات:\n${experience}
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'CV.txt';
  link.click();
}
