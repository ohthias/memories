const imagens = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1507143550189-fed454f93097?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80",

  "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1600&q=80",
];

/* ======================================
           WALL
        ====================================== */

const wall = document.getElementById("wall");

/* ======================================
           LAYOUTS PRONTOS
           TODOS 100% FECHADOS
        ====================================== */

const layouts = [
  [
    [1, 1, 5, 5],
    [6, 1, 5, 3],
    [11, 1, 6, 5],

    [6, 4, 2, 2],
    [8, 4, 3, 2],

    [1, 6, 4, 4],
    [5, 6, 6, 4],
    [11, 6, 6, 4],
  ],

  [
    [1, 1, 4, 4],
    [5, 1, 8, 4],
    [13, 1, 4, 4],

    [1, 5, 6, 5],
    [7, 5, 4, 2],
    [11, 5, 6, 5],

    [7, 7, 4, 3],
  ],

  [
    [1, 1, 6, 3],
    [7, 1, 4, 6],
    [11, 1, 6, 3],

    [1, 4, 3, 6],
    [4, 4, 3, 3],

    [11, 4, 3, 6],
    [14, 4, 3, 6],

    [4, 7, 3, 3],
    [7, 7, 4, 3],
  ],

  [
    [1, 1, 8, 5],
    [9, 1, 4, 2],
    [13, 1, 4, 5],

    [9, 3, 4, 3],

    [1, 6, 5, 4],
    [6, 6, 5, 4],
    [11, 6, 6, 4],
  ],
];

/* ======================================
           UTIL
        ====================================== */

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function randomTime() {
  return Math.floor(Math.random() * 5000) + 4000;
}

/* ======================================
           CREATE PHOTO
        ====================================== */

function createPhoto(src, area) {
  const div = document.createElement("div");

  div.className = "photo";

  div.style.gridColumn = `${area[0]} / span ${area[2]}`;

  div.style.gridRow = `${area[1]} / span ${area[3]}`;

  const img = document.createElement("img");

  img.src = src;

  img.loading = "eager";

  div.appendChild(img);

  return div;
}

/* ======================================
           RENDER
        ====================================== */

function render() {
  wall.classList.remove("fade");

  void wall.offsetWidth;

  wall.classList.add("fade");

  wall.innerHTML = "";

  const layout = layouts[Math.floor(Math.random() * layouts.length)];

  const photos = shuffle(imagens).slice(0, 10);

  layout.forEach((area, index) => {
    const src = photos[index % photos.length];

    wall.appendChild(createPhoto(src, area));
  });

  setTimeout(render, randomTime());
}

render();
