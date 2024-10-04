type State = "読書中" | "読了" | "積読";
export interface Book {
  title: string;
  subtitle?: string;
  authors: string[];
  url: string;
  tags: string[];
  state: State;
}

const books: Book[] = [
  {
    title: "最適化と変分法",
    authors: ["寒野善博", "土谷隆"],
    tags: ["数学", "最適化"],
    state: "積読",
    url: "https://www.maruzen-publishing.co.jp/item/b294841.html",
  },
  {
    title: "Pythonではじめる数理最適化",
    subtitle: "ケーススタディでモデリングのスキルを身につけよう",
    authors: ["岩永二郎", "石原響太", "西村直樹", "田中一樹"],
    tags: ["数学", "最適化", "Python"],
    state: "積読",
    url: "https://www.ohmsha.co.jp/book/9784274227356/",
  },
  {
    title: "しっかり学ぶ数理最適化",
    subtitle: "モデルからアルゴリズムまで",
    authors: ["梅谷俊治"],
    tags: ["数学", "最適化"],
    state: "読書中",
    url: "https://www.kspub.co.jp/book/detail/5212707.html",
  },
  {
    title: "ゼロから作るDeep Learning",
    subtitle: "Pythonで学ぶディープラーニングの理論と実装",
    authors: ["斎藤康毅"],
    tags: ["ML", "Python"],
    state: "読了",
    url: "https://www.ohmsha.co.jp/book/9784873117584/",
  },
];

export default books;
