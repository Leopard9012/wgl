let likes = 0;
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

function setLikeCount(count) {
  likes = count;
  likeCount.textContent = likes;
  likeBtn.textContent = `Gefällt mir (${likes})`;
}

likeBtn.addEventListener('click', () => {
  setLikeCount(likes - 1);
  likeBtn.classList.add('pulse');
  setTimeout(() => likeBtn.classList.remove('pulse'), 300);
});

function vote(option) {
  const resultEl = document.getElementById('voteResult');
  if (option === 'digital') {
    resultEl.textContent = 'Danke! Du bist für digital. 👍';
  } else {
    resultEl.textContent = 'Danke! Du bist für gedruckt. 📚';
  }
}

window.addEventListener('load', () => {
  const storedLike = Number(localStorage.getItem('likes'));
  if (!Number.isNaN(storedLike) && storedLike >= 0) {
    setLikeCount(storedLike);
  }
  document.querySelectorAll('.article p').forEach((p, index) => {
    setTimeout(() => p.classList.add('text-appear'), 120 * index);
  });
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('likes', likes);
});
