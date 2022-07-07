const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#title-field').value;
  const content = document.querySelector('#content-field').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

console.log('running new post script');

document
  .querySelector('#submit-btn')
  .addEventListener('click', newFormHandler);
