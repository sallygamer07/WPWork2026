const books = [
  {
    title: "10대를 위한 정의란 무엇인가",
    author: "마이클 샌델",
    publisher: "미래엔아이세움",
    date: "2014.11.30",
    genre: "비문학",
    src: "img/10대를위한정의란무엇인가.png",
    desc: "정의란 무엇인지 청소년들도 이해하기 쉽게 설명해주어서 좋았다.",
    rate: 4,
  },
  {
    title: "1984",
    author: "조지 오웰",
    publisher: "민음사",
    date: "2007.03.30",
    genre: "문학",
    src: "img/1984.png",
    desc: "",
    rate: 4,
  },
  {
    title: "나무",
    author: "베르나르 베르베르",
    publisher: "열린책들",
    date: "2003.06.30",
    genre: "문학",
    src: "img/나무.png",
    desc: "",
    rate: 5,
  },
  {
    title: "데미안",
    author: "헤르만 헤세",
    publisher: "민음사",
    date: "2009.01.20",
    genre: "문학",
    src: "img/데미안.png",
    desc: "",
    rate: 5,
  },
  {
    title: "설민석의 조선왕조실록",
    author: "설민석",
    publisher: "세계사",
    date: "2016.07.20",
    genre: "비문학",
    src: "img/설민석의조선왕조실록.png",
    desc: "",
    rate: 5,
  },
  {
    title: "세계사 편력",
    author: "J.네루",
    publisher: "일빛",
    date: "2004.06.05",
    genre: "비문학",
    src: "img/세계사편력.png",
    desc: "",
    rate: 4,
  },
  {
    title: "안네의 일기",
    author: "안네 프랑크",
    publisher: "문학사상",
    date: "1995.05.01",
    genre: "문학",
    src: "img/안네의일기.png",
    desc: "",
    rate: 5,
  },
  {
    title: "작별하지 않는다",
    author: "한강",
    publisher: "문학동네",
    date: "2021.09.09",
    genre: "문학",
    src: "img/작별하지않는다.png",
    desc: "",
    rate: 5,
  },
  {
    title: "총 균 쇠",
    author: "제레미 다이아몬드",
    publisher: "문학사상",
    date: "2005.12.19",
    genre: "비문학",
    src: "img/총균쇠.png",
    desc: "",
    rate: 5,
  },
];

function LoadBooks() {
  const section = document.getElementsByTagName("section")[0];
  let bookshelfLine = document.createElement("div");
  bookshelfLine.classList.add("bookshelfLine");
  section.appendChild(bookshelfLine);
  for (const book of books) {
    const img = document.createElement("img");
    img.src = book.src;
    img.alt = "책 표지";
    img.addEventListener("click", () => LoadBookInfo(book));
    bookshelfLine.appendChild(img);
    if (bookshelfLine.childElementCount === 5) {
      const newBookshelfLine = document.createElement("div");
      newBookshelfLine.classList.add("bookshelfLine");
      section.appendChild(newBookshelfLine);
      bookshelfLine = newBookshelfLine;
    }
  }
}

function LoadBookInfo(book) {
  const bookPanel = document.querySelector(".bookPanel");
  const bookInfo = bookPanel.getElementsByClassName("bookInfo")[0];
  const img = bookPanel.querySelector("img");
  img.src = book.src;
  img.alt = "책 표지";

  const title = bookInfo.querySelector("h3");
  title.textContent = book.title;

  const author = bookInfo.querySelector("p:nth-of-type(1)");
  author.textContent = `저자 | ${book.author}`;

  const publisher = bookInfo.querySelector("p:nth-of-type(2)");
  publisher.textContent = `출판사 | ${book.publisher}`;

  const date = bookInfo.querySelector("p:nth-of-type(3)");
  date.textContent = `출간일 | ${book.date}`;

  const genre = bookInfo.querySelector("p:nth-of-type(4)");
  genre.textContent = `장르 | ${book.genre}`;

  const desc = bookInfo.querySelector(".bookDescription p");
  desc.textContent = book.desc;

  const rate = bookInfo.querySelectorAll(".bookStar span");
  let count = 0;
  for (const star of rate) {
    count += 1;
    star.textContent = "☆";
    if (count <= book.rate) {
      star.textContent = "★";
    }
  }
}

LoadBooks();
