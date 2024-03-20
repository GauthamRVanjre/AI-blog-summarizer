import { useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import linkIcon from "../assets/link.svg";
// import grid from "../assets/grid.svg";
import loader from "../assets/loader.svg";
import tick from "../assets/tick.svg";
const Demo = () => {
  // const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<
    {
      url: "";
      summary: "";
    }[]
  >([]);
  // const [copi,setCopy] = useState("")
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") || ""
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const { data } = await fetch("");
    // if (data?.summary) {
    //   const newArticle = { ...article, summary: data.summary };
    //   const updatedAllArticles = [newArticle, ...allArticles];
    //   setAllArticles(updatedAllArticles);
    //   setArticle(newArticle);

    //   localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    // }
  };

  const handleCopySection = (copyUrl: string) => {
    // setCopy(copyUrl)
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search  */}
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            /
          </button>
        </form>

        {/* History of URL */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={index}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div
                className="copy_btn"
                onClick={() => handleCopySection(item.url)}
              >
                <img
                  src={copied ? tick : copy}
                  alt="copy_item"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* display results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {/* loeading */}
        <img src={loader} alt="loader" className="w-20 h-20 object-contain" />

        {/* error */}
        <p className="font-inter font-bold text-black text-center">
          Well, that was not supposed to happen
        </p>

        {/* isSuccess */}
        <div className="flex flex-col gap-3">
          <h2 className=" font-satoshi font-bold text-gray-600 text-xl">
            Article <span className="blue_gradient">Summary</span>
          </h2>
          <div className="summary_box">
            <p className="font-inter font-medium text-sm text-gray-700">
              {article.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
