const data = [
  { letter: "A", desc: "Fist with thumb on the side.", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sign_language_A.svg" },
  { letter: "B", desc: "Flat hand, thumb across palm.", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Sign_language_B.svg" },
  { letter: "C", desc: "Hand forms a C shape.", img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sign_language_C.svg" },
  { letter: "D", desc: "Index up, rest circle.", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sign_language_D.svg" },
  { letter: "E", desc: "Fingers curled, thumb in.", img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sign_language_E.svg" },
  { letter: "F", desc: "OK sign, other fingers up.", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Sign_language_F.svg" },
  { letter: "G", desc: "Index and thumb sideways.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sign_language_G.svg" },
  { letter: "H", desc: "Two fingers out sideways.", img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sign_language_H.svg" },
  { letter: "I", desc: "Pinkie up.", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sign_language_I.svg" },
  { letter: "J", desc: "Draw J with pinkie.", img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Sign_language_J.svg" },
  { letter: "K", desc: "Peace sign, thumb in middle.", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Sign_language_K.svg" },
  { letter: "L", desc: "Thumb and index in L.", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sign_language_L.svg" },
  { letter: "M", desc: "Three fingers over thumb.", img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Sign_language_M.svg" },
  { letter: "N", desc: "Two fingers over thumb.", img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sign_language_N.svg" },
  { letter: "O", desc: "Fingers and thumb in circle.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sign_language_O.svg" },
  { letter: "P", desc: "K hand downward.", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sign_language_P.svg" },
  { letter: "Q", desc: "G hand downward.", img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sign_language_Q.svg" },
  { letter: "R", desc: "Fingers crossed.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sign_language_R.svg" },
  { letter: "S", desc: "Fist, thumb in front.", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sign_language_S.svg" },
  { letter: "T", desc: "Thumb between index & middle.", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sign_language_T.svg" },
  { letter: "U", desc: "Two fingers up together.", img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Sign_language_U.svg" },
  { letter: "V", desc: "Peace sign.", img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sign_language_V.svg" },
  { letter: "W", desc: "Three fingers up.", img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Sign_language_W.svg" },
  { letter: "X", desc: "Hooked index finger.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sign_language_X.svg" },
  { letter: "Y", desc: "Thumb and pinkie out.", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sign_language_Y.svg" },
  { letter: "Z", desc: "Draw Z with index finger.", img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Sign_language_Z.svg" }
];

const root = document.getElementById('root');
const grid = document.createElement('div');
grid.className = 'grid';
grid.setAttribute('role', 'grid');

data.forEach(sign => {
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Learn ASL letter ${sign.letter}`);
  card.innerHTML = `<strong>${sign.letter}</strong><br><img src='${sign.img}' alt='ASL letter ${sign.letter}' />`;
  card.onclick = () => showModal(sign);
  card.onkeydown = (e) => { if (e.key === 'Enter') showModal(sign); };
  grid.appendChild(card);
});
root.appendChild(grid);

function showModal(sign) {
  const overlay = document.createElement('div');
  overlay.className = 'modal';
  overlay.onclick = () => overlay.remove();
  overlay.innerHTML = `
    <div class='modal-content' role='dialog' aria-modal='true'>
      <h2>${sign.letter}</h2>
      <img src='${sign.img}' alt='ASL letter ${sign.letter}' />
      <p>${sign.desc}</p>
      <button onclick='this.closest(".modal").remove()'>Close</button>
    </div>
  `;
  document.body.appendChild(overlay);
}
